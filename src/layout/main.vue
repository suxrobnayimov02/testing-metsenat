<template>
    <div class="main">
			<Header />
      <HeaderTab />
			<router-view class="router-view" />
    </div>
  </template>
  
  <script>
  import Header from "./components/header.vue";
  import HeaderTab from "./components/header-tab.vue";
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Main",
    // eslint-disable-next-line vue/no-unused-components
    components: { Header, HeaderTab },
  };
  </script>
  
  <style>

  </style>
  