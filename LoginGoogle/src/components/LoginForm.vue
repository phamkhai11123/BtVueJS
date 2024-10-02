<script setup>
// import axios from 'axios';
import {ref} from 'vue';
import { useRouter } from 'vue-router';
import userData from './data.json';
import {decodeCredential} from 'vue3-google-login'

const router =  useRouter();
const username = ref("");
const email = ref("");
const password = ref("");
const checkForm = ()=>{
  var cnt = 0;  
  for(let user of userData){
      if(user.username === username.value && user.email === email.value 
        && user.password === password.value){
          cnt++;
        localStorage.setItem('username', username.value);
        localStorage.setItem('password', password.value);
        localStorage.setItem('email', email.value);
        }
  }
  if(cnt>0){
    router.push('/about');
  }else{
    alert('Đăng nhập thất bại');
  }
}
// const onSignIn = (response)=>{
//     let profile = decodeCredential(response.credential);
//     localStorage.setItem('user',JSON.stringify(profile));
//     router.push('/about');
// }
const loginWithGoogle = (response) => {
  // const clientId = '956626380476-d226afhf3ihi5651rif2kjhk6b9gbpjp.apps.googleusercontent.com'; // Replace with your client ID
  // const redirectUri = 'http://localhost:5175'; // Replace with your redirect URI

  //   window.gapi.load('auth2', () => {
  //   const auth2 = window.gapi.auth2.init({
  //     client_id: clientId,
  //     redirect_uri: redirectUri,
  //   });

  //   auth2.signIn().then((googleUser) => {
  //     const accessToken = googleUser.getAuthResponse().access_token;
  //     const refreshToken = googleUser.getAuthResponse().refresh_token; // May not always be available
  //     const idToken = googleUser.getAuthResponse().id_token;

  //     // Store tokens in local storage
  //     localStorage.setItem('access_token', accessToken);
  //     localStorage.setItem('refresh_token', refreshToken);
  //     localStorage.setItem('id_token', idToken);

  //     console.log('Access Token:', accessToken);
  //     console.log('Refresh Token:', refreshToken);
  //     console.log('ID Token:', idToken);
  //   }).catch((error) => {
  //     console.error('Error signing in:', error);
  //   });
  // });
  let profile = decodeCredential(response.credential);
  localStorage.setItem('user',JSON.stringify(profile));
  console.log(response);
  router.push('/about');
};
</script>


<template>
  <div>
    <h1>Login</h1>
    <form>
      Username <br>
      <input type="text" v-model="username" class="form-control"> <br>
      Email <br>
      <input type="text" v-model="email" class="form-control"> <br>
      Password <br>
      <input type="password" v-model="password" class="form-control"> <br>
      <input type="submit" value="Login" @click.prevent="checkForm" class="btn btn-warning">
    </form>
    <GoogleLogin :callback="loginWithGoogle" class="bg-blue-500"/>

    <!-- <p v-for="user in userData" :key="user.username">Name: {{ user.username }}, Email: {{ user.email }}
      ,{{ user.password }}
    </p> -->

  </div>
</template>



<style scoped>

</style>
