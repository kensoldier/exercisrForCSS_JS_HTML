<template>
  <div>
    <div class="row mb-5">
      <div class="col-4">
        <router-link tag="li" class="nav-link" :to="{name:'historyLink'}">
          <a class="list-group-item list-group-item-action">歷史訂單</a>
        </router-link>
        <router-link tag="li" class="nav-link" :to="{name:'contactLink'}">
          <a class="list-group-item list-group-item-action">聯繫我們</a>
        </router-link>
        <router-link tag="li" class="nav-link" :to="{name:'orderingLink'}">
          <a class="list-group-item list-group-item-action">點餐資訊</a>
        </router-link>
        <router-link tag="li" class="nav-link" :to="{name:'deliveryLink'}">
          <a class="list-group-item list-group-item-action">送餐資訊</a>
        </router-link>
      </div>
      <div class="col-8">
          <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
