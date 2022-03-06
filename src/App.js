// In this file all the routing is handled

import React, { lazy, Suspense, } from 'react';
import { Switch, Route, BrowserRouter, } from 'react-router-dom';
import styled from 'styled-components';

import {
  openRoutes,
} from './routes';
import Loader from './components/atoms/loader';

const Home = lazy(() => 
  import(/* webpackChunkName: "Home Page" */ './components/pages/home')
);

const MovieList = lazy(() => 
  import(/* webpackChunkName: "MovieList Page" */ './components/pages/movieList')
);

const PageNotFound = lazy(() => 
  import(/* webpackChunkName: "PageNotFound Page" */ './components/pages/pageNotFound')
);

const Wrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${p => p.theme.WHITE};
`;

const App = () => {
  return (
    <Wrapper>
      <Suspense fallback={<Loader loaderText={'Loading...'} />}>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path={openRoutes.root}
            component={Home}
          />
          <Route
            exact
            path={openRoutes.movies}
            component={MovieList}
          />
          <Route
            component={PageNotFound}
          />
        </Switch>
       </BrowserRouter> 
       </Suspense>
    </Wrapper>
  );
}

export default App;
