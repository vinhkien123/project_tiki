'use strict';
 
import React from 'react';
import FacebookLogin from 'react-facebook-login';
 
class MyComponent extends React.Component {
  responseFacebook(response) {
    console.log(response)
  }
 
  render() {
    return (
      <FacebookLogin
        appId="1074493309677220"
        autoLoad={true}
        fields="name,email,picture"
        callback={this.responseFacebook}
      />
    )
  }
}
 
export default MyComponent;