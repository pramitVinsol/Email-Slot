import React from 'react'

function Email(props) {

  return (
    <div className='container'>
      {props.salutation}<br/>
      <div className='item'>
        {props.content}
      </div>
      <div dangerouslySetInnerHTML={{__html: props.regards}} /> 
    </div>
  )
}

export default Email;
