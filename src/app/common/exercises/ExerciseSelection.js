import React from 'react';
import { Spacing } from 'app/common/ComponentsLibrary';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Select = styled.select`
  font-size: 0.8rem;
`;

const ExerciseSelection = ({ value, onChange, exercises }) => {
  return (
    <Spacing>
      <Select value={value} onChange={onChange}>
        {exercises.map((exercise, index) => {
          return (
            <option value={index} key={index}>
              {`${index + 1}. ${exercise.description}`}
            </option>
          );
        })}
      </Select>
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
