<script setup>
import {ref} from 'vue';
import userData from './data.json';
const username = ref("");
const email = ref("");
const password = ref("");
const checkForm = ()=>{
  var cnt = 0;  
  for(let user of userData){
      // console.log(user.username);
      if(user.username === username.value && user.email === email.value 
        && user.password === password.value){
          cnt++;
          user.isActive = true;
    }
  }
  if(cnt>0){
    alert("login success");
  }else{
    alert('login failed');
  }
}
 
</script>
<template>
  <div>
    <h1>User Data</h1>
    <form @submit="checkForm">
      Username <br>
      <input type="text" v-model="username"> <br>
      Email <br>
      <input type="text" v-model="email"> <br>
      Password <br>
      <input type="password" v-model="password"> <br>
      <input type="submit" value="Login">
    </form>
    <p>Data tu trong file json</p>
    <p v-for="user in userData" :key="user.username">Name: {{ user.username }}, Email: {{ user.email }}
      ,{{ user.password }}
    </p>
   <ul v-for="user in userData" :key="user.username">
    <li v-if="user.isActive == true">Name: {{ user.username }}, Email: {{ user.email }}
      ,{{ user.password }}</li>
   </ul>
  </div>
</template>



<style scoped>

</style>
