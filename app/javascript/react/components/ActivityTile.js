import React, {Component} from 'react'

class ActivityTile extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      activityName: this.props.name
    }

  }

  render(){
    return(
      <div>
        <i className="fa fa-igloo"> {this.state.activityName}</i>
      </div>
    )}
  }
export default ActivityTile
