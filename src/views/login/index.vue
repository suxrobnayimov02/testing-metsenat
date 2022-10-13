<template>
  <div class="app">
    <div class="main-login">
			<div>
				<img style="margin-bottom: 40px;" src="@/assets/images/img/logo.svg" alt="" />
				<div class="login-page">
					<h4 class="text-3xl mb-8 text-left sign-in font-bold underline">Kirish</h4>
					<div class="mb-6">
						<label for="default-input" class="block text-left mt-2 mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Login</label>
						<input type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
					</div>
					<div class="mb-6">
						<label for="default-input" class="block text-left mt-2 mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Parol</label>
						<input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
					</div>
					<vue-recaptcha class="mb-6" ref="recaptcha" sitekey="Your key here" />
					<button type="button" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" @click="$router.push('/home')">Kirish</button>
				</div>
			</div>
    </div>
  </div>
</template>

<script>
import { VueRecaptcha } from 'vue-recaptcha';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
	components: { VueRecaptcha },
	methods: {
      onEvent() {
        // when you need a reCAPTCHA challenge
        this.$refs.recaptcha.execute();
      }
    }
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
	color: #28293D;
}
</style>