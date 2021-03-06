import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import BusinessNavbar from './business-navbar'
import CustomerNavbar from './customer-navbar'
import jwt from "jsonwebtoken"

// import { connect } from 'react-redux';

class AvailableUnits extends Component {
    constructor() {
        super();
        this.state = {
            units: [],
            user: {}
        }
    }
    async componentDidMount() {
        await this.getAllUnits()
        var auth = JSON.parse(sessionStorage.getItem('auth'))
        if (auth !== null) {
            var user = jwt.decode(auth.token);
            this.setState({ user: user })
        }

    }
    async getAllUnits() {
        var units = await axios.get('http://localhost:3001/availableUnits');
        this.setState({ units: units.data });
        console.log('units :', units); 
        return units
    }
    updateUnit = id => {
        axios.post('http://localhost:3001/updateUnitStatus', { id: id })
            .then(res => {
                console.log(res)
                this.getAllUnits()
            })
            .catch(err => console.error(err))
    }

    changeStatus(currentStatus) {
        var unit = this.state.units
        if (currentStatus === 'available') {
            currentStatus = 'rented'
        }
        console.log('curState', currentStatus);
        // axios.post('http://localhost:3001/unit', data)
    }
    render() {
        return (<div>
            {this.state.user.userType === 'business' ? <BusinessNavbar /> : <CustomerNavbar />}

            <div className={'color my-container container'}>
                <center>
                    <h3>Units</h3>
                </center>
                <div className={'tbl units-display'}>
                    {this.state.units.map((unit, i) => <div
                        key={i}
                        style={{ backgroundColor: '#ccc' }} >
                        <span style={{ marginLeft: 10 + '%' }}>
                            <p>name :{unit.name}</p>
                            <p>type :{unit.type}</p>
                            <p>length :{unit.unit_length + 'm'}</p>
                            <p>width :{unit.unit_width + 'm'}</p>
                            <p>height :{unit.unit_height + 'm'}</p>
                            <p>city :{unit.city_or_town}</p>
                        </span>
                        <button

                            disabled={unit.status === 'available' ? false : true}
                            onClick={() => this.updateUnit(unit.id)} style={{ width: 10 + 'em' }} className={'btn btn-default'}>rent</button>
                    </div>)}
                </div>
            </div>

        </div>
        );
    }
}



export default AvailableUnits /*connect(mapStateToProps, mapDispatchToProps)*/;