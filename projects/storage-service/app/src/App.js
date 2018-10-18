import React, { Component } from 'react';
import './App.css';
import BusinessForm from './components/business-form'
import Units from './components/unit-form'
import Blocks from './components/blocks-form'
import RegisterLocation from './components/location-form'


class App extends Component {
  managePaths(){
    const pathName = window.location.pathname;
    switch(pathName){   
      default: 
      case '/':
      return <BusinessForm/>;
      
      case '/register-units':
      return <Units/>;

      case '/register-blocks':
      return <Blocks/>;

      case '/register-location':
      return <RegisterLocation/>;
    }
  }
  render() {
    return (
      <div className="">
      {this.managePaths()}
      </div>
    );
  }
}

export default App;
