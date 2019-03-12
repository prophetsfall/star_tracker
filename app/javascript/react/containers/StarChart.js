import React, {Component} from 'react'
import StarContainer from './StarContainer'
import ActivitiesContainer from './ActivitiesContainer'
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html-5-backend'

class StarChart extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      user:null,
      activities:null,
      date:null,
      level: "Medium",
      duration: null
    }
  }

  render(){
    return(
      <div className="large-12 columns">
          <div className="containers large-2 columns">
            <div className="row">
              <div className="">
                <StarContainer />
              </div>
            </div>
            <div className="row">
              <div className="">
                <ActivitiesContainer />
              </div>
            </div>
          </div>
          <div className="stars large-8 columns end ">
            Drag stars over here!
            <div className="row">Sara</div>
            <div className="row">Pat</div>
          </div>
      </div>
    )
  }
}
export default function StarChart() {
  return(
    <DragDropContextProvider backend={HTML5Backend}
      {/* ... */}
    </DragDropContextProvider>
  )
}
