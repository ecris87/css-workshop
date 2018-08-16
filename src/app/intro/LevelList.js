import styled from 'styled-components';

export const Level = styled.li`
  font-size: 3rem;

  &:before {
    content: ' 👉'; /* override papercss default style */
    font-size: 2rem;
    visibility: hidden; /* we want to occupy the space so on hover we don't see the text shift */
  }

  &:hover:before {
    visibility: visible;
  }

  a {
    color: deepskyblue;
    background-image: none;

    &:active {
      color: lightskyblue;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const LevelList = styled.ul`
  padding: 1.6em;
  list-style: none;
`;
