import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  font-size: ${p => p.theme.L_PAGE_HEADING};
  font-weight: ${p => p.theme.BOLD_FONT};

  ${p => p.theme.TABLET`
    font-size: ${p => p.theme.XL_HEADING};
  `};
`;
