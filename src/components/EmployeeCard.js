import React, { Component } from 'react'
import API from './utils/API'



class EmployeeCard extends Component {
  state = {
    results: [],
    firstName: '',
    lastName: '',
    email: '',
    picture: '',
    gender: '',
    filteredArr: []
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
// sort by name function
  sortArr = () => {
    const temp = this.state.results.sort(function (a, b) {
      if (a.name.first < b.name.first) return -1
      if (a.name.first > b.name.first) return 1

      return 0
    })
    this.setState({ ...this.state, results: temp })
    console.log(this.state.results)
  }
// Could not get this to work
// Tried to filter by gender
  filterArr = () => {
    const filtered = this.state.results.filter(item => item.gender);
    console.log(filtered)
  }


  handleFormSubmit = event => {
    event.preventDefault()
    this.searchName(this.state.search)
  }

  render () {
    return (
      <div className="container">
        
        <button onClick={this.sortArr}type="button" className="btn btn-success">Sort by Name</button>
        <button onClick={this.filterArr}type="button" className="btn btn-success">Filter by Gender</button>
        

        <table>
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

                <td>
                  {item.name.first} {item.name.last}
                </td>

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

export default EmployeeCard
