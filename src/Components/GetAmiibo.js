import React, { Component } from 'react'
import axios from "axios"
import AmiiboData from './AmiiboData'

class GetAmiibo extends Component {
  constructor() {
    super()
    this.state = {
      searchText: '',
    }
  }

  handleChange = (event) => {
    this.setState({
      searchText: event.target.value
    })
  }
  
  handleSearch = async () => {
    this.setState({loading: true})
    try {
      const amiiboChar = await axios('https://www.amiiboapi.com/api/amiibo/?name=' + this.state.searchText)
      this.setState({
        name: amiiboChar.data.amiibo[0].character,
        amiiboSeries: amiiboChar.data.amiibo[0].amiiboSeries,
        gameSeries: amiiboChar.data.amiibo[0].gameSeries,
        release: amiiboChar.data.amiibo[0].release.na,
        image: amiiboChar.data.amiibo[0].image
      })
    } catch (error) {
      alert("Character not recognized! Check your spelling or try another character.")
    }
  }

  render() {
    
    return (
      <div className= "get-results">
        <div>
          <div className="get-amiibo">
            <input type="text" onChange={this.handleChange} placeholder= "Search by Character"/>
            <button onClick={this.handleSearch}>Get Amiibo</button>
          </div>
        </div>
        
        <div className="amiibo-data">
          <div>
            <AmiiboData
              name= {this.state.name}
              aSeries= {this.state.amiiboSeries}
              gSeries= {this.state.gameSeries}
              releaseDate= {this.state.release}
              charImage={this.state.image}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default GetAmiibo