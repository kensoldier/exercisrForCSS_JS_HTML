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
import axois from "axios";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      axois.get("pizza/member.json")
      .then((res)=>{
        // console.log(res)
        const data=res.data;
        const Members=[];
        for(let key in data){
          const member=data[key];
          Members.push(member)
          // console.log(Members)
        }
       let result= Members.filter((item)=>{
          return item.email===this.email && item.password === this.password;
        })
      if(result!=null && result.length>0){
        this.$router.push({name:"homeLink"})
      }else{
        alert("mistake")
        this.email="";
        this.password="";
      }


      });
    }
  }
};
</script>

<style>
</style>