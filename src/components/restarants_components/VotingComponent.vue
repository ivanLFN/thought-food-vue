<template>
  <div class="voting-el w-100 mt-5 p-5">
    <div class="d-flex">
      <div class="title">
        Voting
      </div>
      <div class="requires-info">
        This restaurant requires 50 votes to cater
      </div>
    </div>
    <div class="d-flex mt-5">
      <div class="votes-info text-center vertical-line">
        <img
          class="mb-2"
          src="../../../public/images/finger_ok.png"
          alt="finger_ok"
        >
        317 Votes
      </div>
      <div class="votes-info">
        188 parents from Adam Beck Junior Public School vote for it<br>
        13 parents from Ancaster High Secondary School vote for it
      </div>
    </div>
    <div class="w-100 custom-line mt-5" />
    <div class="school-info mt-5">
      Your school needs to designate a restaurant for school lunches.  If your children like this restaurant, please vote for them below:
    </div>
    <div class="children-votes mt-5 d-flex">
      <a
        href="#"
        class="child-vote row d-flex justify-content-center"
        @click="voteClick"
      >
        <img
          class="vote-img"
          src="../../../public/images/finger.png"
          alt="child-vote"
        >
        <div class="child-name text-center mt-3">
          Vote for<br>
          Curtney
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VotingComponent',
  methods: {
    voteClick () {
      const imgElement = document.querySelector('.vote-img')
      if (imgElement.src.endsWith('finger.png')) {
        imgElement.src = '/images/finger_ok.png'
      } else {
        imgElement.src = '/images/finger.png'
      }
    }
  }
}
</script>

<style scoped>

.voting-el {
  border: 1px solid #003046;
  border-radius: 10px;
}

.title {
  margin-right: 8rem;
  font-weight: 500;
  color: #003046;
  font-size: 17px;
}

.requires-info {
  color: #AF0C0C;
  font-size: 17px;
  font-weight: 250;
}

.custom-line {
  border-bottom: 1px solid #DADADA;
  font-size: 0;
}

.vote-img {
  width: 40%;
  height: auto;
}

.child-name {
  color: #003046;
  font-weight: 250;
  font-size: 17px;
}

.child-vote {
  border: 1px solid #DADADA;
  padding: 20px 0;
  border-radius: 10px;
  text-decoration: none;
}

.school-info {
  color: #003046;
  font-size: 17px;
  font-weight: 450;
}

.votes-info {
  color: #003046;
  font-weight: 250;
  font-size: 17px;
}

.vertical-line {
  border-right: 1px solid #003046;
  padding-right: 20px;
  margin-right: 20px;
}
</style>
