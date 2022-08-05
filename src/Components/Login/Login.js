import { getAuth } from "firebase/auth";
import React from "react";
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import app from "../../firebase.init";
import {useLocation,useNavigate} from 'react-router-dom'

const auth = getAuth(app)

const Login = () => {
    const [signInWithGoogle,user]= useSignInWithGoogle(auth)
    let location = useLocation();
     let navigate = useNavigate();
    const from = location?.state?.from?.pathname || "/";
    const handleGoogleSignIn= ()=>{
        signInWithGoogle()
        .then(()=>{
            navigate(from,{ replace: true })
        })
    }

  return (
    <div>
      <h2>Login</h2>

      <div style={{ margin: "20px" }}>
        <button onClick={handleGoogleSignIn}>Google SignIn</button>
      </div>
      <form>
        <input type="email" placeholder="Your Email" />
        <br />
        <input type="password" name="" id="" placeholder="Password" />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
