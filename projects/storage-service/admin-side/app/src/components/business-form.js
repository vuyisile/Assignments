import React, { Component } from 'react';
import axios from 'axios';
import '../App.css'


class BusinessForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      companyName: '',
      contactPersonName: '',
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
  gotoNext() {
    if(window.location.pathname === '/'){
      window.location.pathname ='/location';
    }
  }
  submitData() {
    var email = this.state.email;
    var companyName = this.state.companyName;
    var contactPersonName = this.state.contactPersonName;
    var telephone = this.state.telephone;
    if (email.length > 0 && companyName.length > 0 && contactPersonName.length > 0 && telephone.length > 0) {
      axios.post('http://localhost:3001/business', this.state);
      this.gotoNext();
      setTimeout(() => {
        this.setState({
          email: '',
          companyName: '',
          contactPersonName: '',
          telephone: ''
        })
      }, 1000);
    }else{
      document.getElementById('error').innerText = 'please complete the form'
    }  
  }

  render() {
    return (<div className={'color container form-pos'}>
              <h3>Unit Provider Details</h3>
              <p id={'error'}></p>
        <form className={'business-form'}> 
          <label>
              Company Name
          </label>

              <input placeholder='Company Name' type='text' name='companyName' onChange={this.handleInput} value={this.state.companyName} />
          <label>
             Contact Person Name
         </label>

              <input placeholder="Contact Person's Name" type='text' name='contactPersonName' onChange={this.handleInput} value={this.state.contactPersonName} />
          <label>
               Telephone
          </label>
           
              <input placeholder='Phone Number' type='telephone' name='telephone' onChange={this.handleInput} value={this.state.telephone} />
          <label>
              Email
          </label>
          
              <input placeholder='Email' type='email' name='email' onChange={this.handleInput} value={this.state.email} />
           
          <button className={'btn-margin'}>Cancel</button>
          
          <button className={'btn-margin pos'} onClick={this.submitData}>Next</button>
         
        </form>
          
    </div>
    );
  }
}

export default BusinessForm;