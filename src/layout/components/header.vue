<template>
  <div class="app">
		<!-- <div class="container">
			<nav class="">
				<div class="navbar-items">
					<router-link to="/">
						<img src="@/assets/images/img/admin-logo.svg" alt="" />
					</router-link>
				</div>
				<div class="navbar-items">
					
				</div>
			</nav>
		</div> -->
		<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 items-center">
			<div class="container flex flex-wrap justify-between items-center mx-auto">
				<a href="/home" class="flex items-center">
					<img src="@/assets/images/img/admin-logo.svg" alt="" />
				</a>
				<button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
					<span class="sr-only">Open main menu</span>
					<svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
				</button>
				<div class="hidden w-full md:block md:w-auto" id="navbar-default">
					<ul class="flex flex-col items-center p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
						<li>
							<!-- <a href="#" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page"> -->
								<button type="button" class="user-btn text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex justify-between items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-2 mb-2">
									Shohrux
									<div class="user-icon">
										<img class="image" src="@/assets/images/icons/icon-user.svg" alt="">
									</div>
								</button>
							<!-- </a> -->
						</li>
						<li>
							<a href="#" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
								<img src="@/assets/images/icons/log-out.svg" alt="" />
							</a>
						</li>
						
					</ul>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
};
</script>

<style scoped lang="scss">
.app {
	box-shadow: 0px 25px 40px rgba(0, 0, 0, 0.03);
}
.admin {
	order: 1;
	font-weight: 700;
}
.user-btn {
	background: #F1F1F3;
	border-radius: 6px;
	font-style: normal;
	font-weight: 700;
	font-size: 13px;
	line-height: 150%;
	text-align: right;
	letter-spacing: -0.35px;
	color: #28293D;
	padding: 5px 5px 5px 20px;
}
.user-icon {
	background: #00AE69;
	border-radius: 4px;
	width: 30px;
	height: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 10px;
	text-align: right;
	& .image {
		width: 20px;
		height: 20px;
		
	}
}

</style>