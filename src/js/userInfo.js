import React from 'react';
import jQuery from 'jquery';


class UserLoginName extends React.component{
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       users: {}
//     }
//   }
//
//   componentDidMount() {
//   $.ajax("https://api.github.com/users/jacksaintjack")
//   .then( response =>{
//     this.setState({
//       users: response
//     });
//   })
// }
  render (){
    let users = this.props.users(user => {
        return <UserLoginName name = {user.name},
                              login = {user.login} />
    });
    return (
      <div>
        {users}
      </div>
    )
  }
}

export default UserLoginName;
