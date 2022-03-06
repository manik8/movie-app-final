import React from 'react';
import { withRouter, } from 'react-router';
import PropTypes from 'prop-types';


import MovieCard from '../../../atoms/movieCard';
import * as S from './styles';
import Pagination from '../../../atoms/pagination';

const AllMovies = ({
  searchText,
  currentMovies,
  loading,
  moviesPerPage,
  moviesData,
  paginate,
  HeadRef,
}) => {
  return (
    <S.Container ref={HeadRef}>
      <S.Heading>Movie information hub</S.Heading>
      <MovieCard searchText={searchText} moviesData={currentMovies} loading={loading} />
      <Pagination 
        moviesPerPage={moviesPerPage} 
        totalMovies={moviesData.length} 
        paginate={paginate}
        />
    </S.Container>
  )
};

AllMovies.propTypes = {
  history: PropTypes.object,
  searchText: PropTypes.string,
  currentMovies: PropTypes.array,
  loading: PropTypes.bool,
  moviesPerPage: PropTypes.number,
  moviesData: PropTypes.array,
  paginate: PropTypes.func,
  headRef: PropTypes.func,
};

export default withRouter(AllMovies);
