import React, { Component } from 'react';
import axios from 'axios';

class Blocks extends Component {
    constructor() {
        super();
        this.state = {
            locations: [],
            blockName: '',
            location: '',
        }
        this.handleInput = this.handleInput.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.submitData = this.submitData.bind(this);
    }
    async componentDidMount() {
        var addresses = await axios.get('http://localhost:3001/locations');
        var data = addresses.data
        var locations = [];
        for (var i in data) {
            locations.push(`${data[i].address_line1}, ${data[i].address_line2}, ${data[i].city_or_town}, ${data[i].zip_code}`)
        }
        this.setState({ locations: locations })
    }
    handleInput(e) {
        let change = {};
        change['blockName'] = e.target.value;
        this.setState(change);
    }
    handleSelect(val) {
        this.setState({ location: val })
    }
    gotoNext() {
        window.location.set('register-units');
    }
    submitData() {
        axios.post('http://localhost:3001/block-details',this.state);
    }
    render() {
        console.log(this.state);

        return (<div className={'color form-pos'}>
            <table>
                <thead>
                    <tr>
                        <td>
                            <h3 style={{ marginRight: 5.3 + 'em' }}>Block</h3>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Location</td>
                        <td>
                            <select>
                                <option value={'select-location'}>select location</option>
                                {this.state.locations.map((location, i = 1) => <option value={this.state.location} key={'address' + i++} onClick={() => this.handleSelect(location)}>{location}</option>)}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Block Name</td>
                        <td>
                            <input type='text' name='block-name' onChange={this.handleInput} value={this.state.name} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button className={'btn-margin '} onClick={this.submitData}>+Add</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button style={{ marginTop: 7 + 'em' }}>Cancel</button>
                        </td>
                        <td className={'row'}>
                            <button className={'col-md-4'} style={{ marginLeft: 10 + 'em', marginTop: 7 + 'em' }} onClick={this.gotoNext}>Next</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        );
    }
}

export default Blocks;