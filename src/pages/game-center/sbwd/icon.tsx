import styled from 'styled-components';

export const SBWDIcon = styled.section`
  box-sizing: border-box;
  position: relative;
  height: 80%;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: var(--color-primary) solid 1px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0.2rem;
    height: 50%;
    border-radius: var(--radius-full);
    background-color: var(--color-primary);
  }
`;
