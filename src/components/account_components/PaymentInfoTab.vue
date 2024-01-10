<template>
  <a
    href="#"
    class="payment-header"
  >
    <img
      src="../../../public/images/plus_small.png"
      alt="plus"
    >
    Add Payment Method
  </a>

  <div class="row d-flex card-info-item py-4 mt-5">
    <div class="col-1">
      <img
        src="../../../public/images/MasterCard.png"
        alt="payment"
      >
    </div>
    <div class="col-3 subtitle-card-info">
      Mastercard
    </div>
    <div class="col-3">
      <span class="subtitle-card-info">Expiry Date:</span>
      12/2023
    </div>
    <div class="col-4">
      <span class="subtitle-card-info">Number:</span>
      5344 **** **** 6375
    </div>
    <div class="col-1">
      <div class="row">
        <a
          class="col"
          href="#"
        >
          <img
            src="../../../public/images/Group.png"
            alt="Group"
          >
        </a>
        <a
          class="col"
          href="#"
        >
          <img
            src="../../../public/images/Union.png"
            alt="Union"
          >
        </a>
      </div>
    </div>
  </div>
  <div class="row d-flex card-info-item py-4 mt-4">
    <div class="col-1">
      <img
        src="../../../public/images/Visa.png"
        alt="payment"
      >
    </div>
    <div class="col-3 subtitle-card-info">
      Visa
    </div>
    <div class="col-3">
      <span class="subtitle-card-info">Expiry Date:</span>
      10/2025
    </div>
    <div class="col-4">
      <span class="subtitle-card-info">Number:</span>
      5341 **** **** 6370
    </div>
    <div class="col-1">
      <div class="row">
        <a
          class="col"
          href="#"
        >
          <img
            src="../../../public/images/Group.png"
            alt="Group"
          >
        </a>
        <a
          class="col"
          href="#"
        >
          <img
            src="../../../public/images/Union.png"
            alt="Union"
          >
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentInfoTab'
}
</script>

<style>
.payment-header {
  font-size: 1.2rem;
  color: #003046;
  font-weight: 500;
  text-decoration: none;
}

.subtitle-card-info {
  font-size: 1.2rem;
  color: #003046;
  font-weight: 400;
}

.card-info-item {
  border-bottom: 1px solid #003046;
}

</style>
