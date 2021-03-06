import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import auth0Client from './auth';
class Callback extends Component {
  async componentDidMount() {
 await auth0Client.handleAuthentication();
    const user = await auth0Client.getProfile();
    console.log(user.name)
    if (user.name === "Book Cop") {
      this.props.history.replace('/parent');
    } else {
      this.props.history.replace('/child');
    }
  }
  render() {
    return (
      <p>Loading profile...</p>
    );
  }
}
export default withRouter(Callback);