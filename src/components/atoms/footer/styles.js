import styled from 'styled-components';

export const Container = styled.div`
  height: 140px;
  padding: 20px 100px;
  background: ${p => p.theme.OCEAN_GREEN};
  display: flex;
  align-items: center;

  ${p => p.theme.TABLET`
    padding: 20px 10px;
  `};
`;

export const SubContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${p => p.theme.TABLET`
  flex-direction: column;
  `};
`;

export const Text = styled.div`
  width: 500px;
  color: ${p => p.theme.WHITE};

  ${p => p.theme.TABLET`
    width: 100%;
  `};
`;

export const CopyRightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  ${p => p.theme.TABLET`
  padding-top: 30px;
  `};
`;

export const CopyText = styled.div`
  color: ${p => p.theme.WHITE};
`;

export const Icons = styled.div``;

export const Image = styled.img`
  padding-left: 10px;
  cursor: pointer;
`;
