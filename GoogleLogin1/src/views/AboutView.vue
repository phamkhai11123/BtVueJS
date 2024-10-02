<script>
    import {onMounted,ref} from 'vue'
    import {useRouter} from 'vue-router'
    
    export default {
    setup(){
        const user = ref(null);
        const router = useRouter();
        const token = ref();
        const getUserInfo = ()=>{
          const storedUser = localStorage.getItem('user');
          const accesstoken = localStorage.getItem('accesstoken')
            if(storedUser && accesstoken){
                user.value = JSON.parse(storedUser);
                token.value = accesstoken;
            }else{
                router.push('/');
            }
        }   
     
      onMounted(()=>{
        getUserInfo();
      })
    
      const  logout = ()=>{
        localStorage.clear();
        router.push('/login')
      }
      return {
        user,logout,token
      }
    }
    }
</script>



<template>
  
  <div>
    <h1>Welcome User</h1>
   
    <div v-if="user">
    <img :src="user.photoURL">
    <p>Fullname : {{ user.displayName }} </p>
    <p>Email : {{ user.email }} </p>
    <p>AccessToken: {{ token }}</p>
    <!-- <p>RefreshToken:{{ user.refreshToken }}</p> -->
    <p></p>
    <button @click="logout" class="btn btn-danger">Logout</button>
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
