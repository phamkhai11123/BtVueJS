<script>
    import {onMounted,ref} from 'vue'
    import {useRouter} from 'vue-router'
    
    export default {
    setup(){
        var  username = localStorage.getItem('username') ;
    var email = localStorage.getItem('email') ;
        const user = ref(null);
        const router = useRouter();
        const getUserInfo = ()=>{
              
          const storedUser = localStorage.getItem('user');

            if(storedUser){
                user.value = JSON.parse(storedUser);
            }else{
                router.push('/');
            }
        }   
     
      onMounted(()=>{
      if(username==null && email== null){
        getUserInfo();
      }else{
        return
      }
      })
    
      const  logout = ()=>{
        localStorage.clear();
        router.push('/')
      }
     const logout2 = ()=>{
        localStorage.clear();
        router.push('/')
      }
      return {
        user,logout,logout2,username,email
      }
    }
    }
</script>



<template>
  <!-- <div>
    <h1>Welcome User</h1>
   <div>
    <p>Username : {{ username }} </p>
    <p>Email : {{ email }}</p>
    <button @click="logout">Logout</button>
   </div>
  </div> -->

  
  <div>
    <h1>Welcome User</h1>
   
    <div v-if="user">
    <img :src="user.picture">
    <p>Fullname : {{ user.name }} </p>
    <p>Email : {{ user.email }} </p>
    <button @click="logout" class="btn btn-danger">Logout</button>
   </div>

   <div v-else>
    <p>Username : {{ username }} </p>
    <p>Email : {{ email }}</p>
    <button @click="logout2" class="btn btn-warning">Logout</button>
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
