<template>
  <div class="row mt-5 menu">
    <div class="col">
      Menu Options
    </div>
    <div class="col">
      <div class="d-flex justify-content-end">
        <span class="sort">Sort:</span>
        <div class="dropdown custom-dropdown">
          <a
            id="dropdownMenuLink"
            class="dropdown-toggle menu"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Most popular
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
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="row d-flex mt-3">
    <div class="col-4">
      <img
        class="w-100 mb-3"
        src="../../../public/images/dish.png"
        alt="restarant-dish"
      >
      <span class="menu">Angus Burger</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RestarantMenu'
}
</script>

<style scoped>

.menu {
  font-weight: 550;
  font-size: 17px;
  color: #003046;
  text-decoration: none;
}

.custom-dropdown {
  background-color: white;
}

.sort {
  margin-right: 3px;
  font-weight: 250;
}
</style>
