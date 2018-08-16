import React from 'react';
import { Level, LevelList } from './LevelList';
import logo from '../../images/ninja.svg';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.section`
  padding: 3em;
  text-align: center;
`;

const Intro = () => {
  return (
    <Wrapper>
      <header className="app__header">
        <h1>CSS Workshop: Choose your destiny</h1>
      </header>
      <LevelList>
        <Level><NavLink to="/level1">Level 1: Selectors, Properties and Values</NavLink></Level>
        <Level><NavLink to="/level2">Level 2: Box Model</NavLink></Level>
        <Level><NavLink to="/level3">Level 3: Positioning</NavLink></Level>
        <Level><NavLink to="/level4">Level 4: Cascade and Specificity</NavLink></Level>
        <Level><NavLink to="/level5">Level 5: Flexbox</NavLink></Level>
      </LevelList>
      <footer>
        <img className="app__logo" src={logo} alt="logo" />
      </footer>
    </Wrapper>
  );
};

export default Intro;
