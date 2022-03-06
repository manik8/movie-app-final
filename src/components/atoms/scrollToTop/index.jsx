import React from 'react';
import { PropTypes, } from 'prop-types';

import * as S from './styles';
import Scroll from '../../../assets/images/scroll-to-top.svg';
import Arrow from '../../../assets/images/arrow.svg';

const ScrollToTop = ({ HeadRef, }) => {

  const handleClick = () => {
    HeadRef.current?.scrollIntoView();
  };

  return (
    <S.Container onClick={handleClick}>
      <S.Image src={Scroll} alt={'scroll-to-top'} />
      <S.ArrowImage src={Arrow} alt={'arrow'} />
    </S.Container>
  )
}

ScrollToTop.propTypes = {
  HeadRef: PropTypes.object,
}

export default ScrollToTop