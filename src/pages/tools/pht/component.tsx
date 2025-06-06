import { forwardRef, memo, useImperativeHandle, useRef } from 'react';
import { ColorPicker, ColorPickerProps, InputNumber, InputNumberProps, Select, SelectProps, Spin } from 'antd';
import styled from 'styled-components';
import { FlexBox } from '@/components/base';
import { filterOptions } from './constant';

export const Wrapper = styled(FlexBox)`
  padding: var(--page-padding);
`;

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

export const StyledSpin = styled(Spin)`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 30rem;
`;
