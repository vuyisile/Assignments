import React, { Component } from 'react';
import '../App.css'
// import { connect } from 'react-redux';

class Welcome extends Component {
    constructor() {
        super();
        this.changeRoute = this.changeRoute.bind(this);
    }
    changeRoute(newPathname) {
        window.location.pathname = newPathname;
    }
    render() {
        return (<div className={'color my-containe form-pos'}>
            <h1 style={{ marginRight: 5.3 + 'em' }}>GetStore</h1>
            <br/>
            <h2>Want put your warehouse,garage/store-room on the market, we got you!!</h2>
            <button onClick={()=>this.changeRoute('/registerBusiness')}>Register Business</button>
            <br/>
            <h2>Need a place to store you stuff, we got you!!</h2>
            <button onClick={()=>this.changeRoute('/userChoice')}>Rent a place here</button>
            <br/>
        </div>
        );
    }
}



export default Welcome;