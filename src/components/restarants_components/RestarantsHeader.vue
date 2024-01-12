<template>
  <div class="row">
    <a
      href="#"
      class="navigation-link"
    >
      <img src="../../../public/images/Arrow_Left_2.png">
      Back
    </a>
  </div>
  <div class="row d-flex search-restarants  mt-4">
    <div class="col-1 d-flex justify-content-center">
      <img
        src="../../../public/images/search.png"
        alt="search"
      >
    </div>
    <div class="col-10">
      <input
        id="search"
        placeholder="Search for restaurants to vote"
        class="serarch-input w-100"
        type="text"
      >
    </div>
    <div class="col-1">
      <div class="dropdown custom-dropdown">
        <a
          id="dropdownMenuLink"
          class="dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Sort
        </a>

        <ul
          class="dropdown-menu"
          aria-labelledby="dropdownMenuLink"
        >
          <li>
            <a
              class="dropdown-item"
              href="#"
            >Action</a>
          </li>
          <li>
            <a
              class="dropdown-item"
              href="#"
            >Another action</a>
          </li>
          <li>
            <a
              class="dropdown-item"
              href="#"
            >Something else here</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RestarantsHeader'
}
</script>

<style>
.navigation-link {
  color: #003046;
  font-weight: 600;
  text-decoration: none;
  font-size: 17px;
}

.serarch-input {
  border: none;
  background-color: #F4F4F4;
  font-size: 17px;
  font-weight: 350;
  color: #003046;
}

.search-input:focus {
    outline: none !important;
    box-shadow: none !important;
    border: none !important;
}

.search-restarants {
  background-color: #F4F4F4;
  border-radius: 15px;
  padding: 15px 15px;
}

.custom-dropdown {
  background-color: #F4F4F4;
  font-size: 17px;
  font-weight: 350;
}

.custom-dropdown .dropdown-toggle {
  color: #003046;
}
</style>
