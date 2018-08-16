import React from 'react';
import { Level, LevelList } from './Level';
import logo from '../../images/ninja.svg';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 4em;
  text-align: center;
`;

const Intro = () => {
  return (
    <Wrapper>
      <header className="app__header">
        <h1>CSS Workshop: Choose your destiny</h1>
      </header>
      <LevelList>
        <Level>Level 1: Selectors, Properties and Values</Level>
        <Level>Level 2: Box Model</Level>
        <Level>Level 3: Positioning</Level>
        <Level>Level 4: Cascade and Specificity</Level>
        <Level>Level 5: Flexbox</Level>
      </LevelList>
      <footer>
        <img className="app__logo" src={logo} alt="logo" />
      </footer>
    </Wrapper>
  );
};

export default Intro;
