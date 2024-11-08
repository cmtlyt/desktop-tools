import { FlexAlign, FlexBox, FlexJustify } from '@/components/base';
import styled from 'styled-components';

const TabbarWrapper = styled(FlexBox)`
  width: 100%;
  height: 100%;
  overflow-x: auto;
  white-space: nowrap;

  &::-webkit-scrollbar {
    height: 0;
  }
`;

export function Tabbar() {
  return (
    <TabbarWrapper $alignItems={FlexAlign.CENTER} $justifyContent={FlexJustify.START}>
      tabbar Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error quidem excepturi, facilis voluptatem cum
      voluptates fugit! Ipsa sapiente labore modi, corporis sit, asperiores tempora debitis inventore libero fugiat, ut
      adipisci.
    </TabbarWrapper>
  );
}
