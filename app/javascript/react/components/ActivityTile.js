import React, {Component} from 'react'

const ActivityTile = props =>{

    return(
      <div>
        <i  onClick={props.handleActivity} className="fa fa-igloo" value={props.id}>
        {props.name}
        </i>
      </div>
    )
  }
export default ActivityTile
