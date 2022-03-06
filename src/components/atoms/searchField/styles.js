import styled from 'styled-components';

export const Container = styled.div``;

export const SearchBox = styled.input`
  height: 10px;
  width: 260px;
  padding: 10px;
  outline: none;

  ${p => p.theme.TABLET`
    width: 120px;
  `};
`;