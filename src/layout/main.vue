<template>
    <div class="main">
			<Header />
			<router-view class="router-view" />
    </div>
  </template>
  
  <script>
  import Header from "./components/header.vue";
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Main",
    // eslint-disable-next-line vue/no-unused-components
    components: { Header },
  };
  </script>
  
  <style>

  </style>
  