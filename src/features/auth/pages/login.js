import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initializeApp } from 'firebase/app';
import LoginForm from '../components/login-form';
import { Button } from '@mui/material';
import { login } from './userSlice';
import { useNavigate } from 'react-router-dom';
import './login.scss';
const firebaseConfig = {
  apiKey: 'AIzaSyB4zM3ny7frQzZ9_i21ImlwayhO5zQBB6Y',
  authDomain: 'shopping-12409.firebaseapp.com',
};

const app = initializeApp(firebaseConfig);

function LoginFeature() {
  const userState = useSelector((state) => state.userState);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const provider = new GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

  const auth = getAuth();
  auth.languageCode = 'it';
  // To apply the default browser preference instead of explicitly setting it.
  // firebase.auth().useDeviceLanguage();
  provider.setCustomParameters({
    login_hint: 'user@example.com',
  });

  const onHandleLoginPoup = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        dispatch(login(user));
        navigate('/products');

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  if (!userState.user) {
    return (
      <div className="flex justify-content-end">
        <div className="login-block">
          <LoginForm></LoginForm>
          <Button className='sign-in-button' onClick={onHandleLoginPoup} variant={'outlined'} color={'info'}>
            Sign in with google account
          </Button>
        </div>
      </div>
    );
  }
}

export default LoginFeature;
