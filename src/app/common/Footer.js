import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import logo from '../../images/ninja.svg';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Footer = styled.footer`
  position: absolute;
  bottom: 15px;
  right: 15px;

  span {
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
  return (
    <Footer>
      {location && location.pathname !== '/' ? (
        <Link to="/">
          <span>Go back to homepage</span>
          <img className="app__logo app__logo--alt" src={logo} alt="logo" />
        </Link>
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
