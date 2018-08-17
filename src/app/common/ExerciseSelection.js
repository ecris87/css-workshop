import React from 'react';
import Spacing from './Spacing';

const ExerciseSelection = ({ value, onChange, exercises }) => {
  return (
    <Spacing>
      <select value={value} onChange={onChange}>
        {exercises.map((exercise, index) => {
          return (
            <option value={index} key={index}>
              {exercise.text}
            </option>
          );
        })}
      </select>
    </Spacing>
  );
};

export default ExerciseSelection;
