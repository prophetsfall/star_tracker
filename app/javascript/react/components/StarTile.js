import React from 'react';

const StarTile = props =>{
  let starmap = stars.map(star =>{
    return (<i className="{star}" value="${i}"/>)
  })
  return <div>{starmap}</div>
}
export default StarTile;
