import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';

class FaceBookLogin extends Component {
  responseFacebook(response) {
    console.log(response);
  }

  render() {
    return (
      <FacebookLogin
        appId="1088597931155576"
        autoLoad={true}
        fields="name,email,picture"
        scope="public_profile,user_friends,user_actions.books"
        callback={this.responseFacebook}
      />
    );
  }
}

export default FaceBookLogin;
