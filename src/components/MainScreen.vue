<template>
  <div class="curved">
    <div class="curved upper">
      <br>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 200"
      >
        <path
          fill="#f09a00"
          fill-opacity="1"
          d="M0,64L80,85.3C160,107,320,149,480,144C640,139,800,85,960,80C1120,75,1280,117,1360,138.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        />
      </svg>
    </div>
    <div class="header-tab">
      Why Food For Thought?
    </div>
    <div class="container-lg">
      <nav class="tabs">
        <div
          id="nav-tab"
          class="nav nav-tabs justify-content-center"
          role="tablist"
        >
          <button
            id="nav-home-tab"
            class="nav-link active"
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            Schools & Organizations
          </button>
          <button
            id="nav-profile-tab"
            class="nav-link"
            data-bs-toggle="tab"
            data-bs-target="#nav-profile"
            type="button"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            Restaurants & Caterers
          </button>
          <button
            id="nav-contact-tab"
            class="nav-link"
            data-bs-toggle="tab"
            data-bs-target="#nav-contact"
            type="button"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
          >
            Parents & Guardians
          </button>
        </div>
      </nav>
      <div
        id="nav-tabContent"
        class="tab-content contain"
      >
        <div
          id="nav-home"
          class="tab-pane fade show active"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          <div class="row d-flex">
            <div class="col-lg-5 col-12">
              <img
                class="image-school"
                src="/images/home-schools.jpg"
                alt="home-schools"
              >
            </div>
            <div class="col-lg-7 col-12 text-start">
              <div class="header-browser">
                Schools & Organizations
              </div>
              <div class="text-borwser">
                Concentrate on what you do best. Leave all the administrative tasks related to organizing student lunches to us. Food For Thought does everything from procuring restaurants and caterers and checking all their meals to ensure compliance with Ontario Policy/Program Memorandum 150 guidelines, to collecting payment from parents. Finally, an all-in-one solution!
              </div>
              <div class="learn-more-borwser">
                <a
                  class="learn-more"
                  href="#"
                >Learn More</a>
              </div>
            </div>
          </div>
        </div>
        <div
          id="nav-profile"
          class="tab-pane fade"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        >
          <div class="row d-flex">
            <div class="col-lg-5 col-12">
              <img
                class="image-school"
                src="/images/home-providers.jpg"
                alt="home-providers"
              >
            </div>
            <div class="col-lg-7 col-12 text-start">
              <div class="header-browser">
                Restaurants & Caterers
              </div>
              <div class="text-borwser">
                Want to expand your lunch time customer base, and increase income? Can you make a smaller portion of meals for children? If so, we want you! Get free marketing when hundreds of parents/guardians and staff browse through our website to look for healthy meals for their children.
              </div>
              <div class="learn-more-borwser">
                <a
                  class="learn-more"
                  href="#"
                >Learn More</a>
              </div>
            </div>
          </div>
        </div>
        <div
          id="nav-contact"
          class="tab-pane fade"
          role="tabpanel"
          aria-labelledby="nav-contact-tab"
        >
          <div class="row d-flex">
            <div class="col-lg-5 col-12">
              <img
                class="image-school"
                src="/images/home-parents.jpg"
                alt="home-parents"
              >
            </div>
            <div class="col-lg-7 col-12 text-start">
              <div class="header-browser">
                Parents & Guardians
              </div>
              <div class="text-borwser">
                There's a lot more out there than what your organization is serving! Have a say in what your organization chooses for lunch. With Food For Thought, pick and choose the days you want your child to participate instead of locking in for the whole term.
              </div>
              <div class="learn-more-borwser">
                <a
                  class="learn-more"
                  href="#"
                >Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 319"
    >
      <path
        fill="#fff"
        fill-opacity="1"
        d="M0,64L80,85.3C160,107,320,149,480,144C640,139,800,85,960,80C1120,75,1280,117,1360,138.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'MainMenu',
  data () {
    return {
      is_authorize: false
    }
  }
}
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
  background-image: url("../../public/images/home-hero.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  line-height: 300px;
  font-size: 0;
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

.header-browser {
  font-size: 1.9rem;
  color: #003046;
  font-weight: 800 !important;
}

.text-borwser {
  margin-top: 5rem;
  color: #003046;
}

.learn-more-borwser {
  margin-top: 5rem;
}

.learn-more {
  color: #003046 !important;
  font-weight: 600;
}
</style>
