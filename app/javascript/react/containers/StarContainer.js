import React, {Component} from 'react'
import StarTile from '../components/StarTile'

const stars =[
  "fas fa-star-half-alt fa-3x",
  "fas fa-star fa-3x",
  "fas fa-jedi fa-3x"
]

class StarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      starValue: null,
      selectedStar:null
    }
    this.handleStarSelect = this.handleStarSelect.bind(this)
  }

  handleStarSelect(id){
    if (this.state.selectedStar === id){
      this.setState({selectedStar:null})
    } else {
      this.setState({selectedStar:id})
    }
    this.props.chooseStar(id)
  }

  render(){
    let starMap = stars.map((star,index) => {
      let handleClick = () => {
        this.handleStarSelect(index)
      }
      let className = this.state.selectedStar
      return(
        <StarTile
          star={star}
          key={index}
          id={index}
          className={className}
          handleClick={handleClick}
        /> )
  })

  return(
    <div className="StarContainer">{starMap}</div>
  )}
}
export default StarContainer
