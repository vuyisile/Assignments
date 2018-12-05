import React, { Component } from 'react';
import axios from 'axios';
import '../App.css'

class TypesOfUnits extends Component {
    constructor() {
        super();
        this.state = {
            unitType: '',
            length: '',
            height: '',
            width: ''
        }
        this.handleInput = this.handleInput.bind(this)
        this.submitData = this.submitData.bind(this)
    }

    handleSelect(val) {
        this.setState({ block: val })
    }
    handleInput(e) {
        let change = {};
        change[e.target.name] = e.target.value;
        this.setState(change);
    }
    submitData() {
        axios.post('http://localhost:3001/type', this.state)
    }
    gotoNext() {
        if (window.location.pathname === '/type') {
            window.location.pathname = '/unit'
        }
    }
    render() {
        return (<div className={'color container form-pos'}>

            <h3 style={{ marginRight: 5.3 + 'em' }}>Unit Details</h3>

            <form className={'unit-type'}>

                <label>Unit type</label>

                <input placeholder={'Unit type'} type='text' name='unitType' onChange={this.handleInput} value={this.state.email} />

                <label>Unit Length (metres)</label>

                <input placeholder={'Length'} type='text' name='length' onChange={this.handleInput} value={this.state.email} />

                <label>Unit Width (metres)</label>

                <input placeholder={'Width'} type='text' name='width' onChange={this.handleInput} value={this.state.email} />

                <label>Unit Height (metres)</label>
                <div>
                    <input placeholder={'Height'} type='text' name='height' onChange={this.handleInput} value={this.state.email} /><br/>
                    <button className={''} onClick={this.submitData}>Add</button>
                </div>

            </form>
            <div className={'unit-type'}>
                <button>Cancel</button>
                <button onClick={() => this.gotoNext()}>Next</button>
            </div>
        </div>
        );
    }
}

export default TypesOfUnits;