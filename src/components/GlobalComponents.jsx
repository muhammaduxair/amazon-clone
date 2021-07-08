import styled from "styled-components";

export const GoldenButton = styled.button`
  cursor: pointer;
  outline: 0;
  border: 1px solid;
  border-color: #c89411 #b0820f #99710d;
  border-radius: 3px;
  box-shadow: inset 0 1px 0 0 #fcf3dc;
  background: linear-gradient(to bottom, #f8e3ad, #eeba37);
  text-align: center;
  vertical-align: middle;
  color: #111;
  font-family: inherit;
  text-decoration: none;
  font-size: 12px;
  width: ${(props) => props.width || "fit-content"};
  padding: ${(props) => props.padding || "8px 14px"};
  &:hover {
    background: linear-gradient(to bottom, #f5d78e, #eeb933);
  }
  &:active {
    border-color: #a88734 #9c7e31 #846a29;
    background-color: #f0c14b;
    background-image: none;
    box-shadow: 0 1px 3px rgb(0 0 0 / 20%) inset,
      0 0 3px 2px rgb(228 121 17 / 50%);
  }
`;
