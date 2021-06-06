import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: ''
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username
    }

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

    this.setState({
      username: ''
    })
  }

  render() {
    return (
      <div>
        <h2>Create New User</h2>
{/* usrname */}
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
          </div>


          {/* email */}
        <div className="form-group"> 
          <label>Email: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
              />
        </div>

{/* phone number */}
        <div className="form-group"> 
          <label>Phone: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.phone}
              onChange={this.onChangePhone}
              />
        </div>

{/* address */}
        <div className="form-group"> 
          <label>Address: </label>
          <input  type="text"
              required
              placeholder='Address Line 1'
              className="form-control"
              value={this.state.address1}
              onChange={this.onChangeaddress1}
              />
        </div>

{/* address line 2 */}
        <div className="form-group"> 
          <label> </label>
          <input  type="text"
              required
              placeholder='Address Line 2'
              className="form-control"
              value={this.state.address}
              onChange={this.onChangeaddress}
              />
        </div>

{/* city */}
        <div className="form-group"> 
          <label> </label>
          <input  type="text"
              required
              placeholder='City, State'
              className="form-control"
              value={this.state.city}
              onChange={this.onChangecity}
              />
        </div>

{/* zipcode */}

        <div className="form-group"> 
          <label>Zip code: </label>
          <input  type="text"
              required
              placeholder='Zip Code'
              className="form-control"
              value={this.state.zipcode}
              onChange={this.onChangezipcode}
              />
        </div>

          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}