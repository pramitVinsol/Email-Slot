import React from 'react';

function Input(props) {

  return (
    <div className='input'>
      <label>{props.label}</label><br/>
      <input value={props.value} type={props.type} onChange={props.changed} /><br />
    </div>
  )
};

export default Input;