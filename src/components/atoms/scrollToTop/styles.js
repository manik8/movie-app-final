import styled from 'styled-components';

export const Container = styled.div` 
  position: relative;
  text-align: right;
  cursor: pointer;
  z-index: 5;

  ${p => p.theme.TABLET`
    margin-top: 6px;
  `};
`;

export const Image = styled.img``;

export const ArrowImage = styled.img`
  position: relative;
  right: 50px;
  bottom: 16px;
`;
