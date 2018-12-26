<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <table class="table">
        <thead class="thead-default">
          <tr>
            <th>尺寸</th>
            <th>價格</th>
            <th>加入</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenu" :key="item.name">
          <tr>
            <td>
              <strong>{{item.name}}</strong>
            </td>
          </tr>
          <tr v-for="option in item.option" :key="option.size">
            <td>{{option.size}}</td>
            <td>{{option.price}}$</td>
            <td>
              <button class="btn btn-sm btn-outline" @click="addToBacket(item,option)">+</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-sm-12 col-md-4">
      <div v-if="basket.length>0">
        <table class="table">
          <thead class="thead-default">
            <tr>
              <th>數量</th>
              <th>種類</th>
              <th>價格</th>
            </tr>
          </thead>
          <tbody v-for="item in basket" :key="item.name">
            <tr>
              <td>
                <button @click="decreaseQual(item)" class="btn btn-sm">-</button>
                <span>{{item.quantity}}</span>
                <button @click="increaseQual(item)" class="btn btn-sm">+</button>
              </td>
              <td>{{item.name}}{{item.size}}</td>
              <td>{{item.price*item.quantity}}</td>
            </tr>
          </tbody>
        </table>
        <P>總價:{{total +"$"}}</P>
        <button class="btn btn-success btn-block">提交</button>
      </div>
      <div v-else>{{basketText}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      basket: [],
      basketText: "購物車為空",
      getMenu: {
        1: {
          name: "榴槤 PIZZA",
          description: "tast good",
          option: [{ size: 9, price: 38 }, { size: 12, price: 48 }]
        },
        2: {
          name: "海鮮 PIZZA",
          description: "tast very good",
          option: [{ size: 9, price: 48 }, { size: 12, price: 58 }]
        },
        3: {
          name: "Cheese PIZZA",
          description: "tast good",
          option: [{ size: 9, price: 35 }, { size: 12, price: 45 }]
        }
      }
    };
  },
  computed:{
      total(){
          let totalCost = 0;
            for(let index in this.basket){
                totalCost += this.basket[index].quantity*this.basket[index].price
            }
        return totalCost;
      }
  },
  methods: {
    addToBacket(item, option) {
        let basket={
        name: item.name,
        size: option.size,
        price: option.price,
        quantity: 1
      }
      if(this.basket.length>0){
            let result = this.basket.filter((item)=>{
                return item.name ===basket.name && item.price ===basket.price;
            })
            if(result!=null && result.length>0){
                console.log(result)
                result[0].quantity ++ ;//filter返回的就是] this.basket=符合條件的那一項  所以可以直接更改
            }else{
                 this.basket.push(basket);
            }
      }else{
          this.basket.push(basket);
      }
    },
    decreaseQual(item) {
        item.quantity>1? item.quantity-- : this.basket.splice(this.basket.indexOf(item),1);       
    },
    increaseQual(item) {
        item.quantity++
    }
  }
};
</script>

<style>
</style>