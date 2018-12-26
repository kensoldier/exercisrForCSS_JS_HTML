<template>
  <div class="row mt-3">
    <div class="col-md-12 col-lg-12">
      <div class="card">
        <div class="card-body">
          <img src="../../public/img/images.png" alt class="mx-auto d-block">
          <form @submit.prevent="onSubmit">
            <div class="form-group">
              <label for="email">E-mail</label>
              <input type="email" class="form-control" v-model="email">
            </div>
            <div class="form-group">
              <label for="password">PassWord</label>
              <input type="password" class="form-control" v-model="password">
            </div>
            <div class="form-group">
              <label for="confirm-password">Check PassWord</label>
              <input type="password" class="form-control" v-model="confirmPassword">
            </div>
            <button class="btn btn-block btn-success" type="submit">註冊</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axiox from 'axios'
export default {
    data(){
        return{
            email:"",
            password:"",
            confirmPassword:""
        }
    },
    methods:{
        onSubmit(){
            // console.log(1)
            if(this.password===this.confirmPassword){
                const formData={
                    email:this.email,
                    password:this.password,
                    confirmPassword:this.confirmPassword
                }
                axiox.post('pizza/member.json',formData)
                .then(res=>{
                    // console.log(res);
                    this.$router.push({name:'loginLink'})
                })
            }else{
                alert('密碼不一致')
            }
        }
    }
};
</script>

<style>
</style>