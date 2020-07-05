import React, { Component } from 'react'

export default class AmiiboData extends Component {
  render() {
    console.log(this.props)
    return (
      <div className= "api-data">
        <div className= "api-text">
          <h1 className="Character-name">{this.props.name}</h1>
          <h3 className= "Game-series">{this.props.aSeries}</h3>
          <h3 className= "Amiibo-series">{this.props.gSeries}</h3>
          <h3 className="Release-date">{this.props.releaseDate}</h3>
        </div>
        <div className= "api-image">
          <img className="char-image" src={this.props.charImage} alt="" />
        </div>
      </div>
    )
  }
}
