<template>
  <div id="app">
    <User-profile></User-profile>
    <router-view></router-view>
  </div>
</template>

<script>
import UserProfile from './view/user-profile/index.vue'

export default {
  name: 'App',
  components:{
    UserProfile
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  body {
    background-color: #f6f6f6;
  }
</style>
