<script setup>
  
   var username = localStorage.getItem('username') || 'Not logged in';
   var password = localStorage.getItem('password') || 'Not available';
   var email = localStorage.getItem('email') || 'Not available';
</script>
<template>
  <div>
    <h1>Welcome User</h1>
   <div>
    <p>Username : {{ username }} </p>
    <p>Password : {{ password }} </p>
    <p>Email : {{ email }}</p>
   </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
