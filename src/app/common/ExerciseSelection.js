import React from 'react';
import Spacing from './Spacing';
import PropTypes from 'prop-types';

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

ExerciseSelection.propTypes = {
  onChange: PropTypes.func,
  exercises: PropTypes.array,
  value: PropTypes.number
};

export default ExerciseSelection;
