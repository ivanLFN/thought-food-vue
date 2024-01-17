<template>
  <div class="signup-form">
    <div class="d-flex justify-content-center my-4">
      <div class="header-signup">
        Sign Up
      </div>
    </div>
    <form @submit.prevent="signIn">
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
      <div>
        <div class="text">
          Repeat password:
        </div>
        <input
          id="repeatPassword"
          v-model="repeatPassword"
          class="text-input w-100"
          type="password"
          name="repeatPassword"
        >
      </div>
      <div>
        <div class="text mt-4 mb-3">
          What is your role:
        </div>
        <div class="form-check mb-2">
          <input
            id="flexRadioDefault2"
            v-model="role"
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            checked
            value="parent"
          >
          <label
            class="form-check-label"
            for="flexRadioDefault2"
          >
            Parent
          </label>
        </div>
        <div class="form-check mb-2">
          <input
            id="flexRadioDefault1"
            v-model="role"
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            value="restaurant"
          >
          <label
            class="form-check-label"
            for="flexRadioDefault1"
          >
            Restaurant
          </label>
        </div>
        <div class="form-check">
          <input
            id="flexRadioDefault3"
            v-model="role"
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            value="school"
          >
          <label
            class="form-check-label"
            for="flexRadioDefault3"
          >
            School
          </label>
        </div>
      </div>
      <div>
        <div class="form-check mt-4">
          <input
            id="defaultCheck1"
            class="form-check-input"
            type="checkbox"
            value=""
          >
          <label
            class="form-check-label"
            for="defaultCheck1"
          >
            I agree to the terms of use
          </label>
        </div>
      </div>
      <div class="d-flex justify-content-end">
        <button
          class="orange-link mt-4"
          type="submit"
        >
          Sign In
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SignUpForm',
  data () {
    return {
      email: '',
      password: '',
      repeatPassword: '',
      role: 'parent'
    }
  },
  methods: {
    signIn () {
      console.log('Signing in...', { email: this.email, password: this.password, role: this.role })
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

.header-signup {
  color: #003046;
  font-weight: 400;
  font-size: 1.8rem;
}

.text {
  font-size: 1.1rem;
}

</style>
