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
  <div class="row mt-5">
    <div class="col-3">
      <img
        class="w-100"
        src="../../../public/images/RestaurantPic.png"
        alt="rest-image"
      >
    </div>
    <div class="col-9 restarant-info">
      <div class="restarant-name">
        Bob’s Burgers
      </div>
      <div class="restarant-address mt-3">
        971 Ossington Ave, Toronto, ON M6G 3V5, Canada
      </div>
      <div class="row mt-3">
        <div class="col-2">
          <a
            href="#"
            class="info-link"
          >
            <img src="../../../public/images/phone_1.png">
            000-123-4567
          </a>
        </div>
        <div class="col-2">
          <a
            href="#"
            class="info-link"
          >
            <img src="../../../public/images/globe.png">
            Website
          </a>
        </div>
      </div>
      <div class="about-restarant mt-4">
        <ul
          id="myTab"
          class="nav nav-tabs tabs-custom"
          role="tablist"
        >
          <li
            class="nav-item"
            role="presentation"
          >
            <button
              id="About-tab"
              class="nav-link active nav-custom"
              data-bs-toggle="tab"
              data-bs-target="#About"
              type="button"
              role="tab"
              aria-controls="About"
              aria-selected="true"
            >
              About
            </button>
          </li>
          <li
            class="nav-item"
            role="presentation"
          >
            <button
              id="Updates-tab"
              class="nav-link nav-custom"
              data-bs-toggle="tab"
              data-bs-target="#Updates"
              type="button"
              role="tab"
              aria-controls="Updates"
              aria-selected="false"
            >
              Updates
            </button>
          </li>
        </ul>
        <div
          id="myTabContent"
          class="tab-content"
        >
          <div
            id="About"
            class="tab-pane tab-text fade show active"
            role="tabpanel"
            aria-labelledby="About-tab"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
          </div>
          <div
            id="Updates"
            class="tab-pane tab-text fade"
            role="tabpanel"
            aria-labelledby="Updates-tab"
          >
            ...
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RestarantDescription'
}
</script>

<style scoped>
.navigation-link {
  color: #003046;
  font-weight: 600;
  text-decoration: none;
  font-size: 17px;
}

.restarant-name {
  font-size: 32px;
  font-weight: 500;
  color: #003046;
}

.restarant-info {
  padding-left: 30px;
}

.restarant-address {
  font-size: 17px;
  color: #003046;
}

.info-link {
  color: #003046;
  text-decoration: none;
}

.nav-link.active {
  border-bottom: 3px solid #003046 !important;
  border-radius: 0 !important;
}

.nav-custom {
  font-size: 17px;
  color: #003046;
  font-weight: 500;
}

.tab-content {
  margin-top: 2rem !important;
}

.tab-text {
  color: #003046;
}
</style>
