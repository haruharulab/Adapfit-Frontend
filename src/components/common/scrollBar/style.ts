import { css } from "styled-components";

export const ScrollBar = css`
  overflow: auto;
  overflow: overlay;
  &::-webkit-scrollbar {
    width: 20px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #555;
    border-radius: 10px;
    border: 8px solid transparent;
    background-clip: padding-box;
  }
`

export const HorizontalScrollBar = css`
  ${ScrollBar};
  &::-webkit-scrollbar {
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border: 3px solid transparent;
  }
`