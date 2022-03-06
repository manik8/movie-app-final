import styled from 'styled-components';

export const Container = styled.div`
  width: 280px;
  height: 60px; 
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: ${p => p.theme.SCORPION};
  font-size: ${p => p.theme.X_LARGE};
  background: ${p => p.theme.MERCURY};
  cursor: pointer;
`;
