<template>
  <div class="curved">
    <div class="curved upper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 319">
        <path
          fill="#f09a00"
          fill-opacity="1"
          d="M0,64L80,85.3C160,107,320,149,480,144C640,139,800,85,960,80C1120,75,1280,117,1360,138.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
        </path>
      </svg>
    </div>
    <div class="header-tab">
      Why Food For Thought?
    </div>
    <div class="container-lg">
      <nav class="tabs">
        <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
          <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Schools & Organizations</button>
          <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Restaurants & Caterers</button>
          <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Parents & Guardians</button>
        </div>
      </nav>
      <div class="tab-content contain" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
          <div class="row d-flex">
            <div class="col-lg-5 col-12" style="background-color: aqua;">
              <img class="image-school" src="/images/home-schools.jpg" alt="home-schools">
            </div>
            <div class="col-lg-7 col-12" style="background-color: aquamarine;">
              sdfd
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
        <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
      </div>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 319">
      <path
        fill="#fff"
        fill-opacity="1"
        d="M0,64L80,85.3C160,107,320,149,480,144C640,139,800,85,960,80C1120,75,1280,117,1360,138.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
      </path>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'MainMenu',
  data() {
    return {
      is_authorize: false
    }
  },
};
</script>

<style>
.header-tab {
  color: #003046;
  font-size: 33px !important;
  font-weight: 700;
  line-height: 38px;
}
body {
  align-items: center;
  overflow-x: hidden;
}

.curved {
  background: #f09a00;
  color: white;
  text-align: center;
}

.curved.upper {
  background: white;
}

.nav-link {
  border: none !important;
  border-radius: 15px;
}

.tabs {
  margin-top: 70px;
}

.nav {
  border: none !important;
}

.image-school {
  width: 25rem !important;
  height: auto;
  border-radius: 40px 150px 40px 150px;
}

.tab-content {
  margin-top: 5rem !important;
}

</style>
