import React from 'react';

import * as S from './styles';
import BackgroundCircleTop from '../../../../assets/images/bg-circle-top.svg';
import BackgroundCircleSide from '../../../../assets/images/bg-circle-side.svg';
import SmallCircleOne from '../../../../assets/images/small-circle-one.svg';
import BigCircleBlue from '../../../../assets/images/big-circle-blue.svg';
import BackgroundCircleRight from '../../../../assets/images/bg-circle-right.svg';
import BottomCirlce from '../../../../assets/images/bottom-circle.svg';

const HeroSection = () => {
  return (
    <S.Container>
      <S.BgcircleTop src={BackgroundCircleTop} alt='bg-image-circle-top' />
      <S.BgcircleSide src={BackgroundCircleSide} alt='bg-image-circle-side' />
      <S.SmallCircleBottom src={SmallCircleOne} alt='sm-image-circle' />
      <S.BigCircleBlue src={BigCircleBlue} alt='big-image-circle-blue' />
      <S.BgcircleRight src={BackgroundCircleRight} alt='sm-image-circle' />
      <S.BottomCirlce src={BottomCirlce} alt='sm-image-circle' />
      <S.SubContainer>
        <S.Heading>Movie information hub</S.Heading>
        <S.Text>We provide a list of your favourite movies and information about the cast.</S.Text>
      </S.SubContainer>
    </S.Container>
  )
}

export default HeroSection
