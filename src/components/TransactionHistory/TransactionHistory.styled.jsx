import styled from 'styled-components';

export const ContainerTransaction = styled.table`
  width: 95%;
  background-color: white;
  margin-top: 40px;
`;
export const Title = styled.th`
  background-color: aqua;
  padding: 10px 0;
`;
export const Pocket = styled.tr`
  text-align: center;
  &:nth-child(2n + 2) {
    background-color: #80808073;
  }
`;
export const Column = styled.th`
  padding: 20px 0;
`;
