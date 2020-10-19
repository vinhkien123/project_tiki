import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import axios from "axios"

import "./scss/Facebook.scss"
export default class Facebook extends Component {
<<<<<<< HEAD

  responseFacebook = response => {
    console.log(response);
    const headers = {
      "Content-Type": "application/json"
    }

    axios.post("https://103.130.214.106:3005/api/users/login/facebook",
      {
        access_token: response.accessToken,
      }, headers)
      .then(result => {
        console.log(result);
      })
=======
  
  componentDidMount(){
    
  }
  responseFacebook = response => {
     const headers = {
        "Content-Type": "application/json"
      }
      
     axios.post("https://103.130.214.106:3005/api/users/login/facebook",
          {
            access_token: response.accessToken,
          },headers)
          .then(result =>{
            console.log(result);
          })
>>>>>>> dongngo
  };

  render() {
    let fbContent;

<<<<<<< HEAD
    fbContent = (
      <div
        style={{
          width: "100%",
          background: "#f4f4f4",
          padding: "20px"
        }}
      >
      </div>
    );

    fbContent = (
      <FacebookLogin
        appId="1074493309677220"
        autoLoad={false}
        fields="name,email,picture,birthday"
        scope="public_profile, email"
        callback={this.responseFacebook}
        textButton="&nbsp;&nbsp;Đăng nhập với Facebook"
      />
    );
=======
      fbContent = (
        <div
          style={{
            width: "400px",
            margin: "auto",
            background: "#f4f4f4",
            padding: "20px"
          }}
        >
        </div>
      );
 
      fbContent = (
        <FacebookLogin
          appId="1074493309677220"
          autoLoad={false}
          fields="name,email,picture,birthday" 
          scope="public_profile, email"
          callback={this.responseFacebook}
          textButton = "&nbsp;&nbsp;Đăng nhập với facebook"
        />
      );
>>>>>>> dongngo

    return <div className="Facebook_login" style={this.props.FbStyle}>{fbContent}</div>;
  }
}