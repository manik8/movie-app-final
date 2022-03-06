import styled from 'styled-components';

export const Container = styled.div`
  background: ${p => p.theme.JACKSONS_PURPLE};
  overflow-x: hidden;
`;

export const SubContainer = styled.div`
  height: 80vh;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const BgcircleTop = styled.img`
  position: absolute;
  z-index: 2;

  ${p => p.theme.TABLET`
    display: none;
  `};
`;

export const BgcircleSide = styled.img`
  height: 600px;
  position: absolute;
  bottom: 120px;
  z-index: 1;

  ${p => p.theme.TABLET`
    display: none;
  `};
`;

export const SmallCircleBottom = styled.img`
  position: absolute;
  top: 600px;
  left: 300px;

  ${p => p.theme.TABLET`
    display: none;
  `};
`;

export const BigCircleBlue = styled.img`
  position: absolute;
  top: 100px;
  left: 800px;

  ${p => p.theme.TABLET`
    display: none;
  `};
`;

export const BgcircleRight = styled.img`
  position: absolute;
  left: 80%;
  z-index: 1;

  ${p => p.theme.TABLET`
    display: none;
  `};
`;

export const BottomCirlce = styled.img`
  position: absolute;
  left: 50%;
  top: 580px;
  z-index: 2;

  ${p => p.theme.TABLET`
    display: none;
  `};
`;

export const Heading = styled.div`
  color: ${p => p.theme.OCEAN_GREEN};
  font-size: ${p => p.theme.L_PAGE_HEADING};
  font-weight: ${p => p.theme.BOLD_FONT};
  z-index: 2;

  ${p => p.theme.TABLET`
    font-size: ${p => p.theme.HEADING};
  `};
`;

export const Text = styled.div`
  padding-top: 52px;
  color: ${p => p.theme.WHITE};
  font-size: ${p => p.theme.XX_LARGE};
  text-align: center;

  ${p => p.theme.TABLET`
    font-size: ${p => p.theme.X_LARGE};
  `};
`;
