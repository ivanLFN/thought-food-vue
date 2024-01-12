<template>
  <div class="restarants-table">
    <div class="row">
      <div class="col-3 p-2 restarant-card">
        <img
          class="w-100"
          src="../../../public/images/restarant_prew_image.png"
          alt="restarant-img"
        >
        <div class="row mt-4">
          <div class="col-9 restarant-name">
            Bob’s Burgers
            <div class="row tags p-2">
              <div class="tag col">
                Burgers
              </div>
              <div class="tag col">
                Salad
              </div>
            </div>
          </div>
          <div class="col-3 d-flex flex-column align-items-center">
            <div>
              <img
                src="../../../public/images/like.png"
                alt="like"
              >
            </div>
            <div class="likes-amount mt-1">
              317
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RestarantsList'
}
</script>

<style>
.restarants-table {
  margin-top: 10rem;
}

.restarant-name {
  font-weight: 600;
  font-size: 17px;
  color: #003046;
}

.tag {
  text-align: center;
  border: 1px solid #003046;
  border-radius: 30px;
  margin-right: 10px;
  font-weight: 350;
  font-size: 15px;
  color: #003046;
  padding: 1px 0;
}

.likes-amount {
  font-weight: 500;
  font-size: 17px;
  color: #003046;
}
</style>
