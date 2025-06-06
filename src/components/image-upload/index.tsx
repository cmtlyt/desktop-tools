import { Upload, UploadFile, UploadProps } from 'antd';
import { memo, useState } from 'react';
import styled from 'styled-components';
import { FlexBox } from '../base';

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

export type OnChangeFunc = (urls: string[], files: UploadFile[]) => void;

export const ImageUpload = memo(
  (props: Omit<UploadProps, 'onChange'> & { placeholderText?: string; onChange?: OnChangeFunc }) => {
    const { onChange, placeholderText = '请选择图片', ...rest } = props;
    const [fileList, setFileList] = useState<Required<UploadProps>['fileList']>([]);

    const changeHandler: UploadProps['onChange'] = (info) => {
      const { fileList: files } = info;
      setFileList(files);
      const urls = files.map((item) => (item.url = item.response?.url)).filter(Boolean);
      onChange?.(urls, files);
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
          listType="picture-card"
          multiple
          {...rest}
          accept="image/*"
          fileList={fileList}
          onChange={changeHandler}
          onRemove={removeHandler}
          customRequest={customRequest}
        >
          <FileInputPlaceholder $alignItems="center" $justifyContent="center">
            {placeholderText}
          </FileInputPlaceholder>
        </StyledDragger>
      </DraggerWrapper>
    );
  },
);
