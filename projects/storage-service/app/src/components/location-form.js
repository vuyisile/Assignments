import React, { Component } from 'react';
import axios from 'axios';


class RegisterLocation extends Component {
  constructor() {
    super();
    this.state = {
      selectCompany: [],
      addressLine1: '',
      addressLine2: '',
      zipCode: '',
      cityOrTown: '',
      companyIdName:''
    }
    this.gotoNext = this.gotoNext.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.submitData = this.submitData.bind(this)
  }
  async componentDidMount() {
    var businesses = await axios.get('http://localhost:3001/businesses');
    this.setState({ selectCompany: businesses.data })
  }
  handleInput(e) {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  }
  handleSelect(val){
    this.setState({companyIdName:val})
  }
  submitData() {
    axios.post('http://localhost:3001/location',
      { companyIdName: this.state.companyIdName,
        addressLine1: this.state.addressLine1,
        addressLine2: this.state.addressLine2,
        cityOrTown: this.state.cityOrTown,
        zipCode: this.state.zipCode
      });
      setTimeout(() => {
        this.setState({
          addressLine1: '',
          addressLine2: '',
          zipCode: '',
          cityOrTown: '',
          companyIdName:''
        })
      }, 1000);
  }

  gotoNext(e) {
    // window.location.set('/register-blocks')
  }

  render() {
    console.log(this.state)
    return (<div className={'color form-pos'}>
      <table>
        <thead>
          <tr>
            <td>
              <h3>Location</h3>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Company</td>
            <td>
              <select>
                <option value={'select-company'}>select company</option>
                {this.state.selectCompany.map((key,i=0) => <option key = {key.company_name+i++} value={this.state.companyIdName} onClick={()=>this.handleSelect(key.company_name)}>{key.company_name}</option>)}
              </select>
            </td>
          </tr>
          <tr>
            <td>
              Address Line 1
            </td>
            <td>
              <input type='text' name='addressLine1' onChange={this.handleInput} value={this.state.addressLine1} />
            </td>
          </tr>
          <tr>
            <td>
              Address Line 2
            </td>
            <td>
              <input type='text' name='addressLine2' onChange={this.handleInput} value={this.state.addressLine2} />
            </td>
          </tr>
          <tr>
            <td>
              City/Town
            </td>
            <td>
              <input type='telephone' name='cityOrTown' onChange={this.handleInput} value={this.state.cityOrTown} />
            </td>
          </tr>
          <tr>
            <td>
              Zip Code
            </td>
            <td>
              <input type='text' name='zipCode' onChange={this.handleInput} value={this.state.zipCode} />
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

export default RegisterLocation;