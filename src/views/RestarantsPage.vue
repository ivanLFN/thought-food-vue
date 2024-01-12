<template>
  <div class="app-container">
    <MainMenu class="main-menu" />
    <div class="container mt-5">
      <RestarantsHeader />
      <!-- <RestarantsList /> -->
    </div>
    <FooterComponent class="footer-component" />
  </div>
</template>

<script>
import MainMenu from '@/components/MainMenu.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import RestarantsHeader from '../components/restarants_components/RestarantsHeader.vue'
// import RestarantsList from '../components/restarants_components/RestarantsList.vue'

export default {
  name: 'RestarantsPage',
  components: {
    MainMenu,
    FooterComponent,
    RestarantsHeader
    // RestarantsList
  }
}
</script>

<style>
</style>

<style src="../../public/styles.css"></style>
