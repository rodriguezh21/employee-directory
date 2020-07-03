import React, { Component } from 'react'
import API from './utils/API'

class EmployeeCard extends Component {
  state = {
    results: [],
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    picture: '',
    gender: ''
  }

  componentDidMount () {
    this.searchName('https://randomuser.me/api/?results=200&nat=us')
  }

  searchName = query => {
    API.search(query)
      .then(res => {
        this.setState({ results: res.data.results })
        console.log(this.state.results)
      })

      .catch(err => console.log(err))
  }

  handleInputChange = event => {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]: value
    })
  }

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault()
    this.searchName(this.state.search)
  }

  render () {
    return (
      <div>
        <table striped bordered hover>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
            </tr>
          </thead>
          {this.state.results.map(item => (
            <tbody>
            <tr>
              <td>
                <img src={item.picture.medium} alt=''></img>
              </td>

              <td>{item.name.first} {item.name.last}</td>

              <td>{item.email}</td>

              <td>{item.gender}</td>
            </tr>
            </tbody>
          ))}
        </table>
      </div>
    )
  }
}

// API.search()
//   .then(res => {
//     console.log("Res: "+JSON.stringify(res));
//     empName = res.data.results[0].name.first;
//     console.log('EMPLOYEE NAME: '+ empName)

//   })
//   .catch(err => console.log(err));

//   return(
//     <div>
//   { empName }
//   </div>
//   )

export default EmployeeCard
