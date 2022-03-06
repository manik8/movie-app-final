import React, { useState, useEffect, } from 'react';
import axios from 'axios';

import * as S from './styles';
import MovieCard from '../../../atoms/movieCard';
import Button from '../../../atoms/button';
import { openRoutes, } from '../../../../routes';

const ListMoviesHome = () => {
  const [moviesData, setMoviesData, ]  = useState([]);
  const [loading, setLoading, ] = useState(false); 

  useEffect(() => {
    const fetchPosts = async() => {
      try {
        setLoading(true);
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setMoviesData(res.data.slice(0, 6));
        setLoading(false);
      } catch(err) {
        console.log(err);
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  const handleClick = () => {
  const win = window.open(openRoutes.movies, '_blank');
    if (win != null) {
      win.focus();
    }
  };
  
  return (
    <S.Container>
      <MovieCard 
        moviesData={moviesData}
        loading={loading} 
        searchText={''}
      />
      <S.ButtonContainer>
        <Button text={'View all'} onClick={handleClick} />
      </S.ButtonContainer>
    </S.Container>
  )
}

export default ListMoviesHome