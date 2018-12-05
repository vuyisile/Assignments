import React, { Component } from 'react';
import axios from 'axios';
import '../App.css'
// import { connect } from 'react-redux';

class AvailableUnits extends Component {
    constructor() {
        super();
        this.state = {
            units: []          
        }
    }
    async componentDidMount(){
        try {
        var units = await axios.get('http://localhost:3001/units');
        console.log('units',units);
        } catch (error) {
        console.log('error',error)    
        }
    }
    // submitData() {
    //     axios.post('http://localhost:3001/login', this.state);
    // }
    render() {
        return (<div className={'color container form-pos'}>
            <h3 style={{ marginRight: 5.3 + 'em' }}>Units</h3>
            
                <div>
                    
                </div>
        
        </div>
        );
    }
}



export default AvailableUnits /*connect(mapStateToProps, mapDispatchToProps)*/;