import React, { Component } from "react";
import { GoogleComponent } from 'react-google-location';
import '../location/Location.css';
import weather_API_KEY from "../../auth/auth"


class Location extends Component {
  constructor(props) {
    super(props)
    this.state = {
      place: null,
    };
  }
  render() {
    console.log("Object Being Returned:", this.state.place)
    return (
      <div className="container">
        <GoogleComponent
        
        apiKey={weather_API_KEY}
        language={'en'}
        country={'country:us'}
        coordinates={true}
        locationBoxStyle={'custom-style'}
        locationListStyle={'custom-style-list'}
        onChange={(e) => { this.setState({ place: e }) }} />
      </div>

     )
  } 
}

export default Location;