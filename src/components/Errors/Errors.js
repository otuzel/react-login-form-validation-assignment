import React from 'react';
import './Errors.scss';

const Errors = (props) => {
  const { errors } = props;
  return (
    <ul className="errors">
      { 
        errors.map((err, i) => 
          <li className="errors__item" key={i}>{err}</li>
        )
      }
    </ul>
  )
}

export default Errors;