import React, { Component } from 'react';
import axios from 'axios';
// import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {Link} from 'react-router-dom'
import { date } from 'yup';

export default class EditExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      todate: new date(),
      users: []
    }
  }

  

  componentDidMount() {
    

    axios.get('http://localhost:5000/exercises/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          username: response.data.username,
          email: response.data.email,
          description: response.data.description,
          duration: response.data.duration
          // date: new Date(response.data.date),
          // todate: new Date(response.data.date)
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

//   onChangeEmail(e) {
//     this.setState({
//       email: e.target.value
//     })
//   }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onChangeToDate(todate) {
    this.setState({
      date: todate
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      email: this.state.email,
      description: this.state.description,
      duration: this.state.duration
      // date: this.state.date,
      
    }

    console.log(exercise);

    axios.post('http://localhost:5000/exercises/update/' + this.props.match.params.id, exercise)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h2>Admin Sign Up</h2>
      <form onSubmit={this.onSubmit}>

{/* username */}
        <div className="form-group"> 
          <label>Username: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
              />

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
        
        </div>
             

        <div className="form-group">
            <Link to='/'>
          <input type="submit" value="Create Admin Account" className="btn btn-primary" />
          </Link>
        </div>
      </form>
    </div>
    )
  }
}