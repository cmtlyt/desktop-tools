import { forwardRef, memo, useImperativeHandle, useRef, useState } from 'react';
import {
  ColorPicker,
  ColorPickerProps,
  InputNumber,
  InputNumberProps,
  Select,
  SelectProps,
  Upload,
  UploadProps,
} from 'antd';
import styled from 'styled-components';
import { FlexBox } from '@/components/base';
import { filterOptions } from './constant';

export const Wrapper = styled(FlexBox)`
  padding: var(--page-padding);
`;

const FileInputPlaceholder = styled(FlexBox)`
  position: absolute;
  inset: 0;
  background: var(--color-bg-1);
  border-radius: var(--radius-base);
  cursor: pointer;
`;

const { Dragger } = Upload;

const StyledDragger = styled(Dragger)`
  width: 100%;
  height: 4rem;

  .ant-upload-list-picture-card {
    padding: 0.4rem 0;
    flex-wrap: nowrap !important;
    overflow-x: auto;

    .ant-upload-list-item-container {
      flex-shrink: 0;
    }
  }
`;

const DraggerWrapper = styled.section`
  height: 15rem;
`;

export function UploadInput(props: Omit<UploadProps, 'onChange'> & { onChange?: (imgs: string[]) => void }) {
  const { onChange, ...rest } = props;
  const [fileList, setFileList] = useState<Required<UploadProps>['fileList']>([]);

  const changeHandler: UploadProps['onChange'] = (info) => {
    const { fileList: files } = info;
    setFileList(files);
    const urls = files.map((item) => (item.url = item.response?.url)).filter(Boolean);
    onChange?.(urls);
  };

  const customRequest: UploadProps['customRequest'] = ({ file, onSuccess }) => {
    const url = URL.createObjectURL(file as File);
    onSuccess?.({ url, revoke: () => URL.revokeObjectURL(url) });
  };

  const removeHandler: UploadProps['onRemove'] = (file) => {
    const index = fileList.indexOf(file);
    const newFileList = fileList.slice();
    const [delFile] = newFileList.splice(index, 1);
    delFile.response?.revoke?.();
    setFileList(newFileList);
  };

  return (
    <DraggerWrapper>
      <StyledDragger
        {...rest}
        fileList={fileList}
        listType="picture-card"
        multiple
        accept="image/*"
        onChange={changeHandler}
        onRemove={removeHandler}
        customRequest={customRequest}
      >
        <FileInputPlaceholder $alignItems="center" $justifyContent="center">
          请选择图片
        </FileInputPlaceholder>
      </StyledDragger>
    </DraggerWrapper>
  );
}

export const PreviewImg = styled.img`
  width: 100%;
`;

const StyledSelect = styled(Select)`
  padding: 0 0 0.6rem;
  width: 100%;
`;

export const ImageFilterSelect = memo(function (props: { onChange?: (value: string[]) => void }) {
  const { onChange } = props;

  const changeHandler: SelectProps['onChange'] = (value) => {
    onChange?.(value);
  };

  return (
    <StyledSelect
      mode="multiple"
      allowClear
      placeholder="请选择滤镜"
      onChange={changeHandler}
      options={filterOptions}
    />
  );
});

interface ComposeOption {
  jitterRange: number;
  replaceColor: string;
  [key: string]: unknown;
}

interface ComposeOptionInputProps {
  onChange?: (value: ComposeOption) => void;
}

export interface ComposeOptionInputRef {
  getValue: () => ComposeOption;
}

const StyledInputNumber = styled(InputNumber)`
  flex: 1;
  margin-right: 0.8rem;
`;

const ComposeOptionInputWrapper = styled(FlexBox)`
  padding-bottom: 0.8rem;
`;

export const ComposeOptionInput = memo(
  forwardRef<ComposeOptionInputRef, ComposeOptionInputProps>(function (props, ref) {
    const { onChange } = props;

    const info = useRef<ComposeOption>({
      jitterRange: 30,
      replaceColor: '#000000',
    });

    const jitterRangeHandler: InputNumberProps['onChange'] = (value) => {
      info.current.jitterRange = Number(value?.valueOf() || 10);
      onChange?.(info.current);
    };

    const replaceColorHandler: ColorPickerProps['onChange'] = (value) => {
      info.current.replaceColor = value.toHexString();
      onChange?.(info.current);
    };

    useImperativeHandle(ref, () => ({
      getValue: () => info.current,
    }));

    return (
      <ComposeOptionInputWrapper>
        <StyledInputNumber
          min={0}
          max={255}
          keyboard
          changeOnWheel
          defaultValue={info.current.jitterRange}
          onChange={jitterRangeHandler}
        />
        <ColorPicker defaultValue={info.current.replaceColor} onChange={replaceColorHandler} />
      </ComposeOptionInputWrapper>
    );
  }),
);
