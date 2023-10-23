import React from 'react';

const Question = ({ question, options, handleAnswer }) => {
  return (
    <div>
      <h2 style={{color:'teal'}}>{question}</h2>
      <ol>
        {options.map((option) => (
          <li key={option}>
            <button className='btn btn-info mt-2' onClick={() => handleAnswer(option)}>{option}</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Question;
