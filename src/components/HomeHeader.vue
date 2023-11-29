<script setup lang="ts">
  import { ref } from 'vue'
  const searchValue = ref("");
  console.log(searchValue);
</script>
<template>
  <div class="header-content grid">
    <vs-row>
      <vs-col class="header-title">
        <p> do something </p>
      </vs-col>
    </vs-row>

    <vs-row class="header-search" justify="center">
      <vs-col :sm="3"/>
      <vs-col :sm="6">
        <vs-input class="header-search-input" style="width: 100%" v-model="searchValue" color="primary" input-style="shadow" type="search" placeholder="Search for what you want" >
          <template #icon>
            <i class='bx bx-search-alt-2'></i>
          </template>
        </vs-input>
      </vs-col>
      <vs-col :sm="3"/>
    </vs-row>

    <vs-row class="header-item">
      <vs-col v-for="_ in 6" :key="_" :sm="2">
        <i class="bx bx-home" />
        <p>{{ _ }}</p>
      </vs-col>
    </vs-row>
  </div>
</template>

<style scoped lang="stylus">
  .header-content
    padding 1rem 0 .2rem 0
    background #f4f9ff
    .vs-row
      margin .5rem 0
    .header-title > p
      text-align center
    .header-search  div
      width 100%
    .header-item {
      margin-top 2rem
      width 90%
      text-align center
    }
</style>
