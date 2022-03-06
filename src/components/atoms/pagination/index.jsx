import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const Pagination = ({ moviesPerPage, totalMovies, paginate, }) => {

  const pageNumbers = [];

  for(let i = 1;i <= Math.ceil(totalMovies/moviesPerPage); i++) {
    pageNumbers.push(i);
  };

  return (
    <S.Container>
    {
      pageNumbers.map((number, index) => {
        return (
          <S.PerPage onClick={() => paginate(number)} key={index}>
            {number}
          </S.PerPage>
        );
      })
    }
    </S.Container>
  )
}

Pagination.propTypes = {
  moviesPerPage: PropTypes.number,
  totalMovies: PropTypes.number,
  paginate: PropTypes.func,
};

export default Pagination;
