import React from 'react';
import Spacing from 'app/common/Spacing';
import PropTypes from 'prop-types';

const ExerciseSelection = ({ value, onChange, exercises }) => {
  return (
    <Spacing>
      <select value={value} onChange={onChange}>
        {exercises.map((exercise, index) => {
          return (
            <option value={index} key={index}>
              {`${index + 1}. ${exercise.description}`}
            </option>
          );
        })}
      </select>
    </Spacing>
  );
};

ExerciseSelection.propTypes = {
  onChange: PropTypes.func.isRequired,
  exercises: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired
    })
  ).isRequired,
  value: PropTypes.number.isRequired
};

export default ExerciseSelection;
