import React, { Component } from 'react';

class Blocks extends Component {
    constructor() {
        super();
        this.state = {
            blockName: '',
            unitLocation: ''
        }
        this.handleInput = this.handleInput.bind(this);
        this.gotoNext = this.gotoNext.bind(this)
    }
    handleInput(e) {
        let change = {};
        change[e.target.name] = e.target.value;
        this.setState(change);
    }
    gotoNext(){
        window.location.set('register-units');
    }
    render() {
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
                        <td>Block Name</td>
                        <td>
                            <input type='text' name='block-name' onChange={this.handleInput} value={this.state.name} />
                        </td>
                    </tr>
                    <tr>
                        <td>Block Location</td>
                        <td>
                            <input type='text' name='location' onChange={this.handleInput} value={this.state.telephone} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button style={{ marginTop: 7 + 'em' }}>Cancel</button>
                        </td>
                        <td className={'row'}>
                            <button className={'col-md-4'} style={{ marginLeft: 10 + 'em', marginTop: 7 + 'em'  }} onClick={this.gotoNext}>Next</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        );
    }
}

export default Blocks;