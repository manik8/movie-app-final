import React from "react";
import PropTypes from 'prop-types';
import { withRouter } from "react-router";

import * as S from "./styles";
import { openRoutes, } from '../../../routes';
import Logo from "../../../assets/images/logo.png";
import SearchField from "../searchField";

const Header = ({ onChange, searchText, history, isSearchShow = true, }) => {
  const handleClick = () => {
    history.push(openRoutes.root);
  }
  return (
    <S.Container>
      <S.SubContainer>
        <S.Image src={Logo} alt="company-logo" onClick={handleClick}/>
        {
          isSearchShow ? (
            <S.SearchBox>
          <SearchField
            name={'search'}
            onChange={onChange}
            placeholder={"Search title"} 
            searchText={searchText}
          />
        </S.SearchBox>
          ): null
        }
      </S.SubContainer>
    </S.Container>
  );
};

Header.propTypes = {
  onChange: PropTypes.func,
  searchText: PropTypes.string,
  history: PropTypes.object,
  isSearchShow: PropTypes.bool,
};

export default withRouter(Header);
