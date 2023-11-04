<template>
  <MainMenu class="main-menu" />
  <MainScreen />
  <FooterComponent class="footer-component" />
</template>

<script>
import MainMenu from './MainMenu.vue'
import FooterComponent from './FooterComponent.vue'
import MainScreen from './MainScreen.vue'

export default {
  components: {
    MainMenu,
    FooterComponent,
    MainScreen
  }
}

</script>

<style>
.main-menu {
  max-width: 100%;
  overflow: hidden;
}

.footer-component {
  max-width: 100%;
  overflow-x: hidden;
}
</style>