import React, { Component } from 'react';
import axios from 'axios';

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
        axios.post('http://localhost:3001/save-type', this.state)
    }

    render() {
        return (<div className={'color form-pos'}>
            <table>
                <thead>
                    <tr>
                        <td>
                            <h3 style={{ marginRight: 5.3 + 'em' }}>Unit Details</h3>
                        </td>
                        <td>
                            <button style={{ marginLeft: 10 + 'em' }}>Done</button>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Unit type</td>
                        <td>
                            <input type='text' name='unitType' onChange={this.handleInput} value={this.state.email} />
                        </td>
                    </tr>
                    <tr>
                        <td>Unit Length (metres)</td>
                        <td>
                            <input type='text' name='length' onChange={this.handleInput} value={this.state.email} />
                        </td>
                    </tr>
                    <tr>
                        <td>Unit Width (metres)</td>
                        <td>
                            <input type='text' name='width' onChange={this.handleInput} value={this.state.email} />
                        </td>
                    </tr>
                    <tr>
                        <td>Unit Height (metres)</td>
                        <td>
                            <input type='text' name='height' onChange={this.handleInput} value={this.state.email} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button className={'btn-margin'}>Cancel</button>
                        </td>
                        <td>
                            <button className={'btn-margin '} onClick={this.submitData}>Add</button>
                        </td>

                    </tr>
                </tbody>

            </table>
        </div>
        );
    }
}

export default TypesOfUnits;