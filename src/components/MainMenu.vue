<template>
  <div class="row">
    <div class="col-lg-10 offset-lg-1">
      <nav
        class="main-menu navbar navbar-expand-lg navbar-light bg-light"
        style="background-color: white !important;"
      >
        <div class="container-fluid">
          <a
            class="navbar-brand main-header col-lg-3 d-flex justify-content-center align-items-center"
            href="#"
          >Food For Thought</a>
          <button
            class="navbar-toggler col-12"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Переключатель навигации"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div
            id="navbarSupportedContent"
            class="collapse navbar-collapse col-lg-9"
          >
            <div class="container-fluid row">
              <div class="col-lg-8 menu-links">
                <ul class="navbar-nav me-auto d-flex justify-content-center align-items-center">
                  <li class="nav-item">
                    <a
                      class="nav-link stratos-bold"
                      href="#"
                    >Home</a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="#"
                    >About Us</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      id="navbarDropdown"
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Services
                    </a>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a
                          class="dropdown-item"
                          href="#"
                        >Действие</a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="#"
                        >Другое действие</a>
                      </li>
                      <li><hr class="dropdown-divider"></li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="#"
                        >Что-то еще здесь</a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      id="navbarDropdown"
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Restaurants
                    </a>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a
                          class="dropdown-item"
                          href="#"
                        >Действие</a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="#"
                        >Другое действие</a>
                      </li>
                      <li><hr class="dropdown-divider"></li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="#"
                        >Что-то еще здесь</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="col-lg-4 d-flex justify-content-center align-items-center">
                <div v-if="is_authorize">
                  <li class="nav-item dropdown">
                    <a
                      id="navbarDropdown"
                      class="nav-account-link nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span>{{ user_name }}</span>
                    </a>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a
                          class="dropdown-item"
                          href="#"
                        >Действие</a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="#"
                        >Другое действие</a>
                      </li>
                      <li><hr class="dropdown-divider"></li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="#"
                        >Что-то еще здесь</a>
                      </li>
                    </ul>
                  </li>
                </div>
                <div v-else>
                  <a
                    href="#"
                    class="login-link"
                    @click="login"
                  >Log In</a>
                  <a
                    href="#"
                    class="signup-link"
                  >Sign up</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainMenu',
  data () {
    return {
      is_authorize: false,
      user: {
        user_name: ''
      }
    }
  },
  methods: {
    login () {
      this.is_authorize = true
      this.user_name = 'Hi,' + 'Sarah'
    }
  }
}
</script>

<style>
.main-header {
  font-size: 30px !important;
  font-weight: 700;
  color: #003046 !important;
  line-height: 38px;
}
.main-menu {
  padding-top: 20px !important;
  padding-bottom: 20px !important;
}
.nav-link {
  font-size: 20px !important;
  color: #003046 !important;
  margin-left: 35px;
}
.login-link {
  font-size: 18px;
  color: #003046 !important;
  margin-right: 25px;
}
.signup-link {
  font-size: 18px;
  background-color: #EE7E00;
  color: white;
  text-decoration: none;
  padding: 10px 45px;
  border-radius: 20px;
}

.nav-item.dropdown {
  list-style: none !important;
}
.nav-account-link {
  color: #003046 !important;
  padding: 4px 25px !important;
  border-radius: 20px;
  border: 1px solid #003046 !important;
}

.dropdown-menu {
  border: none !important;
  color: #003046 !important;
}
</style>
