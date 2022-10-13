<template>
  <div class="app">
    <div class="container mx-auto">
      <div class="flex mb-4 justify-between mt-5 mx-auto">
        <div class="h-12">
          <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul
              class="flex flex-wrap -mb-px text-sm font-medium text-center"
              id="myTab"
              data-tabs-toggle="#myTabContent"
              role="tablist"
            >
              <li class="mr-2" role="presentation">
                <button
                  class="
                    inline-block
                    p-4
                    rounded-t-lg
                    border-b-2
                    text-blue-600
                    hover:text-blue-600
                    dark:text-blue-500 dark:hover:text-blue-500
                    border-blue-600
                    dark:border-blue-500
                  "
                  id="dashboard-tab"
                  data-tabs-target="#dashboard"
                  type="button"
                  role="tab"
                  aria-controls="dashboard"
                  aria-selected="false"
                >
                  DASHBOARD
                </button>
              </li>
              <li class="mr-2" role="presentation">
                <button
                  class="
                    inline-block
                    p-4
                    rounded-t-lg
                    border-b-2 border-transparent
                    hover:text-gray-600 hover:border-gray-300
                    dark:hover:text-gray-300 dark:border-transparent
                    text-gray-500
                    dark:text-gray-400
                    border-gray-100
                    dark:border-gray-700
                  "
                  id="sponsor-tab"
                  data-tabs-target="#sponsor"
                  type="button"
                  role="tab"
                  aria-controls="sponsor"
                  aria-selected="true"
                >
                  HOMIYLAR
                </button>
              </li>
              <li class="mr-2" role="presentation">
                <button
                  class="
                    inline-block
                    p-4
                    rounded-t-lg
                    border-b-2 border-transparent
                    hover:text-gray-600 hover:border-gray-300
                    dark:hover:text-gray-300 dark:border-transparent
                    text-gray-500
                    dark:text-gray-400
                    border-gray-100
                    dark:border-gray-700
                  "
                  id="students-tab"
                  data-tabs-target="#students"
                  type="button"
                  role="tab"
                  aria-controls="students"
                  aria-selected="false"
                >
                  TALABALAR
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex h-12">
          <form class="flex items-center">
            <div class="relative w-full">
              <div
                class="
                  flex
                  absolute
                  inset-y-0
                  left-0
                  items-center
                  pl-3
                  pointer-events-none
                "
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                class="
                  search_input
                  bg-gray-50
                  border border-gray-300
                  text-gray-900 text-sm
                  rounded-lg
                  focus:ring-blue-500 focus:border-blue-500
                  block
                  w-full
                  pl-10
                  p-2.5
                  dark:bg-gray-700
                  dark:border-gray-600
                  dark:placeholder-gray-400
                  dark:text-white
                  dark:focus:ring-blue-500
                  dark:focus:border-blue-500
                "
                placeholder="Izlash"
                required
              />
            </div>
          </form>
          <button
            type="button"
            class="
              filter-btn
              flex
              justify-center
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
              ml-6
              dark:bg-blue-600 dark:hover:bg-blue-700
              focus:outline-none
              dark:focus:ring-blue-800
            "
          >
            <svg
              class="w-6 h-6"
              style="margin-right: 9px !important; width: 18px;"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              ></path>
            </svg>
            Filter
          </button>
        </div>
      </div>
    </div>
    <div id="myTabContent" class="tabs-result">
      <div
        class="container mx-auto p-4  rounded-lg dark:bg-gray-800"
        id="dashboard"
        role="tabpanel"
        aria-labelledby="dashboard-tab"
      >
        <div class="overflow-x-auto relative">
          <Table />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Table from "./table.vue";
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Index",
    components: { Table }
};
</script>

<style lang="scss" scoped>
.app {
  & .hover\:bg-blue-800:hover {
    background-color: #dae2fd;
  }
}
</style>