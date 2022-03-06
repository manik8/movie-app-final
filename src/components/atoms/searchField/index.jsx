import React from 'react';
import { PropTypes, } from 'prop-types';

import * as S from './styles';

const SearchField = ({
  placeholder, 
  onChange,
  name,
  searchText, 
}) => {
  return (
    <S.Container>
      <S.SearchBox
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        searchText={searchText}
      />
    </S.Container>
  )
}

SearchField.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  searchText: PropTypes.string,
  onChange: PropTypes.func,
}

export default SearchField
