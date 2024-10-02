<script setup>

import { getAuth, signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import { useRouter } from 'vue-router';
import firebaseConfig from '../firebaseConfig'
// import {decodeCredential} from 'vue3-google-login'
const router =  useRouter();
const provider = new GoogleAuthProvider();
const auth = getAuth();
const onSignIn = () =>{
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user);
    localStorage.setItem('user',JSON.stringify(user));
    // console.log(user.accessToken);
    // console.log(user.refreshToken);
    localStorage.setItem('accesstoken',token);
    router.push('/about');
  }).catch((error) => {
    console.log(error)
  });
}

</script>
<template>
  <div>
    <h1>Login page</h1>
    <i class="fa-brands fa-google-plus-g"></i>
    <button @click="onSignIn" class="btn btn-warning">Login by Google  </button><i style="color: greenyellow;height: 10px; width: 10px;" class="fa-brands fa-google"></i>
  </div>
  
    
</template>

