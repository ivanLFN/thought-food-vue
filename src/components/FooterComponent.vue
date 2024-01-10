<template>
  <div class="container-fluid footer">
    <div class="col-lg-11">
      <div class="row">
        <div class="col-lg-3 d-flex flex-column justify-content-center align-items-center">
          <div class="header-footer">
            Food For Thought
          </div>
          <div class="text-center">
            <a href="#">
              <img
                class="video-link-img"
                src="/images/facebook.png"
                alt="facebook"
              >
            </a>
            <a href="#">
              <img
                class="video-link-img"
                src="/images/x.png"
                alt="x"
              >
            </a>
            <a href="#">
              <img
                class="video-link-img"
                src="/images/instagram.png"
                alt="instagram"
              >
            </a>
          </div>
        </div>
        <div class="col-lg-3" />
        <div class="col-lg-2 col-6">
          <div class="col-title">
            Contact
          </div>
          <a
            href="#"
            class="col-item"
          >000-000-0000</a><br>
          <a
            href="#"
            class="col-item"
          >hello@foodforthought.com</a>
        </div>
        <div class="col-lg-2 col-6">
          <div class="col-title">
            Services
          </div>
          <a
            href="#"
            class="col-item"
          >For schools</a><br>
          <a
            href="#"
            class="col-item"
          >For restaurants</a><br>
          <a
            href="#"
            class="col-item"
          >For parents</a>
        </div>
        <div class="col-lg-2 col-6">
          <div class="col-title">
            Company
          </div>
          <a
            href="#"
            class="col-item"
          >About</a><br>
          <a
            href="#"
            class="col-item"
          >FAQ</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style>
.footer {
  background-color: #eeeeee;
  padding: 4rem 0;
}
.video-link-img {
  margin: 35px 25px;
}
.header-footer {
  color: #003046;
  font-weight: 500;
  font-size: 1.2rem;
}
.col-title {
  color: #003046;
  font-weight: 500;
  font-size: 1.2rem;
}
.col-item {
  font-size: 1.15rem;
  color: #003046;
  margin-top: 6px;
  text-decoration: none;
}
</style>
