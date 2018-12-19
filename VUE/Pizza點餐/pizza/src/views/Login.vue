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
    
            <button class="btn btn-block btn-success" type="submit">登入</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            email:"",
            password:"",
          
        }
    },
    methods:{
        onSubmit(){}
    }
};
</script>

<style>
</style>