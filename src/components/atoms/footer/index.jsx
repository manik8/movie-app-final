import React from 'react';

import Facebook from '../../../assets/images/facebook.svg';
import Linkedin from '../../../assets/images/linkedin.png';
import Twitter from '../../../assets/images/twitter.svg';
import Instagram from '../../../assets/images/insta.svg';
import * as S from './styles';

const socialIcons = [Facebook, Linkedin, Twitter, Instagram];

const Footer = () => {
  return (
    <S.Container>
      <S.SubContainer>
        <S.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </S.Text>
        <S.CopyRightContainer>
          <S.CopyText>
            Copyright @ Snapmoviehub 2022
          </S.CopyText>
          <S.Icons>
          {
            socialIcons.map((icons, index) => {
              return <S.Image src={icons} alt={'icons'} key={index} />
            })
          }
          </S.Icons>
        </S.CopyRightContainer>
      </S.SubContainer>
    </S.Container>
  )
}

export default Footer