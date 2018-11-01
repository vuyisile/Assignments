import React, { Component } from 'react';
import axios from 'axios';

class Units extends Component {
    constructor() {
        super();
        this.state = {
            blocks: [],
            unitName: '',
            unitType: '',
            length: '',
            height: '',
            width: '',
            block:''
        }
        this.handleInput = this.handleInput.bind(this)
        this.submitData = this.submitData.bind(this) 
    }   
    async componentDidMount() {
        var blocks = await axios.get('http://localhost:3001/blocks');
        var arrBlocks = [];
        blocks.data.forEach(item => arrBlocks.push([item.id, item.block_name]))
        this.setState({ blocks: arrBlocks })
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
                                {this.state.blocks.map((block, i = 0) => <option  key={block + i++} value={block} onClick={()=>this.handleSelect(block)}>{`${block[0]}. ${block[1]}`}</option>)}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Unit Name </td>
                        <td>
                            <input type='text' name='unitName' onChange={this.handleInput} value={this.state.telephone} />
                        </td>
                    </tr>
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
                            <button className={'btn-margin '} onClick = {this.submitData}>Add</button>
                        </td>

                    </tr>
                </tbody>

            </table>
        </div>
        );
    }
}

export default Units;