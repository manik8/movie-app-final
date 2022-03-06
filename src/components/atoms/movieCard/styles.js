import styled from 'styled-components';

export const Container = styled.div`
  padding: 60px 120px;
  position: relative;
  z-index: 5;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;

  ${p => p.theme.TABLET`
    padding: 60px 15px;
    grid-template-columns: unset;
    grid-template-rows: 1fr;
  `};
`;

export const SubContainer = styled.div`
  padding: 24px;
  background: ${p => p.theme.WHITE};
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
`;

export const Image = styled.img``;

export const MovieHead = styled.div`
  padding-top: 24px;
  color: ${p => p.theme.BLACK};
  font-size: ${p => p.theme.XXX_LARGE};
  font-weight: ${p => p.theme.SEMI_BOLD_FONT};
`;

export const MovieDesc = styled.div`
  padding-top: 12px;
  color: ${p => p.theme.SCORPION};

  line-height: 2rem;
  max-height: 8.5rem;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  overflow: hidden !important;
`;

export const CastContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 20px;
`;

export const CastSubContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CastImage = styled.img`
  border-radius: 50%;
`;

export const CastName = styled.div`
  padding-left: 20px;
`;
