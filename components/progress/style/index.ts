import { css } from '@emotion/css';

export const style = css`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  width: 100%;
  height: 2px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  background-color: transparent;
  color: var(--accent);

  &::-webkit-progress-bar {
    background-color: transparent;
  }

  &::-webkit-progress-value {
    background-color: var(--accent);
  }

  &::-moz-progress-bar {
    background-color: var(--accent);
  }
`;
