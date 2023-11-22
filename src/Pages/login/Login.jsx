import React from 'react'
import { auth,provider } from '../../config/config'
import {signInWithPopup} from 'firebase/auth'
import { useNavigate, } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const signInWithGoogle= async()=>{

        const results = await signInWithPopup(auth,provider)
        const authInfo = {
          userID: results.user.uid,
          name: results.user.displayName,
          profilePhoto: results.user.photoURL,
          isAuth: true,
        }
      
        localStorage.setItem("auth", JSON.stringify(authInfo));
          navigate("/");
      
      }

  return (
    <>
    <p>Sign In With Google to Continue</p>
    <button className="login-with-google-btn" onClick={signInWithGoogle}>
      {" "}
      Sign In With Google
    </button>
    </>
    
  )
}

export default Login