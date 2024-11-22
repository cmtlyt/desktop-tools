import { createContext, memo, useContext, useEffect, useRef, useState } from 'react';
import { produce } from 'immer';
import styled from 'styled-components';
import { getRandomString } from '@cmtlyt/base';
import { FlexBox } from '../base';
import { useFormatFontSize } from '@/hooks';

interface VirtualItemProps {
  children: () => React.ReactNode;
  isFast: boolean;
  className?: string;
}

const ItemWrapper = styled.section`
  flex-shrink: 0;
`;

const VirtualItem = memo(function VirtualItem(props: VirtualItemProps) {
  const { children, isFast, className } = props;
  const ref = useRef<HTMLDivElement>(null);
  const { observer, eventKey, itemSize, direction, setContext } = useContext(context);
  const [show, setShow] = useState(isFast);

  const [width, height] = useFormatFontSize([itemSize?.width || 0, itemSize?.height || 0]);

  const visibalityChange = (e: Event) => {
    const { detail } = e as CustomEvent;
    setShow(detail.isIntersecting);
  };

  useEffect(() => {
    if (!isFast) return;
    const $dom = ref.current;
    if (!$dom || itemSize || !setContext) return;
    const { width, height } = $dom.getBoundingClientRect();
    setContext(
      produce((draft) => {
        draft.itemSize = { height: direction === 'column' ? height : '', width: direction === 'row' ? width : '' };
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setContext]);

  useEffect(() => {
    const $dom = ref.current;
    if (!$dom || !observer || !eventKey || !itemSize) return;
    $dom.addEventListener(eventKey, visibalityChange);
    observer?.observe($dom);
    return () => {
      observer?.unobserve($dom!);
      $dom.removeEventListener(eventKey, visibalityChange);
    };
  }, [observer, eventKey, itemSize]);

  return (
    <ItemWrapper
      ref={ref}
      style={{ width: itemSize?.width ? width : '', height: itemSize?.height ? height : '' }}
      className={className}
    >
      {show && children()}
    </ItemWrapper>
  );
});

interface VirtualListProps {
  bufferHeight?: number | string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  direction?: 'column' | 'row';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: (item: any, index: number) => React.ReactNode;
}

interface Context {
  observer: IntersectionObserver | null;
  eventKey: string;
  direction: 'column' | 'row';
  itemSize?: { height: number | ''; width: number | '' };
  setContext?: React.Dispatch<React.SetStateAction<Context>>;
}

const context = createContext<Context>({ observer: null, eventKey: '', direction: 'column' });

function getPx(fontSize: number, rootFontSize: number) {
  return `${fontSize * rootFontSize}px`;
}

export const VirtualList = memo(function VirtualList(props: VirtualListProps) {
  const { bufferHeight = 0, direction: _direction = 'column', children, data, ...rest } = props;
  const ref = useRef<HTMLDivElement>(null);
  const rootMargin = useFormatFontSize(bufferHeight, getPx);
  const [{ observer, eventKey, itemSize, direction }, setContext] = useState<Context>({
    observer: null,
    eventKey: '',
    direction: _direction,
  });

  useEffect(() => {
    const eventKey = getRandomString();
    setContext(
      produce((draft) => {
        draft.observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              const { isIntersecting, target } = entry;
              target.dispatchEvent(new CustomEvent(eventKey, { detail: { isIntersecting } }));
            });
          },
          { root: ref.current, rootMargin },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ) as any;
        draft.eventKey = eventKey;
      }),
    );
    return () => {
      observer?.disconnect();
      setContext(
        produce((draft) => {
          draft.observer = null;
          draft.eventKey = '';
          draft.itemSize = void 0;
        }),
      );
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rootMargin]);

  return (
    <context.Provider value={{ observer, eventKey, itemSize, direction, setContext }}>
      <FlexBox $direction={direction} {...rest} ref={ref}>
        {data.map((item, idx) => (
          <VirtualItem key={idx} isFast={idx === 0}>
            {() => children(item, idx)}
          </VirtualItem>
        ))}
      </FlexBox>
    </context.Provider>
  );
});
