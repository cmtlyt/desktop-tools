import { forwardRef, HTMLAttributes, memo, useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import { Select } from 'antd';
import { produce } from 'immer';
import { IoLockClosed, IoLockOpen } from 'react-icons/io5';
import { IoIosRemoveCircle, IoMdSync } from 'react-icons/io';
import { debounce, noop, TAnyFunc } from '@cmtlyt/base';
import { Button, FlexBox } from '@/components/base';
import { ImageUpload, OnChangeFunc } from '@/components/image-upload';
import { Drawer } from '@/components/drawer';
import { RightHandleButtonList } from '@/components/base/list';
import { isPhone } from '@/utils';
import { omit_ } from '@cmtlyt/base/fp/utils';
import { Show } from '@/components/show';
import { Switch } from '@/components/switch';
import { getLayoutStore } from '@/store';
import { getDYYLStore, ImageInfo, useDYYLStoreSlice } from './store';

export const PreviewText = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  vertical-align: middle;
`;

export const PreviewItemWrapper = styled.section<{
  $zIndex: number;
  $option?: PreviewItemInfo;
}>`
  position: relative;
  z-index: ${(props) => props.$zIndex || 0};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 2em;
  line-height: 2em;

  ${(props) => {
    if (!props.$option) return {};
    return omit_(['bg', 'text'], props.$option);
  }}

  input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    opacity: 0;
    font-size: 0;
  }
`;

export const PreviewWrapper = styled.section<{
  $list: PreviewItemInfo[];
  $extendList: Set<number>;
}>`
  position: relative;

  flex: 1;
  display: grid;
  grid-template-rows: ${(props) => {
    const rows: string[] = ['auto'];
    const list = props.$list;
    const count = list.length;

    for (let idx = 1; idx < count; ++idx) {
      const { fontSize } = list[idx];
      rows.push(props.$extendList.has(idx) ? 'auto' : fontSize ? `${parseFloat(fontSize) * 2}px` : '2em');
    }
    return rows.join(' ');
  }};

  max-width: 40rem;
`;

export const PreviewImage = styled.img`
  position: relative;
  vertical-align: middle;
  width: 100%;
`;

export const PageContainer = styled.section`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export interface PreviewItemInfo {
  bg: string;
  text: string;
  color?: string;
  fontSize?: string;
}

export interface PreviewItemInfoWithIdx extends PreviewItemInfo {
  idx: number;
}

const InheritProp: Set<keyof PreviewItemInfo> = new Set<keyof PreviewItemInfo>(['bg', 'color', 'fontSize']);

interface PreviewItemProps {
  data: PreviewItemInfo;
  idx: number;
  zIndex: number;
  onClick: (idx: number) => void;
}

function PreviewItem(props: PreviewItemProps) {
  const { data: item, idx, zIndex, onClick } = props;

  return (
    <PreviewItemWrapper key={idx} $zIndex={zIndex} $option={item} onClick={() => onClick(idx)}>
      <PreviewImage src={item.bg} alt={item.text} crossOrigin="anonymous" />
      <PreviewText>{item.text}</PreviewText>
    </PreviewItemWrapper>
  );
}

interface PreviewListProps extends HTMLAttributes<HTMLElement> {
  list: PreviewItemInfo[];
}

export const PreviewList = memo(
  forwardRef<HTMLElement, PreviewListProps>((props, ref) => {
    const { list, ...rest } = props;

    const extendSet = useRef(new Set<number>());
    const [, updateFlag] = useState(0);

    const forceUpdate = useCallback(() => {
      updateFlag((prev) => (prev + 1) % 10);
    }, []);

    const extendHandler = useCallback(
      (idx: number) => {
        extendSet.current[extendSet.current.has(idx) ? 'delete' : 'add'](idx);
        forceUpdate();
      },
      [forceUpdate],
    );

    return (
      <section style={{ padding: '1rem' }}>
        <Show when={!list.length}>
          {() => <FlexBox $justifyContent="center">请点击右上方配置按钮, 配置信息</FlexBox>}
        </Show>
        <PreviewWrapper ref={ref} $list={list} $extendList={extendSet.current} {...rest}>
          {list.map((item, idx) => (
            <PreviewItem key={idx} data={item} idx={idx} onClick={extendHandler} zIndex={list.length - idx} />
          ))}
        </PreviewWrapper>
      </section>
    );
  }),
);

type PreviewChangeFunc = <K extends keyof PreviewItemInfo>(idx: number, prop: K, value: PreviewItemInfo[K]) => void;

interface FormItemProps {
  idx: number;
  data?: Partial<PreviewItemInfo>;
  images: ImageInfo[];
  disableRemove?: boolean;
  onChange: PreviewChangeFunc;
  onEditOption?: (data: PreviewItemInfoWithIdx) => void;
  onRemove?: (idx: number) => void;
}

const FormItemInputBox = styled(FlexBox)`
  input {
    flex: 1;
    border: 1px solid #ccc;
    border-radius: 1rem;
  }
`;

const FormItemSelectBox = styled(FlexBox)`
  .ant-select {
    flex: 1;
  }
  & > svg {
    font-size: 2rem;
  }
`;

const FormItem = memo((props: FormItemProps) => {
  const { idx, data: item = {}, disableRemove = false, images, onChange, onEditOption = noop, onRemove = noop } = props;

  return (
    <FlexBox $direction="column" $gap="0.5rem">
      <FormItemSelectBox $alignItems="center" $gap="0.5rem">
        <Select value={item.bg || ''} options={images} onChange={(value) => onChange(idx, 'bg', value)} />
        <Show when={!disableRemove}>{() => <IoIosRemoveCircle onClick={() => onRemove(idx)} />}</Show>
      </FormItemSelectBox>
      <FormItemInputBox $gap="0.5rem">
        <input type="text" defaultValue={item.text || ''} onChange={(e) => onChange(idx, 'text', e.target.value)} />
        <Button onClick={() => onEditOption({ ...item, idx })}>配置</Button>
      </FormItemInputBox>
    </FlexBox>
  );
});

function propInitHandler(list: PreviewItemInfo[], prop: keyof PreviewItemInfo, inheritData: Partial<PreviewItemInfo>) {
  if (!inheritData[prop] || list[0][prop]) return;
  list.forEach((item) => {
    if (item[prop]) return;
    item[prop] = inheritData[prop]!;
  });
}

interface TextOptionEditFormProps {
  data: PreviewItemInfoWithIdx;
  onChange: PreviewChangeFunc;
}

const TextOptionFormItem = styled.label`
  display: flex;
  align-items: center;
  line-height: 1;

  span {
    flex: 1;
    font-size: 1.6rem;

    &::after {
      content: ':';
      padding-right: 1rem;
    }
  }

  input {
    box-sizing: border-box;
    flex: 2;
    height: 2em;
  }
`;

function TextOptionEditForm(props: TextOptionEditFormProps) {
  const { data: source, onChange } = props;
  const [data, setData] = useState(source);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const emitChange = useCallback(debounce(onChange, 500), [onChange]);

  const onChangeHandler = useCallback(
    (data: PreviewItemInfoWithIdx, prop: keyof PreviewItemInfo) => {
      setData(data);
      emitChange(data.idx, prop, data[prop]);
    },
    [emitChange],
  );

  return (
    <>
      <PreviewItem data={data} idx={data.idx} zIndex={0} onClick={noop} />
      <FlexBox $direction="column" $gap="1rem" style={{ paddingTop: '1rem' }}>
        <TextOptionFormItem>
          <span>文字颜色</span>
          <input
            type="color"
            value={data.color || ''}
            onChange={(e) => onChangeHandler({ ...data, color: e.target.value }, 'color')}
          />
        </TextOptionFormItem>
        <TextOptionFormItem>
          <span>文字大小</span>
          <input
            type="number"
            value={data.fontSize ? parseFloat(data.fontSize) : ''}
            onChange={(e) => onChangeHandler({ ...data, fontSize: `${e.target.value}px` }, 'fontSize')}
          />
        </TextOptionFormItem>
      </FlexBox>
    </>
  );
}

interface FormProps {
  list: PreviewItemInfo[];
  onChange: (cb: (draft: PreviewItemInfo[]) => PreviewItemInfo[]) => void;
}

export const Form = memo((props: FormProps) => {
  const { list, onChange } = props;
  const { images } = useDYYLStoreSlice('images');
  const inheritData = useRef<Partial<PreviewItemInfo> & { inheritIdx: number }>({ inheritIdx: 0 });
  const [editItem, setEditItem] = useState<PreviewItemInfoWithIdx | null>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updatePreviewList = useCallback(
    debounce(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ((idx: number, prop: keyof PreviewItemInfo, value: any) => {
        onChange(
          produce((draft) => {
            const isNew = idx >= draft.length;
            if (isNew && !value) return;
            const item = draft[idx] || { ...inheritData.current, idx };
            if (isNew) draft.push(item);
            item[prop] = value || '';
            if (
              // 可以被继承
              InheritProp.has(prop) &&
              // 缓存为空
              (!inheritData.current[prop] ||
                // 继承自最近的元素
                (inheritData.current.inheritIdx <= idx &&
                  // 缓存值与当前值不同
                  inheritData.current[prop] !== value))
            ) {
              inheritData.current.inheritIdx = idx;
              inheritData.current[prop] = value;
              propInitHandler(draft, prop, inheritData.current);
            }
          }),
        );
      }) as PreviewChangeFunc,
      500,
    ),
    [onChange],
  );

  const removePreviewItem = useCallback(
    (idx: number) => {
      onChange(
        produce((draft) => {
          draft.splice(idx, 1);
        }),
      );
    },
    [onChange],
  );

  return (
    <>
      <FlexBox $direction="column" $gap="0.8rem">
        {list.map((item, idx) => (
          <FormItem
            key={idx}
            idx={idx}
            images={images}
            data={item}
            onChange={updatePreviewList}
            onEditOption={setEditItem}
            onRemove={removePreviewItem}
          />
        ))}
        <FormItem key={list.length} idx={list.length} images={images} disableRemove onChange={updatePreviewList} />
      </FlexBox>
      <Drawer open={!!editItem} title="文本配置" onClose={() => setEditItem(null)}>
        {editItem && <TextOptionEditForm data={editItem} onChange={updatePreviewList} />}
      </Drawer>
    </>
  );
});

const StyledDrawer = styled(Drawer)`
  background: transparent !important;

  .ant-drawer-header,
  .ant-drawer-body {
    background: #fff;
  }

  .ant-drawer-body {
    opacity: ${isPhone() ? '0.7' : '1'};
  }
`;

const SizeForm = styled(FlexBox)`
  padding-bottom: 1.5rem;

  input {
    height: 2em;
    border: 1px solid #ccc;
    border-radius: 1rem;
  }
`;

const OperationBox = styled(FlexBox)`
  & > svg {
    font-size: 2rem;
  }
`;

interface SizeChangeFormProps {
  applyDomSize: TAnyFunc;
}

const SizeChangeForm = memo(({ applyDomSize }: SizeChangeFormProps) => {
  const { saveSize } = useDYYLStoreSlice('saveSize');
  const [lockAspectRatio, setLockAspectRatio] = useState(true);

  const onSizeChange = useCallback(
    (pos: 'width' | 'height', value: string) => {
      const { saveSize, setSaveSize } = getDYYLStore();
      const { ...tempSize } = saveSize;

      if (lockAspectRatio) {
        /// 宽高锁定
        const ratio = saveSize.aspectRatio;
        if (pos === 'width') {
          tempSize.width = Number(value);
          tempSize.height = Number(value) / ratio;
        } else {
          tempSize.height = Number(value);
          tempSize.width = Number(value) * ratio;
        }
      } else {
        /// 宽高不锁定
        tempSize[pos] = Number(value);
        // 实时调整宽高比
        tempSize.aspectRatio = tempSize.width / tempSize.height;
      }

      setSaveSize(tempSize);
    },
    [lockAspectRatio],
  );

  const onLockChange = useCallback(() => {
    setLockAspectRatio((v) => !v);
  }, []);

  return (
    <SizeForm $gap="0.5rem" $alignItems="center">
      <input type="number" value={saveSize.width} onChange={(e) => onSizeChange('width', e.target.value)} />
      <input type="number" value={saveSize.height} onChange={(e) => onSizeChange('height', e.target.value)} />
      <OperationBox $alignItems="center" $gap="0.5rem" onClick={onLockChange}>
        <Switch when={lockAspectRatio} fullback={<IoLockOpen />}>
          {() => <IoLockClosed />}
        </Switch>
        <IoMdSync
          onClick={() => {
            applyDomSize();
            getLayoutStore().showMessage({ type: 'success', content: '同步成功', duration: 1 });
          }}
        />
      </OperationBox>
    </SizeForm>
  );
});

export const FormDrawer = memo(
  (props: { list: PreviewItemInfo[]; applyDomSize?: () => void; onChange?: FormProps['onChange'] }) => {
    const { list, applyDomSize = noop, onChange = noop } = props;
    const { showForm } = useDYYLStoreSlice(['showForm']);
    const [showImageUpload, setShowImageUpload] = useState(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const imageChangeHandler = useCallback(
      debounce<OnChangeFunc>((_, files) => {
        getDYYLStore().setImages(files.map((file) => ({ value: file.url!, label: file.name })));
        getLayoutStore().showMessage({ type: 'success', content: '图片上传成功' });
      }, 300),
      [],
    );

    return (
      <StyledDrawer
        open={showForm}
        className={StyledDrawer}
        title="配置信息"
        width="40rem"
        onClose={() => getDYYLStore().setShowForm(false)}
        extra={<RightHandleButtonList buttons={[{ text: '图片管理', onClick: () => setShowImageUpload(true) }]} />}
      >
        <SizeChangeForm applyDomSize={applyDomSize} />

        {/* 表单列表 */}
        <Form list={list} onChange={onChange} />

        <Drawer open={showImageUpload} title="图片管理" width="40rem" onClose={() => setShowImageUpload(false)}>
          <ImageUpload placeholderText="上传图片资源" onChange={imageChangeHandler} />
        </Drawer>
      </StyledDrawer>
    );
  },
);
