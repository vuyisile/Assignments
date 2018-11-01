import React, { Component } from 'react';
import axios from 'axios';

class Units extends Component {
    constructor() {
        super();
        this.state = {
            blocks: [],
            unitTypes: [],
            unitName: '',
            unitType: '',
            block: '',

        }
        this.handleInput = this.handleInput.bind(this)
        this.submitData = this.submitData.bind(this)
    }
    async componentDidMount() {
        var blocks = await axios.get('http://localhost:3001/blocks');
        var unitTypes = await axios.get('http://localhost:3001/unit-types')
        var arrBlocks = [];
        var arrUnitTypes = [];
        unitTypes.data.forEach(item => arrUnitTypes.push([item.id, item.type,
        `(h: ${item.unit_height}m ,l: ${item.unit_length}m ,w: ${item.unit_width}m)`
        ]))
        blocks.data.forEach(item => arrBlocks.push([item.id, item.block_name]))
        this.setState({ blocks: arrBlocks, unitTypes: arrUnitTypes })
    }

    handleSelect(target, value) {
        let change = {};
        change[target] = value;
        this.setState(change);
    }
    handleInput(e) {
        let change = {};
        change[e.target.name] = e.target.value;
        this.setState(change);
    }
    submitData() {
        axios.post('http://localhost:3001/save-unit',
            {
                unitName: this.state.unitName,
                unitType: this.state.unitType,
                block: this.state.block
            })
    }

    render() {
        console.log(this.state)
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
                                {this.state.blocks.map((block, i = 0) => <option key={block + i++} value={block} onClick={() => this.handleSelect('block', block)}>{`${block[0]}. ${block[1]}`}</option>)}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Unit type</td>
                        <td>
                            <select>
                                <option value={'select-block'}>select unit-type</option>
                                {this.state.unitTypes.map((unitType, i = 0) => <option key={unitType + i++} value={unitType} onClick={() => this.handleSelect('unitType', unitType)}>{`${unitType[0]}. ${unitType[1]}${unitType[2]}`}</option>)}
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

export default Units;