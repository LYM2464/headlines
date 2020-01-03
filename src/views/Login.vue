<template>
  <div>
    <div id="app">
      <div class="container">
        <div class="close"><span class="iconfont iconicon-test"></span></div>
        <div class="logo"><span class="iconfont iconnew"></span></div>
        <div class="inputs">
          <cm_textBox
            placeholder="用户名/邮箱"
            v-model="username"
            :rules="/^(\d{5,6})$|^(1\d{10})$/"
          ></cm_textBox>
          <cm_textBox
            type="password"
            placeholder="密码"
            :rules="/^\S{3,16}$/"
          ></cm_textBox>
        </div>
        <p class="tips">
          没有账号？
          <a href="#/login" class="">去注册</a>
        </p>
        <cm_button @click="login">登录</cm_button>
      </div>
    </div>
  </div>
</template>
<script>
import button from "@/components/button";
import textBox from "@/components/textBox";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      console.log(111);
    }
  },
  components: {
    cm_button: button,
    cm_textBox: textBox
  }
};
</script>
<style lang="less" scoped>
.container {
  padding: 20px;
}

.close {
  span {
    font-size: 27 / 360 * 100vw;
  }
}

.logo {
  display: flex;
  justify-content: center;

  span {
    display: block;
    font-size: 126 / 360 * 100vw;
    color: #d81e06;
  }
}

.inputs {
  input {
    margin-bottom: 20px;
  }
}

.tips {
  text-align: right;
  margin-bottom: 20px;

  a {
    color: #3385ff;
  }
}
</style>
