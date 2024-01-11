<template>
  <div class="main-header">
    Account
  </div>
  <nav class="nav-header mt-4">
    <div
      id="nav-tab"
      class="nav nav-tabs"
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
        Children
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
        Payment Information
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
        Profile
      </button>
    </div>
  </nav>
  <div
    id="nav-tabContent"
    class="tab-content"
  >
    <div
      id="nav-home"
      class="tab-pane fade show active"
      role="tabpanel"
      aria-labelledby="nav-home-tab"
    >
      ...
    </div>
    <div
      id="nav-profile"
      class="tab-pane fade"
      role="tabpanel"
      aria-labelledby="nav-profile-tab"
    >
      ...
    </div>
    <div
      id="nav-contact"
      class="tab-pane fade"
      role="tabpanel"
      aria-labelledby="nav-contact-tab"
    >
      ...
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccountTabs'
}
</script>

<style scoped>

.nav-header {
  border-bottom: 1px solid #E3E3E3;
}

.nav-link.active {
  border-bottom: 5px solid #003046 !important;
  border-radius: 0 !important;
}
</style>
