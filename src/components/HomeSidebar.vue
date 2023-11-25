<script setup  lang="ts">
  import { ref } from 'vue'

  const active = ref('home')
  const activeSidebar = ref(false)
</script>
<template>
  <div class="hidden">
    <vs-sidebar v-model="active" hover-expand absolute reduce open>
      <template #logo>
        <vs-avatar shape="circle">
          <img src="/favicon.ico" alt="" />
        </vs-avatar>
      </template>
      <template #header />
      <vs-sidebar-item id="home">
        <template #icon>
          <i class="bx bx-home" />
        </template>
        Home
      </vs-sidebar-item>
      <vs-sidebar-item id="market">
        <template #icon>
          <i class="bx bx-grid-alt" />
        </template>
        Market Overview
      </vs-sidebar-item>
      <vs-sidebar-item id="Music">
        <template #icon>
          <i class="bx bxs-music" />
        </template>
        Music
      </vs-sidebar-item>
      <vs-sidebar-group>
        <template #header>
          <vs-sidebar-item arrow>
            <template #icon>
              <i class="bx bx-group" />
            </template>
            Social media
          </vs-sidebar-item>
        </template>

        <vs-sidebar-item id="Instagram">
          <template #icon>
            <i class="bx bxl-instagram" />
          </template>
          Instagram
        </vs-sidebar-item>
        <vs-sidebar-item id="twitter">
          <template #icon>
            <i class="bx bxl-twitter" />
          </template>
          Twitter
        </vs-sidebar-item>
        <vs-sidebar-item id="Facebook">
          <template #icon>
            <i class="bx bxl-facebook" />
          </template>
          Facebook
        </vs-sidebar-item>
      </vs-sidebar-group>
      <vs-sidebar-group>
        <template #header>
          <vs-sidebar-item arrow>
            <template #icon>
              <i class="bx bx-code-alt" />
            </template>
            Coding
          </vs-sidebar-item>
        </template>

        <vs-sidebar-item id="github">
          <template #icon>
            <i class="bx bxl-github" />
          </template>
          Github
        </vs-sidebar-item>
        <vs-sidebar-item id="codepen">
          <template #icon>
            <i class="bx bxl-codepen" />
          </template>
          Codepen
        </vs-sidebar-item>
        <vs-sidebar-item id="discord">
          <template #icon>
            <i class="bx bxl-discord" />
          </template>
          Discord
        </vs-sidebar-item>
        <vs-sidebar-item id="Javascript">
          <template #icon>
            <i class="bx bxl-javascript" />
          </template>
          Javascript
        </vs-sidebar-item>
        <vs-sidebar-item id="git">
          <template #icon>
            <i class="bx bxl-git" />
          </template>
          Git
        </vs-sidebar-item>
      </vs-sidebar-group>
      <vs-sidebar-item id="donate">
        <template #icon>
          <i class="bx bxs-donate-heart" />
        </template>
        Donate
      </vs-sidebar-item>
      <vs-sidebar-item id="drink">
        <template #icon>
          <i class="bx bx-drink" />
        </template>
        Drink
      </vs-sidebar-item>
      <vs-sidebar-item id="shopping">
        <template #icon>
          <i class="bx bxs-shopping-bags" />
        </template>
        Shopping
      </vs-sidebar-item>
      <vs-sidebar-item id="chat">
        <template #icon>
          <i class="bx bx-chat" />
        </template>
        Chat
      </vs-sidebar-item>
      <template #footer>
        <vs-row justify="space-between">
          <vs-avatar badge-color="danger" badge-position="top-right">
            <i class="bx bx-bell" />

            <template #badge> 28 </template>
          </vs-avatar>

          <vs-avatar shape="circle" size="40">
            <img src="/src/assets/avatar-5.png" alt="" />
          </vs-avatar>
        </vs-row>
      </template>
    </vs-sidebar>
  </div>
</template>

<style scoped lang="stylus">

</style>