import React from 'react'
import './Login.css';
import {Button} from '@material-ui/core'
import {auth,provider} from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    const [state,dispatch] =useStateValue();
    const signIn =()=>{
       auth.signInWithPopup(provider)
        .then((result)=>{
            console.log(result);
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user
            })
        })
        
    }

    return (
        <div className="login">
        <div className="login__container">
            <img src="https://talkingpointz.com/wp-content/uploads/2019/10/Slack.logo2_.jpg" alt="" />
        
           <h1>Sign in to Bharati Vidyapeeth</h1>
           <p>Bharati Vidyapeeth College of Engineering</p> 
           <Button onClick={signIn}>Sign In with Google</Button>
           </div>
        </div>
    )
}

export default Login
