<template>
  <div class="row d-flex">
    <div class="col-2">
      <div class="avatar">
        <img
          src="../../../public/images/Parent_Avatar.png"
          alt="avatar"
        >
      </div>
    </div>
    <div class="col-9">
      <div class="username mb-4">
        Sarah Johnson
      </div>
      <div class="user-email">
        sarahjohnson@sarahjohnson.com
      </div>
    </div>
    <div class="col-1">
      <div class="row edit-link">
        <a
          class="col-5"
          href="#"
        >
          <img
            src="../../../public/images/Group.png"
            alt="Group"
          >
        </a>
        Edit
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileTab'
}
</script>

<style>
.edit-link {
  font-weight: 500;
  line-height: 32px;
  font-size: 20px;
  color: #003046;
}

.username {
  font-weight: 500;
  line-height: 32px;
  font-size: 24px;
  color: #003046;
}

.user-email {
  font-weight: 400;
  line-height: 25px;
  font-size: 20px;
  color: #003046;
}
</style>
