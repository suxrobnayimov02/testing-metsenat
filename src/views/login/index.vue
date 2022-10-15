<template>
  <div class="app" style="background-color: #E5E5E5;">
    <div class="main-login">
      <div>
				<div style="margin-left: 35px;">
					<img
						style="margin-bottom: 35px"
						src="@/assets/images/img/logo.svg"
						alt=""
					/>
				</div>
        <el-form :model="loginForm" :rules="rules" ref="loginForm" @submit.prevent="handleLogin()" class="login-page">
          <h4 class="text-3xl mb-8 text-left sign-in font-bold underline">
            Kirish
          </h4>
          <div class="mb-6">
            <label
              for="default-input"
              class="
                block
                text-left
                mt-2
                mb-2
                text-sm
                font-medium
                text-gray-900
                dark:text-gray-300
              "
              >Login</label
            >
            <input
              v-model="loginForm.username"
              type="text"
              id="default-input"
              class="
                bg-gray-50
                border border-gray-300
                text-gray-900 text-sm
                rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block
                w-full
                p-2.5
                dark:bg-gray-700
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-white
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
              "
            />
          </div>
          <div class="mb-6">
            <label
              for="default-input"
              class="
                block
                text-left
                mt-2
                mb-2
                text-sm
                font-medium
                text-gray-900
                dark:text-gray-300
              "
              >Parol</label
            >
            <input
            v-model="loginForm.password"
              type="password"
              id="password"
              class="
                bg-gray-50
                border border-gray-300
                text-gray-900 text-sm
                rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block
                w-full
                p-2.5
                dark:bg-gray-700
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-white
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
              "
            />
          </div>
          <vue-recaptcha class="mb-6 w-full" ref="recaptcha" sitekey="6LdEH4MiAAAAAEDepBCqzYKM048IxYejr68084q3" />
          <button
            type="button"
            native-type="submit"
            class="
              w-full
              text-white
              bg-blue-700
              hover:bg-blue-800
              focus:ring-4 focus:ring-blue-300
              font-medium
              rounded-lg
              text-sm
              px-5
              py-2.5
              mr-2
              mb-2
              dark:bg-blue-600 dark:hover:bg-blue-700
              focus:outline-none
              dark:focus:ring-blue-800
            "
            @click="$router.push('/sponsors')"
          >
            Kirish
          </button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { VueRecaptcha } from "vue-recaptcha";
import { mapActions } from "vuex";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  components: { VueRecaptcha },
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [{ required: true, message: "Username kiritilishi shart", trigger: 'blur' }],
        password: [{ required: true, message: "Password kiritilishi shart", trigger: 'blur' }],
      }
    }
  },
  methods: {
    ...mapActions({
      fetchLogin: "login/login",
    }),

    handleLogin() {
      console.log('submit12')
    },

    onEvent() {
      this.$refs.recaptcha.execute();
    },
  },
};
</script>

<style scoped>
.app {
  width: 100%;
}
.sign-in {
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #28293d;
}
</style>