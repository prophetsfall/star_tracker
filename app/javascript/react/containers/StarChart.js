import React, { Component } from "react";
import StarContainer from "./StarContainer";
import ActivitiesContainer from "./ActivitiesContainer";

class StarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      activities: null,
      star: null,
      date: null,
      level: "Medium",
      duration: null
    };
    this.chosenStar = this.chosenStar.bind(this);
  }
  chosenStar(id) {
    if (this.state.star === id) {
      this.setState({ star: null });
    } else {
      this.setState({ star: id });
    }
  }

  render() {
    let activitiesContainer;
    if (this.state.star !== null) {
      activitiesContainer = <ActivitiesContainer star={this.state.star} />;
    }
    return (
      <div className="large-12 columns">
        <div className="stars large-8 columns end ">
          <div className="row">Sara</div>
          <div className="row">Pat</div>
        </div>
        <div className="containers large-2 columns">
          <div className="row">
            <div className="">
              <StarContainer chooseStar={this.chosenStar} />
            </div>
          </div>
          <div className="row">
            <div className="">{activitiesContainer}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default StarChart;
