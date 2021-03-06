import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';
import googleIcon from '../../../images/google.png';
import './Login.css';


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);

    }

    const handleGoogleSignIn = () => {
       
        const provider = new firebase.auth.GoogleAuthProvider();

      
        firebase.auth().signInWithPopup(provider).then(function(result) {
            
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email}
            setLoggedInUser(signedInUser);
          })
          .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            // ...
          });

    }
    return (
        <div>
            <div>
                <img style={{ height: '60px', textAlign: 'center', marginLeft: '40%'}} src={logo} alt=""/>
            </div>
            <section className = "container">
            <div className=" col md-12 login-form row align-items-center p-5">
                    <h1 className = "text-center">Login With</h1>
          
                    <button onClick={handleGoogleSignIn} className="google-button ">
                    <img src={googleIcon} className="google-icon float-left" alt=""/> 
                     Continue with Google</button>
                     <br />
                    <br />
                    <p className="text-secondary">Don't have an account? <a href="/">Create an account</a></p>  
        
            </div>
            </section>
        </div>
    );
};
export default Login;