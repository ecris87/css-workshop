import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { LevelFooter } from 'app/common/ComponentsLibrary';
import logo from '../../images/ninja.svg';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Footer = styled.footer`
  /* homepage */
  ${props =>
    props.isHomepage &&
    css`
      position: absolute;
      bottom: 15px;
      right: 15px;
    `} span {
    padding-right: 10px;
  }

  .app__logo {
    width: 150px;
    border: 0 none;
  }

  .app__logo--alt {
    width: 32px;
  }
`;

const AppFooter = ({ location }) => {
  let isHomepage = location && location.pathname === '/';
  return (
    <Footer isHomepage={isHomepage}>
      {!isHomepage ? (
        <LevelFooter>
          <Link to="/">
            <span>Go back to homepage</span>
            <img className="app__logo app__logo--alt" src={logo} alt="logo" />
          </Link>
        </LevelFooter>
      ) : (
        <img className="app__logo" src={logo} alt="logo" />
      )}
    </Footer>
  );
};

AppFooter.propTypes = {
  location: PropTypes.object
};

export default withRouter(AppFooter);
