import React, { Component } from 'react'
import ActivityTile from '../components/ActivityTile'
class StarBank extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      stars:"a",
      activities:[]
    };
  }
  componentDidMount() {
    fetch(`/api/v1/activities`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      debugger
      let activities = body.activities
      this.setState({activities:activities})
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleClick(event){
    event.preventDefault()


  }

  render() {
    let stars = this.state.stars
    let activities = this.state.activities.map(activity => {
      return <ActivityTile
      activity={activity} />
    })
    return(
      <div className="stars">
          <h1>{stars} Motherfucker</h1>
          <h2>{activities}</h2>
          <p>ygygjgjgj</p>
      </div>
    )
  }
}


export default StarBank
