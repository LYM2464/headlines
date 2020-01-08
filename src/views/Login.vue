<template>
  <div id="app">
    <div class="container">
      <div class="close">
        <span class="iconfont iconicon-test"></span>
      </div>
      <div class="logo">
        <span class="iconfont iconnew"></span>
      </div>
      <div class="inputs">
        <DE_textBox
          placeholder="用户名/手机"
          v-model="users.username"
          :rules="/^(\d{5,6})$|^(1\d{10})$/"
          msg="用户名/手机 格式错误"
        ></DE_textBox>
        <DE_textBox
          type="password"
          placeholder="密码"
          v-model="users.password"
          :rules="/^\S{3,16}$/"
          msg="密码格式错误"
        ></DE_textBox>
      </div>
      <p class="tips">
        没有账号？
        <router-link to="/register">去注册</router-link>
      </p>
      <DE_btn @click="login">登录</DE_btn>
    </div>
  </div>
</template>
<script>
import button from "@/components/button";
import textBox from "@/components/textBox";
import { login } from "@/apis/user.js";
export default {
  data() {
    return {
      users: {
        username: "10086",
        password: "123"
      }
    };
  },
  methods: {
    // - 登录触发
    login: async function() {
      if (
        /^(\d{5,6})$|^(1\d{10})$/.test(this.users.username) &&
        /^\S{3,16}$/.test(this.users.password)
      ) {
        let res = await login(this.users);
        if (res.data.message === "用户不存在") {
          this.$toast.fail(res.data.message);
        } else {
          localStorage.setItem("headlines_41_token", res.data.data.token);
          localStorage.setItem(
            "headlines_41_userInfo",
            JSON.stringify(res.data.data.user)
          );
          this.$router.push({ path: `/personal/${res.data.data.user.id}` });
        }
      } else {
        this.$toast.fail("用户数据输入不合法");
      }
    }
  },
  components: {
    DE_textBox: textBox,
    DE_btn: button
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
