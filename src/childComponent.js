import React from 'react'

// Stateless functional component
const ChildComponent = (props) => {
  return (
    <div>
      <input type="text" onChange={props.onChangeCallback}/>
    </div>
  )
}

export default ChildComponent;
