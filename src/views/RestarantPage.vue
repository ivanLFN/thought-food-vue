<template>
  <div class="app-container">
    <MainMenu class="main-menu" />
    <div class="container mt-5">
      <RestarantDescription />
      <VotingComponent />
    </div>
    <FooterComponent class="footer-component" />
  </div>
</template>

<script>
import MainMenu from '@/components/MainMenu.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import RestarantDescription from '../components/restarants_components/RestarantDescription.vue'
import VotingComponent from '../components/restarants_components/VotingComponent.vue'

export default {
  name: 'RestarantsPage',
  components: {
    MainMenu,
    FooterComponent,
    RestarantDescription,
    VotingComponent
  }
}
</script>

<style>
</style>

<style src="../../public/styles.css"></style>
