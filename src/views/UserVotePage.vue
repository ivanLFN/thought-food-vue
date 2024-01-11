<template>
  <div class="app-container">
    <MainMenu class="main-menu" />
    <div class="container mt-5">
      <VoteComponent />
    </div>
    <FooterComponent class="footer-component" />
  </div>
</template>

<script>
import MainMenu from '../components/MainMenu.vue'
import FooterComponent from '../components/FooterComponent.vue'
import VoteComponent from '@/components/account_components/VoteComponent.vue'
export default {
  name: 'UserVotePage',
  components: {
    MainMenu,
    FooterComponent,
    VoteComponent
  }
}
</script>

<style scoped>
.app-container {
  background: url(../../public/images/Empty_State.png) no-repeat center center fixed;
}
</style>

<style src="../../public/styles.css"></style>
