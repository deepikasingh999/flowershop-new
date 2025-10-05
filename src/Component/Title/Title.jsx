import React from 'react'
import'./title.css'
const Title = (props) => {
  return (
    <div className='title'>
      <p>{props.subtitle}</p>
      <h2>{props.titlenew}</h2>
    </div>
  )
}

export default Title