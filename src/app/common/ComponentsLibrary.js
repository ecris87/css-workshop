import styled from 'styled-components';

export const Spacing = styled.section`
  margin-bottom: 1.5em;
`;

export const EditorWrapper = styled.section`
  height: 50%;
  margin-bottom: 5%;
`;

export const LevelDescription = styled.p`
  margin: 0 0 1.5em 0;
`;

export const ExerciseQuestion = styled.div`
  margin: 0 0 1.5em 0;
  p {
    margin: 0 0 0.5em 0;
  }
  button {
    padding-right: 1.2em;
    padding-left: 1.2em;
    margin-right: 0.8em;
  }
`;

export const LevelTitle = styled.div`
  height: 12vh;
  h3 {
    margin: 0;
  }
`;

export const LevelContent = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
`;

export const LevelFooter = styled.div`
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
