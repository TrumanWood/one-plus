<script setup lang="ts">
  import HomeHeader from './components/HomeHeader.vue'
  import HomeSidebar from './components/HomeSidebar.vue'
  import 'boxicons';

</script>
<template>
  <div>
    <HomeSidebar />
    <header>
      <HomeHeader />
    </header>
  </div>
</template>
<style scoped lang="stylus">
  header
    line-height 1.5
    max-width 100vw
</style>
