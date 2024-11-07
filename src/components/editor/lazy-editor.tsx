import styled from 'styled-components';
import { FlexAlign, FlexBox, FlexDirection, FlexJustify } from '../base';
import { forwardRef, lazy, memo } from 'react';
import type { EditorRef } from '.';
import { Spin } from 'antd';

const Editor = lazy(() => import('@/components/editor'));

const LoadingWrapper = styled(FlexBox)`
  display: none;
  position: absolute;
  inset: 0;
`;

const LoadingBox = styled.section``;

const EditorWrapper = styled(FlexBox)`
  position: absolute;
  inset: 0;
`;

const Wrapper = styled(FlexBox)`
  position: relative;

  ${EditorWrapper}:empty + ${LoadingWrapper} {
    display: flex;
  }
`;

interface LazyEditorProps {
  content?: string;
  readOnly?: boolean;
}

export const LazyEditor = memo(
  forwardRef<EditorRef, LazyEditorProps>(function LazyEditor(props, ref) {
    const { content, readOnly } = props;
    return (
      <Wrapper $flex="1" $direction={FlexDirection.COLUMN}>
        <EditorWrapper $flex="1" $direction={FlexDirection.COLUMN}>
          <Editor content={content} readOnly={readOnly} ref={ref} />
        </EditorWrapper>
        <LoadingWrapper $flex="1" $alignItems={FlexAlign.CENTER} $justifyContent={FlexJustify.CENTER}>
          <Spin delay={100} size="large">
            <LoadingBox />
          </Spin>
        </LoadingWrapper>
      </Wrapper>
    );
  }),
);
