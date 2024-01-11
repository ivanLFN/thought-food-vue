<template>
  <div class="app-container">
    <MainMenu class="main-menu" />
    <div class="container mt-5">
      <AccountTabs />
    </div>
    <FooterComponent class="footer-component" />
  </div>
</template>

<script>
import MainMenu from '../components/MainMenu.vue'
import FooterComponent from '../components/FooterComponent.vue'
import AccountTabs from '../components/account_components/AccountTabs.vue'
export default {
  name: 'AccountPage',
  components: {
    MainMenu,
    FooterComponent,
    AccountTabs
  }
}
</script>

<style>
</style>

<style src="../../public/styles.css"></style>
