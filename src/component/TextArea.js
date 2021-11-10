import React from 'react';

function TextArea(props) {

  return (
    <div className='input'>
      <label>{props.label}</label><br/>
      <textarea value={props.value} onChange={props.changed} rows='10' cols='40'></textarea>
    </div>
  )
};

export default TextArea;