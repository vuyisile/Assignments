import React, { Component } from 'react';
import './App.css';
import BusinessForm from './components/business-form'
import Units from './components/unit-form'
import TypesOfUnits from './components/unit-type-form'
import Blocks from './components/blocks-form'
import RegisterLocation from './components/location-form'
import SignUp from './components/signup'
import Login from './components/login'
import Welcome from './components/welcome-page'
import UserChoice from './components/user-choice'
import AvailableUnits from './components/units'

class App extends Component {
  managePaths(){
    const pathName = window.location.pathname;
    switch(pathName){        
      case '/registerBusiness':
        return <BusinessForm/>;
        break;
      
      case '/unit':
        return <Units/>;
        break;

      case '/type':
        return <TypesOfUnits/>;
        break;

      case '/block':
        return <Blocks/>;
        break;

      case '/location':
        return <RegisterLocation/>;
        break;

      case '/signup':
        return <SignUp />;
        break;

      case '/login':
        return <Login />;
        break;

      case '/userChoice':
        return <UserChoice />;
        break;

      case '/availableUnits':
        return <AvailableUnits/>;
        break;

      default:
      case '/':
        return <Welcome />;

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
