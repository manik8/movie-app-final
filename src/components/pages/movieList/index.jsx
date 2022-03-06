import React, { useState, useEffect, createRef, } from "react";
import axios from 'axios';
import qs from 'query-string';
import PropTypes from 'prop-types';
import { withRouter, } from 'react-router';

import Header from "../../atoms/header";
import AllMovies from "./allMovies";
import * as S from './styles';
import ScrollToTop from "../../atoms/scrollToTop";
import Footer from "../../atoms/footer";

const MovieList = ({ history, }) => {
  const [searchText, setSearchText, ] = useState('');
  const [moviesData, setMoviesData, ] = useState([]);
  const [loading, setLoading, ] = useState(false);
  const [currentPage, setCurrentPage, ] = useState(1);
  const [moviesPerPage, ] = useState(10);
  const HeadRef = createRef();

  useEffect(() => {
    const { search, } = history.location;
    const { page, } = qs.parse(search);
    if(page) {
      setCurrentPage(page);
    } else {
      setCurrentPage(1);
    }
    
    const fetchPosts = async() => {
      try {
        setLoading(true);
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setMoviesData(res.data);
        setLoading(false);
      } catch(err) {
        console.log(err);
        setLoading(false);
      }
    }
    fetchPosts();
  }, [searchText]);

  const paginate = (pageNumber) => {
    history.push({
      search: `?page=${pageNumber}`
    });
    HeadRef.current?.scrollIntoView();
    setCurrentPage(pageNumber)
  }; 

  const handleChange = (e) => {
    const { value, } = e.target;
    setSearchText(value);
  }

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = moviesData.slice(indexOfFirstMovie, indexOfLastMovie);

  return (
    <S.Container>
    <Header 
    onChange={handleChange} 
    searchText={searchText}
    />
    <AllMovies 
      searchText={searchText}
      moviesPerPage={moviesPerPage} 
      moviesData={moviesData} 
      paginate={paginate}
      currentMovies={currentMovies}
      loading={loading}
      HeadRef={HeadRef} 
    />
    <ScrollToTop
      HeadRef={HeadRef}
    />
    <Footer />
  </S.Container>
  );
};

MovieList.propTypes = {
  history: PropTypes.object,
};

export default withRouter(MovieList);
