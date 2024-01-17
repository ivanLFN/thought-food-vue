<template>
  <div class="app-container">
    <div class="container">
      <div class="mt-5">
        <a
          class="signup-header"
          href="#"
        >
          Food For Thought
        </a>
      </div>
    </div>
    <div class="container signup-el">
      <div class="row">
        <div class="offset-4 col-md-3 col-12">
          <SignUpForm />
        </div>
      </div>
    </div>
    <FooterComponent class="footer-component" />
  </div>
</template>

<script>
import SignUpForm from '@/components/account_components/SignUpForm.vue'
import FooterComponent from '@/components/FooterComponent.vue'
export default {
  name: 'SignUpPage',
  components: {
    SignUpForm,
    FooterComponent
  }
}
</script>

<style scoped>
.signup-header {
  font-size: 30px !important;
  font-weight: 700;
  color: #003046 !important;
  line-height: 38px;
  text-decoration: none;
}

.signup-el {
  margin-top: 20%;
}
</style>

<style src="../../public/styles.css"></style>
