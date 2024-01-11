<template>
  <div class="row d-flex mt-5">
    <div class="offset-1 col-6 pl-5 text">
      Currently you haven’t vote any restaurants yet.<br>
      Your votes will be shown at this page.
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
</template>

<script>

export default {
  name: 'VoteComponent'
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
</style>
