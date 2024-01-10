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
        id="nav-children-tab"
        class="nav-link active"
        data-bs-toggle="tab"
        data-bs-target="#nav-children"
        type="button"
        role="tab"
        aria-controls="nav-children"
        aria-selected="true"
      >
        Children
      </button>
      <button
        id="nav-payment-tab"
        class="nav-link"
        data-bs-toggle="tab"
        data-bs-target="#nav-payment"
        type="button"
        role="tab"
        aria-controls="nav-payment"
        aria-selected="false"
      >
        Payment Information
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
        Profile
      </button>
    </div>
  </nav>
  <div
    id="nav-tabContent"
    class="tab-content"
  >
    <div
      id="nav-children"
      class="tab-pane fade show active"
      role="tabpanel"
      aria-labelledby="nav-children-tab"
    >
      <ChildrenTab />
    </div>
    <div
      id="nav-payment"
      class="tab-pane fade"
      role="tabpanel"
      aria-labelledby="nav-payment-tab"
    >
      <PaymentInfoTab />
    </div>
    <div
      id="nav-profile"
      class="tab-pane fade"
      role="tabpanel"
      aria-labelledby="nav-profile-tab"
    >
      <ProfileTab />
    </div>
  </div>
</template>

<script>
import ChildrenTab from './ChildrenTab.vue'
import PaymentInfoTab from './PaymentInfoTab.vue'
import ProfileTab from './ProfileTab.vue'
export default {
  name: 'AccountTabs',
  components: {
    ChildrenTab,
    PaymentInfoTab,
    ProfileTab
  }
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
