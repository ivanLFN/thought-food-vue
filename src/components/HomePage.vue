<template>
  <div class="app-container">
    <MainMenu class="main-menu" />
    <MainScreen />
    <FooterComponent class="footer-component" />
  </div>
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
}

.footer-component {
  max-width: 100%;
  overflow-x: hidden;
}

</style>

<style src="../../public/styles.css"></style>
