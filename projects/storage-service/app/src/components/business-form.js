import React, { Component } from 'react';
import axios from 'axios';


class BusinessForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      name: '',
      telephone: ''
    }
    this.gotoNext = this.gotoNext.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.submitData = this.submitData.bind(this)
  }
  handleInput(e) {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  }
  submitData(){
    axios.post('http://localhost:3001/business-details',this.state)
  }
  gotoNext(e) {
        // window.location.set('/register-blocks')
  }
  render() {
    return (<div className={'color form-pos'}>
      <table>
        <thead>
          <tr>
            <td>
              <h3>Unit Provider Details</h3>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Name:
            </td>
            <td>
              <input type='text' name='name' onChange={this.handleInput} value={this.state.name} />
            </td>
          </tr>
          <tr>
            <td>
              Telephone:
            </td>
            <td>
              <input type='telephone' name='telephone' onChange={this.handleInput} value={this.state.telephone} />
            </td>
          </tr>
          <tr>
            <td>
              Email:
            </td>
            <td>
              <input type='email' name='email' onChange={this.handleInput} value={this.state.email} />
            </td>
          </tr>
          <tr>
            <td>
              <button className={'btn-margin'}>Cancel</button>
            </td>
            <td>
              <button className={'btn-margin pos'} onClick={this.submitData}>Next</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    );
  }
}

export default BusinessForm;