import React, { useEffect, useState } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import LoginForm from './components/login-form';
import { useSelector } from 'react-redux';

// Configure Firebase.
const config = {
  apiKey: 'AIzaSyB4zM3ny7frQzZ9_i21ImlwayhO5zQBB6Y',
  authDomain: 'shopping-12409.firebaseapp.com',
};

firebase.initializeApp(config);
// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/products',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    //  firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ],
};

LoginFeature.propTypes = {};
function LoginFeature(props) {
  const userState = useSelector((state) => state.user);

  if (!userState.user) {
    return (
      <div>
        <LoginForm></LoginForm>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        {/* <StyledFirebaseAuth uiCallback={ui => ui.disableAutoSignIn()} uiConfig={uiConfig} firebaseAuth={firebase.auth()}/> */}
      </div>
    );
  }
}

export default LoginFeature;
