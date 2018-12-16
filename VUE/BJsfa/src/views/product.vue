<template>
    <div class="product">
        <p>i am product{{id}}</p>
        <input type="text" name="" id="" v-model="msg">
        {{msg}}
 
    </div>    
</template>

<script>
export default {
    name:'product',
    data(){
        return{
            msg:'sfdf',
         
        }
    },
    props:["id"]
}

</script>
<style>

</style>