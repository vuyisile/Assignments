import React, { Component } from 'react';
import axios from 'axios';

class Units extends Component {
    constructor() {
        super();
        this.state = {
            blocks: ['b1', 'b2', 'b3'],
            unitName: '',
            unitType: '',
            length: '',
            height: '',
            width: ''
        }
        this.handleInput = this.handleInput.bind(this)
    }
    handleInput(e) {
        let change = {};
        change[e.target.name] = e.target.value;
        this.setState(change);
    }
    submitData() {
        axios.post('http://localhost:3001/unit-details', this.state)
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
                        <td>Block Name </td>
                        <td>
                            <select>
                                <option value={'select-block'}>select block</option>
                                {this.state.blocks.map((block) => <option value={block}>{block}</option>)}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Unit Name </td>
                        <td>
                            <input type='text' name='location' onChange={this.handleInput} value={this.state.telephone} />
                        </td>
                    </tr>
                    <tr>
                        <td>Unit type</td>
                        <td>
                            <input type='text' name='type' onChange={this.handleInput} value={this.state.email} />
                        </td>
                    </tr>
                    <tr>
                        <td>Unit Length</td>
                        <td>
                            <input type='text' name='length' onChange={this.handleInput} value={this.state.email} />
                        </td>
                    </tr>
                    <tr>
                        <td>Unit Width</td>
                        <td>
                            <input type='text' name='width' onChange={this.handleInput} value={this.state.email} />
                        </td>
                    </tr>
                    <tr>
                        <td>Unit Height</td>
                        <td>
                            <input type='text' name='height' onChange={this.handleInput} value={this.state.email} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button className={'btn-margin'}>Cancel</button>
                        </td>
                        <td>
                            <button className={'btn-margin '}>Add</button>
                        </td>

                    </tr>
                </tbody>

            </table>
        </div>
        );
    }
}

export default Units;