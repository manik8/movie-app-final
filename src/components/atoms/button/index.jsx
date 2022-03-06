import React from 'react';
import { PropTypes, } from 'prop-types';

import * as S from './styles';

const Button = ({ text, onClick, }) => {
  return (
    <S.Container onClick={onClick}>{text}</S.Container>
  )
}

Button.propTypes = {
  placeholder: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button;
