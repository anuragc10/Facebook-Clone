import {auth,provider} from "./firebase";
import { Button } from '@material-ui/core';
import React from 'react';
import "./Login.css";
import{ actionTypes  } from "./reducer";
import { useStateValue } from "./StateProvider";
function Login() {

    const [state, dispatch]=useStateValue();

    const signIn=()=>{
        // signIn
        auth.signInWithPopup(provider)
        .then(result => {

            dispatch({ 
                type:actionTypes.SET_USER,
                user:result.user,
            });
        })
        .catch(error=>alert(error.message));
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/800px-Facebook_f_logo_%282019%29.svg.png" alt=""/>
                <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1024px-Facebook_Logo_%282019%29.svg.png" alt=""/>
            </div>

            <div>
                <Button type="submit"  onClick={signIn}>SignIN</Button>
            </div>
        </div>
    )
}

export default Login;
