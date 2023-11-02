<template>
  <MainMenu class="main-menu" />
  <FooterComponent class="footer-component" />
</template>

<script>
import MainMenu from './MainMenu.vue'
import FooterComponent from './FooterComponent.vue'

export default {
  components: {
    MainMenu,
    FooterComponent
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
  overflow: hidden;
}
</style>