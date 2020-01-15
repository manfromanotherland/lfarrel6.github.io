import styled from "styled-components";

export const NeumorphicCircle = styled.div`
  display: inline-block;
  border-radius: 50%;
  background-color: #efeeee;
  height: ${({ height }) => (height ? height : "50px")};
  width: ${({ width }) => (width ? width : "50px")};
  box-shadow: -2px -2px 4px 4px rgba(255, 255, 255, 0.5),
    2px 2px 4px 4px rgba(209, 205, 199, 0.5);
`;
