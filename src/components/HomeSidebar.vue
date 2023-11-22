<script setup  lang="ts">
  import { ref } from 'vue'

  const active = ref('home')
  const activeSidebar = ref(false)
</script>
<template>
  <div class="hidden">
    <vs-navbar v-model="active" shadow shape="square" center-collapsed>
      <template #left>
        <vs-button type="flat" icon @click="activeSidebar = !activeSidebar">
          <i class="bx bx-menu"/>
        </vs-button>
      </template>
      <vs-navbar-item id="guide" :active="active == 'guide'">
        Guide
      </vs-navbar-item>
      <vs-navbar-item id="docs" :active="active == 'docs'">
        Documents
      </vs-navbar-item>
      <vs-navbar-item id="components" :active="active == 'components'">
        Components
      </vs-navbar-item>
      <vs-navbar-item id="license" :active="active == 'license'">
        license
      </vs-navbar-item>
      <template #right>
        <vs-button type="flat">Login</vs-button>
        <vs-button>Get Started</vs-button>
      </template>
    </vs-navbar>
    <vs-sidebar v-model="active" v-model:open="activeSidebar" absolute>
      <template #logo>
        <box-icon name='wink-tongue' color='#195bff'></box-icon>
        one-plus
      </template>
      <template #header/>
      <vs-sidebar-item id="home">
        <template #icon>
          <i class="bx bx-home"/>
        </template>
        Home
      </vs-sidebar-item>
      <vs-sidebar-item id="market">
        <template #icon>
          <i class="bx bx-grid-alt"/>
        </template>
        Market Overview
      </vs-sidebar-item>
      <vs-sidebar-item id="Music">
        <template #icon>
          <i class="bx bxs-music"/>
        </template>
        Music
      </vs-sidebar-item>
      <vs-sidebar-group>
        <template #header>
          <vs-sidebar-item arrow>
            <template #icon>
              <i class="bx bx-group"/>
            </template>
            Social media
          </vs-sidebar-item>
        </template>

        <vs-sidebar-item id="Instagram">
          <template #icon>
            <i class="bx bxl-instagram"/>
          </template>
          Instagram
        </vs-sidebar-item>
        <vs-sidebar-item id="twitter">
          <template #icon>
            <i class="bx bxl-twitter"/>
          </template>
          Twitter
        </vs-sidebar-item>
        <vs-sidebar-item id="Facebook">
          <template #icon>
            <i class="bx bxl-facebook"/>
          </template>
          Facebook
        </vs-sidebar-item>
      </vs-sidebar-group>
      <vs-sidebar-group>
        <template #header>
          <vs-sidebar-item arrow>
            <template #icon>
              <i class="bx bx-code-alt"/>
            </template>
            Coding
          </vs-sidebar-item>
        </template>

        <vs-sidebar-item id="github">
          <template #icon>
            <i class="bx bxl-github"/>
          </template>
          Github
        </vs-sidebar-item>
        <vs-sidebar-item id="codepen">
          <template #icon>
            <i class="bx bxl-codepen"/>
          </template>
          Codepen
        </vs-sidebar-item>
        <vs-sidebar-item id="discord">
          <template #icon>
            <i class="bx bxl-discord"/>
          </template>
          Discord
        </vs-sidebar-item>
        <vs-sidebar-item id="Javascript">
          <template #icon>
            <i class="bx bxl-javascript"/>
          </template>
          Javascript
        </vs-sidebar-item>
        <vs-sidebar-item id="git">
          <template #icon>
            <i class="bx bxl-git"/>
          </template>
          Git
        </vs-sidebar-item>
      </vs-sidebar-group>
      <vs-sidebar-item id="donate">
        <template #icon>
          <i class="bx bxs-donate-heart"/>
        </template>
        Donate
      </vs-sidebar-item>
      <vs-sidebar-item id="drink">
        <template #icon>
          <i class="bx bx-drink"/>
        </template>
        Drink
      </vs-sidebar-item>
      <vs-sidebar-item id="shopping">
        <template #icon>
          <i class="bx bxs-shopping-bags"/>
        </template>
        Shopping
      </vs-sidebar-item>
      <vs-sidebar-item id="chat">
        <template #icon>
          <i class="bx bx-chat"/>
        </template>
        Chat
      </vs-sidebar-item>
      <template #footer>
        <vs-row justify="space-between">
          <vs-avatar>
            <img src="/src/assets/avatar-5.png" alt=""/>
          </vs-avatar>

          <vs-avatar badge-color="danger" badge-position="top-right">
            <i class="bx bx-bell"/>

            <template #badge> 28</template>
          </vs-avatar>
        </vs-row>
      </template>
    </vs-sidebar>
  </div>
</template>

<style scoped lang="stylus">

</style>