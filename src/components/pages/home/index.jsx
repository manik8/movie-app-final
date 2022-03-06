import React from 'react';
import Footer from '../../atoms/footer';
import Header from '../../atoms/header';
import HeroSection from './heroSection';
import ListMoviesHome from './listMoviesHome/listMoviesHome';
import * as S from './styles';

const Home = () => {
  return (
    <S.Container>
      <Header isSearchShow={false} />
      <HeroSection />
      <ListMoviesHome />
      <Footer />
    </S.Container>
  )
}

export default Home;
