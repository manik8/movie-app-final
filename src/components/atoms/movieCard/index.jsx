import React, { useState, useEffect, } from 'react';
import { PropTypes, } from 'prop-types';

import Loader from '../loader';
import * as S from './styles';

const MovieCard = ({ moviesData, loading, searchText, }) => {

  const [isShow, setisShow, ] = useState();
  const [searchMovies, setSearchMovies, ] = useState(moviesData);

  useEffect(() => {
    if(searchText === '') {
      return setSearchMovies(moviesData);
    }
    const searchData = moviesData.filter(movie => movie.title.includes(searchText));
    setSearchMovies(searchData);
  }, [searchText, moviesData, ]);

  const handleShow = () => {
    setisShow(!isShow);
  };

  if(loading) {
    return <Loader loaderText={'Loading...'} />
  }

  if(!searchMovies.length) {
    return <Loader loaderText={'No Movie found...'} />
  }


  return (
    <S.Container>
      {
        searchMovies.map((data, index) => {
          return (
            <S.SubContainer key={index}>
              <S.Image src={'https://d2kektcjb0ajja.cloudfront.net/images/posts/feature_images/000/000/072/large-1466557422-feature.jpg?1466557422'} alt='movie' height={'230px'} width={'100%'} onClick={handleShow} />
              <S.MovieHead>{data.title}</S.MovieHead>
              <S.MovieDesc>{data.body}</S.MovieDesc>
            </S.SubContainer>
          );
        })
      }
    </S.Container>
  )
}

MovieCard.propTypes = {
  moviesData: PropTypes.array,
  loading: PropTypes.bool,
  searchText: PropTypes.string,
}

export default MovieCard;
