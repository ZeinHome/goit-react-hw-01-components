import styled from 'styled-components';

export const ContainerStatistics = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  margin-top: 40px;
  padding-top: 20px;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  color: gray;
  margin-bottom: 20px;
`;
export const StatList = styled.ul`
  display: flex;
`;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${getRandomHexColor};
  border: 1px solid black;
  padding: 10px 20px;
`;
