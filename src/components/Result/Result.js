import React from 'react';

const Result = (props) => {
  return (
    <tr>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.university}</td>
    </tr>
  );
}

export default Result;