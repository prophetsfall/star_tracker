import React from 'react';

const StarTile = props =>{
  let className
  if (props.id === props.className){
    className = "selected"
  } else {
    className = "not-selected"
  }
  return (
    <i className={props.star +" "+ className} onClick={props.handleClick}/>
  )

}
export default StarTile;
