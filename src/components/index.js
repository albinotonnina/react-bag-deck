import React from "react";
import styled from "styled-components";

export const AbsoluteDiv = styled.div`
  position: relative;
  top: 0;
  left: 0;
`;

export const RelativeDiv = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export function Title(props) {
  return <AbsoluteDiv>{props.children}</AbsoluteDiv>;
}
