<template>
  <div class="row d-flex restarant-offers">
    <div class="col">
      <div class="header-offers">
        Foods this restaurant offers
      </div>
      <div class="d-flex kind-of-offers mt-3">
        <div class="offer">
          <img src="../../../public/images/burger-solid.png">
          Burgers
        </div>
        <div class="offer">
          <img src="../../../public/images/k-solid.png">
          Salad
        </div>
        <div class="offer">
          <img src="../../../public/images/kebabs-solid.png">
          Kebabs
        </div>
      </div>
    </div>
    <div class="col">
      <div class="header-offers">
        Allergies
      </div>
      <div class="d-flex allergies mt-4">
        <div class="allergi">
          Crustaceans & mollusks
        </div>
        <div class="allergi">
          Egg
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RestarantOffers'
}
</script>

<style scoped>
.restarant-offers {
  margin-top: 5rem;
}

.header-offers {
  font-weight: 550;
  font-size: 17px;
  color: #003046;
}

.allergi {
  padding: 8px 16px;
  border: 1px solid #9E9E9E;
  border-radius: 30px;
  gap: 5;
  margin-right: 20px;
}

.allergies {
  font-weight: 500;
  font-size: 17px;
  color: #003046;
}

.offer {
  margin-right: 20px;
  font-size: 250;
  font-size: 17px;
  color: #003046;
  border: 1px solid #003046;
  border-radius: 30px;
  padding: 10px 16px;
}
</style>
