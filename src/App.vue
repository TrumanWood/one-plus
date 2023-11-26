<script setup lang="ts">
  import HomeHeader from './components/HomeHeader.vue'
  import HomeSidebar from './components/HomeSidebar.vue'
  import 'boxicons';

</script>
<template>
  <div class="content">
    <HomeSidebar />
    <header>
      <HomeHeader />
    </header>
  </div>
</template>
<style scoped lang="stylus">
  .content
    line-height 1.5
    width calc(100% - 50px)
    margin-left 50px
</style>
