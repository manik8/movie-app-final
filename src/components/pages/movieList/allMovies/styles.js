import styled from 'styled-components';

export const Container = styled.div`  
  padding: 120px 0 0;
`;

export const Heading = styled.div`
  color: ${p => p.theme.OCEAN_GREEN};
  font-weight: ${p => p.theme.BOLD_FONT};
  font-size: ${p => p.theme.L_PAGE_HEADING};
  text-align: center;

  ${p => p.theme.TABLET`
  font-size: ${p => p.theme.HEADING};
  `};
`;
