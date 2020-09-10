import React, { Component } from "react";
import { GoogleComponent } from 'react-google-location';
import "react-bulma-components/dist/react-bulma-components.min.css";
import '../location/Location.css';

const API_KEY = 'AIzaSyBnLQEvOtyIbQBMv2O-UooBpasIjZB-820'

class Location extends Component {
  constructor(props) {
    super(props)
    this.state = {
      place: null,
    };
  }
  render() {
    return (
      <div className="container">
        <GoogleComponent
        
        apiKey={API_KEY}
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