import React, { Component } from 'react';
import UserService from "../Services/UserService";
import User from "../components/User"

class AllUsers extends Component {
 usersService = new UserService();

 state = {users: []}

 async componentDidMount() {
     let users = await this.usersService.users()
     this.setState({users})
 }

 render() {
  let {users} = this.state
  return (
     <div>
    {
     users.map(value => <User item={value} key={value.id}/>)
    }
     </div>
  );
 }
}

export default AllUsers;