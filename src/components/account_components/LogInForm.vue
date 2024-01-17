<template>
  <div class="login-form">
    <div class="d-flex justify-content-center my-4">
      <div class="header-login">
        Log In
      </div>
    </div>
    <form @submit.prevent="logIn">
      <div class="mb-4">
        <div class="text">
          Email:
        </div>
        <input
          id="email"
          v-model="email"
          class="text-input w-100"
          type="email"
          name="email"
        >
      </div>
      <div class="mb-4">
        <div class="text">
          Password:
        </div>
        <input
          id="password"
          v-model="password"
          class="text-input w-100"
          type="password"
          name="password"
        >
      </div>
      <div class="d-flex justify-content-end">
        <button
          class="orange-link mt-4"
          type="submit"
        >
          Log In
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LogInForm',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    logIn () {
      console.log('Login...', { email: this.email, password: this.password })
    }
  }
}
</script>

<style scoped>
.text-input {
  color: #003046;
  font-weight: 400;
  font-size: 1.1rem;
  padding: 8px;
}

.orange-link {
  font-size: 18px;
  background-color: #EE7E00;
  color: white;
  text-decoration: none;
  padding: 5px 50px;
  border-radius: 20px;
  border: 1px solid #EE7E00 !important;
  line-height: 22px;
}

.form-check-input {
  width: 22px;
  height: 22px;
  margin-right: 7px;
  color: #003046 !important;
  font-weight: 400;
  font-size: 1.2rem;
  padding: 8px;
}

.form-check-label {
  color: #003046 !important;
  font-weight: 400;
  font-size: 1.1rem;
}

.form-check-input:checked {
  background-color: #003046;
  color: #fff;
}

.header-login {
  color: #003046;
  font-weight: 400;
  font-size: 1.8rem;
}

.text {
  font-size: 1.1rem;
}

</style>
