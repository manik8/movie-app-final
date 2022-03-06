import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  ${p => p.theme.TABLET`
  gap: 10px
  `};
`;

export const PerPage = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${p => p.theme.WHITE};
  box-shadow: 0px 4px 10px rgb(0 0 0 / 15%);
  font-size: ${p => p.theme.XX_LARGE};
  border-radius: 10px;
  cursor: pointer;

  :hover {
    background: ${p => p.theme.MERCURY};
  }

  ${p => p.theme.TABLET`
  height: 20px;
  width: 20px;
  `};
`;
