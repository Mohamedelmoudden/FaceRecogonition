import React, { Component } from 'react';
import 'tachyons';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import FaceRocognition from './Components/FaceRocognition/FaceRocognition';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import Particles from 'react-particles-js';
const Clarifai = require('clarifai');

const app = new Clarifai.App({
 apiKey: 'f5b817d2f54c4a9dae85a0454e6070d4'
});


const particlesOptions = {
    particles: {
        number: {
            value: 50,
            density: {
                enable: true,
                value_area: 900
            }
        }
    }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      input:'',
      imageUrl: '',
      box: {}
    }
  }

  calculateFaceLocation = (data) => {

  }

  onInputChange = (event) =>  {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,  
      this.state.input)
    .then( response => this.calculateFaceLocation(response))
    .catch(err => console.log(err));
  }

  render() {
    return(
        <div className="App">
          <Particles className="particles"
          params={particlesOptions}/>
          <Navigation />
          <Logo /> 
          <Rank />
          <ImageLinkForm 
            onInputChange={this.onInputChange} 
            onButtonSubmit={this.onButtonSubmit} />
          <FaceRocognition imageUrl={this.state.imageUrl} />
        </div>
    );
  }
}

export default App;
