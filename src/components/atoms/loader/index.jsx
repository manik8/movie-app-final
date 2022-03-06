import React from "react";
import PropTypes from 'prop-types';

import * as S from './styles';

const Loader = ({
  loaderText,
}) => {
  return <S.Container>{loaderText}</S.Container>;
};

Loader.propTypes = {
  loaderText: PropTypes.string.isRequired,
};

export default Loader;
