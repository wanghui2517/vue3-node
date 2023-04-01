<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div :style="background" class="box">
    <div class="formContainer">
      <h3>企业门户管理系统</h3>

      <el-form
        ref="loginFormRef"
        :model="loginForm"
        status-icon
        :rules="loginRules"
        label-width="80px"
        class="loginForm"
      >
        <el-form-item label="username" prop="username">
          <el-input
            v-model="loginForm.username"
            type="text"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item label="password" prop="password">
          <el-input
            v-model="loginForm.password"
            type="password"
            autocomplete="off"
          />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm()">Submit</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
// import bg from "../assets/2.jpeg";
const background = {
  backgroundImage: "url(" + require("../assets/2.jpeg") + ")",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const loginForm = reactive({
  username: "",
  password: "",
});

const loginFormRef = ref();

const loginRules = reactive({
  username: [
    { required: true, message: "Please input Activity name", trigger: "blur" },
  ],
  password: [
    {
      required: true,
      message: "Please input Activity password",
      trigger: "blur",
    },
  ],
});

const submitForm = () => {};
</script>

<style lang="scss" scoped>
.box {
  height: 100vh;
}
.formContainer {
  width: 500px;
  height: 300px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: rgba($color: #0d1224, $alpha: 0.5);
  color: white;
  text-align: center;
  padding: 20px;
  h3 {
    font-size: 30px;
  }
  .loginForm {
    margin-top: 20px;
  }
}

::v-deep .el-form-item__label {
  color: white;
}
</style>
