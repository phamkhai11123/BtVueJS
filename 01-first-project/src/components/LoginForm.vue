<script setup>
import {ref} from 'vue';
import { useRouter } from 'vue-router';
import userData from './data.json';
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
 
</script>
<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="checkForm" class="">
      Username <br>
      <input type="text" v-model="username" class="form-control"> <br>
      Email <br>
      <input type="text" v-model="email" class="form-control"> <br>
      Password <br>
      <input type="password" v-model="password" class="form-control"> <br>
      <input type="submit" value="Login" class="form-control">
    </form>
    <p v-for="user in userData" :key="user.username">Name: {{ user.username }}, Email: {{ user.email }}
      ,{{ user.password }}
    </p>

  </div>
</template>



<style scoped>

</style>
