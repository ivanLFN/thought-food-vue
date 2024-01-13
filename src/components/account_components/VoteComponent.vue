<template>
  <div class="row d-flex mt-5">
    <div class="offset-1 col-6 pl-5">
      <div
        v-if="!AnyItems"
        class="text"
      >
        Currently you haven’t vote any restaurants yet.<br>
        Your votes will be shown at this page.
      </div>
    </div>
    <div class="col-5">
      <a
        href="#"
        class="go-vote-link"
      >
        Go to Vote
      </a>
    </div>
  </div>

  <div
    v-if="AnyItems"
    class=" mt-4"
  >
    <div class="header-voted">
      Restaurants I voted for
    </div>
    <div class="row mt-3">
      <div class="col-4">
        <img
          class="w-100 mb-3"
          src="../../../public/images/restarant_prew_image.png"
          alt="restarant"
        >
        <div class="row voted-restarants">
          <div class="col">
            <a
              href="#"
              class="restarant-link"
            >
              Bob’s Burgers
            </a>
          </div>
          <div class="col">
            <div class="d-flex justify-content-end">
              <span class="my-votes">My Votes:</span>
              2
            </div>
          </div>
        </div>
        <div class="d-flex tags py-2">
          <div class="tag">
            <div class="tag-name">
              Burgers
            </div>
          </div>
          <div class="tag">
            <div class="tag-name">
              Salad
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'VoteComponent',
  data () {
    return {
      AnyItems: true
    }
  }
}
</script>

<style>

.text {
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: #003046;
}

.go-vote-link {
  font-weight: 500;
  font-size: 24px;
  color: white;
  padding: 10px 120px;
  border-radius: 30px;
  background-color:#003046;
  text-decoration: none;
}

.header-voted {
  color: #003046;
  font-weight: 500;
  font-size: 32px;
}

.my-votes {
  margin-right: 3px;
  font-weight: 250;
}

.voted-restarants {
  font-weight: 550;
  font-size: 17px;
  color: #003046;
  text-decoration: none;
}

.restarant-link {
  text-decoration: none;
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
}

.tag-name {
  padding: 3px 20px;
}
</style>
