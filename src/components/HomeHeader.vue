<script setup lang="ts">
  import { ref } from 'vue'
  const searchValue = ref("");
  console.log(searchValue);
</script>
<template>
  <div class="header-content">
    <vs-row>
      <vs-input v-model="searchValue" color="primary" type="search" placeholder="Search for what you want" >
        <template #icon>
          <i class='bx bx-search-alt-2'></i>
        </template>
      </vs-input>
    </vs-row>
  </div>
</template>

<style scoped lang="stylus">
  .header-content,
  .header-content > vs-row >*
    width 500px
</style>
