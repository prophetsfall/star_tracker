import React, {Component} from 'react'
import ActivityTile from '../components/ActivityTile'

class ActivitiesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      activities: []
    }
    this.handleActivityClick = this.handleActivityClick.bind(this)
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
      let activities = body.activities
      this.setState({activities:activities});
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleActivityClick(event) {
    debugger
  }


  render(){
    let activities = this.state.activities.map(activity => {
      return( <ActivityTile
      key={activity.id}
      id={activity.id}
      name={activity.name}
      handleActivity={this.handleActivityClick}
      />
    )
    })
  return(
    <div className="ActivitiesContainer">
      {activities}
    </div>
  )}
}
export default ActivitiesContainer
