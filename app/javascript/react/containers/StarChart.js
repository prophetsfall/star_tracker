import React, {Component} from 'react'
import ActivityTile from '../components/ActivityTile'

class StarChart extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      user:null,
      activity:null,
      date:null,
      level: "Medium",
      duration: null
    }

    componentDidMount() {
      fetch(`/api/v1/user_activities`)
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
        debugger
        this.setState({activities:activities})
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

    render(){
      return(

      )
    }
export default StarChart
