import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;
  z-index: 6;
  background: ${p => p.theme.WHITE};
`;

export const ButtonContainer = styled.div`
  padding-bottom: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
