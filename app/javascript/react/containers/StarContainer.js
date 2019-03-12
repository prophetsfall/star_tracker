import React, {Component} from 'react'
import StarTile from '../components/StarTile'

const stars = [
  "fas fa-star-half-alt fa-3x",
  "fas fa-star fa-3x",
  "fas fa-jedi fa-3x"
]

class StarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      starValue: null,
    }
    this.onDrag = this.onDrag.bind(this)
  }

   onDrag(event) {
    event.preventDefault()

  }


  render(){
    let starMap = stars.map(star => {
      return(
    <i className={star} aria-hidden="true"></i>
  )
  })

  return(
    <div className="StarContainer">{starMap}</div>
  )}
}
export default StarContainer
