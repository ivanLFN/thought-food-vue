<template>
  <a
    href="#"
    class="new-children-btn"
    data-bs-toggle="modal"
    data-bs-target="#staticBackdrop"
  >
    <img
      src="../../../public/images/plus.png"
      alt="plus"
    >
    Add Child
  </a>

  <div
    id="staticBackdrop"
    class="modal fade"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered custom-modal">
      <div class="modal-content">
        <div class="modal-body">
          <div class="form-header mt-5 d-flex text-center justify-content-center">
            Add your Child
          </div>
          <div class="add-child-form">
            <form @submit.prevent="submitForm">
              <div class="form-subtitle">
                Child’s Name
              </div>
              <div class="row">
                <div class="col mr-2">
                  <div class="form-item-title mt-3 mb-1">
                    First Name<span class="required-mark">*</span>
                  </div>
                  <input
                    id="input1"
                    v-model="textInput1"
                    placeholder="e.g. John"
                    class="w-100 text-input"
                    type="text"
                  >
                </div>
                <div class="col ml-2">
                  <div class="form-item-title mt-3 mb-1">
                    Last Name<span class="required-mark">*</span>
                  </div>
                  <input
                    id="input2"
                    v-model="textInput2"
                    placeholder="e.g. Miller"
                    class="w-100 text-input"
                    type="text"
                  >
                </div>
              </div>
              <div class="form-subtitle mt-5">
                Choose School’s Name and Class
              </div>
              <div class="row">
                <div class="col mr-2">
                  <div class="form-item-title mt-3 mb-1">
                    School<span class="required-mark">*</span>
                  </div>
                  <select
                    id="select1"
                    v-model="selectOption1"
                    class="combo-box w-100"
                  >
                    <option value="option1">
                      Опция 1
                    </option>
                  </select>
                </div>
                <div class="col ml-2">
                  <div class="form-item-title mt-3 mb-1">
                    Class<span class="required-mark">*</span>
                  </div>
                  <select
                    id="select2"
                    v-model="selectOption2"
                    class="combo-box w-100"
                  >
                    <option value="optionA">
                      Опция A
                    </option>
                  </select>
                </div>
              </div>
            </form>
          </div>
          <div class="d-flex justify-content-center my-5">
            <div class="row align-items-center">
              <div class="col text-center">
                <a
                  href="#"
                  class="white-link"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >Cancel</a>
              </div>
              <div class="col text-center">
                <a
                  href="#"
                  type="submit"
                  class="orange-link"
                >Save</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    id="staticBackdropcEdit"
    class="modal fade"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered custom-modal">
      <div class="modal-content">
        <div class="modal-body">
          <div class="form-header mt-5 d-flex text-center justify-content-center">
            Edit Child Information
          </div>
          <div class="add-child-form">
            <form @submit.prevent="submitEditForm">
              <div class="form-subtitle">
                Child’s Name
              </div>
              <div class="row">
                <div class="col mr-2">
                  <div class="form-item-title mt-3 mb-1">
                    First Name<span class="required-mark">*</span>
                  </div>
                  <input
                    id="input1"
                    v-model="textEditInput1"
                    placeholder="e.g. John"
                    class="w-100 text-input"
                    type="text"
                  >
                </div>
                <div class="col ml-2">
                  <div class="form-item-title mt-3 mb-1">
                    Last Name<span class="required-mark">*</span>
                  </div>
                  <input
                    id="input2"
                    v-model="textEditInput2"
                    placeholder="e.g. Miller"
                    class="w-100 text-input"
                    type="text"
                  >
                </div>
              </div>
              <div class="form-subtitle mt-5">
                Choose School’s Name and Class
              </div>
              <div class="row">
                <div class="col mr-2">
                  <div class="form-item-title mt-3 mb-1">
                    School<span class="required-mark">*</span>
                  </div>
                  <select
                    id="select1"
                    v-model="selectEditOption1"
                    class="combo-box w-100"
                  >
                    <option value="option1">
                      Ancaster High Secondary School
                    </option>
                  </select>
                </div>
                <div class="col ml-2">
                  <div class="form-item-title mt-3 mb-1">
                    Class<span class="required-mark">*</span>
                  </div>
                  <select
                    id="select2"
                    v-model="selectEditOption2"
                    class="combo-box w-100"
                  >
                    <option value="optionA">
                      Grade A-10
                    </option>
                  </select>
                </div>
              </div>
            </form>
          </div>
          <div class="d-flex justify-content-center my-5">
            <div class="row align-items-center">
              <div class="col text-center">
                <a
                  href="#"
                  class="white-link"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >Cancel</a>
              </div>
              <div class="col text-center">
                <a
                  href="#"
                  type="submit"
                  class="orange-link"
                >Save</a>
              </div>
              <div class="col text-center">
                <a
                  href="#"
                  class="delete-child"
                >Delete this child</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-5">
    <div class="child-item py-5 row d-flex">
      <div class="col-4 child-name">
        Courtney Johnson
      </div>
      <div class="col-7 child-sсhool">
        Ancaster High Secondary School <br>
        Grade A-10
      </div>
      <div class="col-1">
        <div class="row">
          <a
            class="col"
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdropcEdit"
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
  </div>
</template>

<script>
export default {
  name: 'ChildrenTab',
  data () {
    return {
      textInput1: '',
      textInput2: '',
      selectOption1: '',
      selectOption2: '',

      textEditInput1: 'Courtney',
      textEditInput2: 'Johnson',
      selectEditOption1: 'Ancaster High Secondary School',
      selectEditOption2: 'A-10'
    }
  },
  methods: {
    submitForm () {
      // eslint-disable-next-line
      const formData = {
        textInput1: this.textInput1,
        textInput2: this.textInput2,
        selectOption1: this.selectOption1,
        selectOption2: this.selectOption2
      }
    },
    submitEditForm () {
      // eslint-disable-next-line
      const formData = {
        textEditInput1: this.textEditInput1,
        textEditInput2: this.textEditInput2,
        selectEditOption1: this.selectEditOption1,
        selectEditOption2: this.selectEditOption2
      }
    }
  }
}
</script>

<style scoped>
.new-children-btn {
  font-weight: 500;
  font-size: 1.7rem;
  text-decoration: none;
  color: #003046;
  border: 3px dashed #9E9E9E;
  padding: 30px;
  border-radius: 10px;
}

.form-header {
  font-size: 2rem;
  color: #003046;
  font-weight: 500;
}

.custom-modal {
  max-width: 60%;
  width: 60%;
}

.form-subtitle {
  color: #003046;
  font-weight: 500;
  font-size: 1.1rem;
}

.form-item-title {
  color: #003046;
  font-weight: 400;
  font-size: 1.1rem;
}

.add-child-form {
  margin: 3rem 5rem;
}

@media (max-width: 767px) {
  .add-child-form {
    margin: 0 2rem;
  }
}

.required-mark {
  color: red;
}

.text-input {
  color: #003046;
  font-weight: 400;
  font-size: 1.1rem;
  padding: 8px;
}

.combo-box {
  color: #003046 !important;
  font-weight: 400 !important;
  font-size: 1.1rem !important;
  padding: 8px !important;
}

.orange-link {
  font-size: 18px;
  background-color: #EE7E00;
  color: white;
  text-decoration: none;
  padding: 5px 50px;
  border-radius: 20px;
  border: 1px solid #EE7E00 !important;
  line-height: 22px;
}

.white-link {
  font-size: 18px;
  background-color: #ffffff;
  color: #003046;
  text-decoration: none;
  padding: 5px 36px;
  border-radius: 20px;
  border: 1px solid #003046 !important;
}

.child-name {
  color: #003046 !important;
  font-weight: 600 !important;
  font-size: 1.7rem !important;
}

.child-sсhool {
  color: #003046 !important;
  font-weight: 500 !important;
  font-size: 1.7rem !important;
}

.child-item {
  border-bottom: 1px solid #DADADA;
}

.delete-child {
  font-size: 17px;
  font-weight: 400;
  color: #AF0C0C;
}
</style>
