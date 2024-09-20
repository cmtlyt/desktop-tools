import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import styled from 'styled-components';
import { useRootFontSize } from '@/hooks';
import { FlexBox } from '../base';

interface HoverExpandBoxProps {
  leftArea?: React.ReactNode;
  rightArea?: React.ReactNode;
  children?: React.ReactNode;
}

const Area = styled(FlexBox)`
  overflow: hidden;
`;

const HoverExpandBoxWrapper = styled.section`
  display: grid;
  width: 100%;
  grid-template-columns: 0 1fr 0;
  transition: grid-template-columns 300ms;

  &:hover {
    grid-template-columns: var(--left-area-width) 1fr var(--right-area-width);
  }
`;

interface SizeInfo {
  leftAreaWidth: number;
  rightAreaWidth: number;
}

interface HoverExpandBoxRef {
  updateSize: () => void;
}

export const HoverExpandBox = forwardRef<HoverExpandBoxRef, HoverExpandBoxProps>(function (props, ref) {
  const { leftArea, rightArea, children } = props;
  const leftAreaRef = useRef<HTMLDivElement>(null);
  const rightAreaRef = useRef<HTMLDivElement>(null);
  const [sizeInfo, setSizeInfo] = useState<SizeInfo>({ leftAreaWidth: 0, rightAreaWidth: 0 });
  const rootFontSize = useRootFontSize();

  const updateSize = () => {
    const info = { leftAreaWidth: 0, rightAreaWidth: 0 };
    if (leftAreaRef.current) {
      info.leftAreaWidth = leftAreaRef.current.offsetWidth / rootFontSize;
    }
    if (rightAreaRef.current) {
      info.rightAreaWidth = rightAreaRef.current.offsetWidth / rootFontSize;
    }
    setSizeInfo(info);
  };

  useEffect(updateSize, [rootFontSize]);

  useImperativeHandle(ref, () => ({ updateSize }));

  return (
    <HoverExpandBoxWrapper
      style={
        {
          '--left-area-width': `${sizeInfo.leftAreaWidth}rem`,
          '--right-area-width': `${sizeInfo.rightAreaWidth}rem`,
        } as React.CSSProperties
      }
    >
      <Area>
        <FlexBox ref={leftAreaRef}>{leftArea}</FlexBox>
      </Area>
      <FlexBox>{children}</FlexBox>
      <Area>
        <FlexBox ref={rightAreaRef}>{rightArea}</FlexBox>
      </Area>
    </HoverExpandBoxWrapper>
  );
});
