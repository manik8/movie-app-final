import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 11;
`;

export const SubContainer = styled.div`
  padding: 20px 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${p => p.theme.OCEAN_GREEN};

  ${p => p.theme.TABLET`
    padding: 20px 15px;
  `};
`;

export const Image = styled.img`
  cursor: pointer;
`;

export const SearchBox = styled.div``;
