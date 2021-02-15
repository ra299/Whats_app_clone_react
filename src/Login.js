import React from "react";
import { Button } from "@material-ui/core";
import "./Login.css";
import { auth, provider } from "./firebase";
import {actionTypes} from "./reducer";
import {useStateValue} from "./StateProvider";


function Login(){
  const [{}, dispatch] = useStateValue();

  const singIn = () => {
    auth
    .signInWithPopup(provider)
    .then((result) =>{
      dispatch({
        type: actionTypes.SET_USER,
        user: result.user,
      });
    })
    .catch(error=> alert(error.message));
  };
  return(
    <div className = "login">
      <div className = "login__container">
        <img
          src = "https://i.pinimg.com/originals/33/1f/fc/331ffce114fd2a8b6388f5bcb293e4d1.jpg"
          alt=""
        />
          <div className = "login__text">
            <h1>sing in to WhatsApp</h1>
          </div>
            <Button onClick= {singIn}>Sing In With Google</Button>
      </div>
    </div>
  );
}

export default Login;
