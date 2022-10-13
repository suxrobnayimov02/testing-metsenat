<template>
  <div>
    <table class="w-full text-sm text-left">
      <thead class="text-xs uppercase">
        <tr class="text-gray-300 text-header">
          <th scope="col" class="py-3 px-6 text-gray-300" style="width: 45px">
            #
          </th>
          <th scope="col" class="py-3 px-6">F.I.SH</th>
          <th scope="col" class="py-3 px-6">TEL.RAQAMI</th>
          <th scope="col" class="py-3 px-6">Homiylik summasi</th>
          <th scope="col" class="py-3 px-6">Sarflangan summa</th>
          <th scope="col" class="py-3 px-6">Sana</th>
          <th scope="col" class="py-3 px-6">Holati</th>
          <th scope="col" class="py-3 px-6">Amallar</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white dark:bg-gray-800 mt-2 mb-2 tbody-tr">
          <th
            scope="row"
            class="
              py-4
              px-6
              font-medium
              text-gray-900
              whitespace-nowrap
              dark:text-white
            "
          >
            1
          </th>
          <td class="py-4 px-6">Alimov Abror Xabibullayevich</td>
          <td class="py-4 px-6">+99899 973-72-60</td>
          <td class="py-4 px-6">
            <b>30 000 000</b><span class="uppercase pl-2">uzs</span>
          </td>
          <td class="py-4 px-6">
            <b>0</b><span class="uppercase pl-2">uzs</span>
          </td>
          <td class="py-4 px-6">15.01.2021</td>
          <td class="py-4 px-6">Yangi</td>
          <td class="py-4 px-6">
            <button class="eye" type="text">
              <img src="@/assets/images/icons/eye1.svg" alt="" />
            </button>
          </td>
        </tr>
        <tr class="spacer">
          <td colspan="8"></td>
        </tr>
        <tr class="bg-white dark:bg-gray-800 mt-2 mb-2 tbody-tr">
          <th
            scope="row"
            class="
              py-4
              px-6
              font-medium
              text-gray-900
              whitespace-nowrap
              dark:text-white
            "
          >
            2
          </th>
          <td class="py-4 px-6">Xabibullayevich Alimov Abror</td>
          <td class="py-4 px-6">+99899 973-72-60</td>
          <td class="py-4 px-6">
            <b>60 000 000</b><span class="uppercase pl-2">uzs</span>
          </td>
          <td class="py-4 px-6">
            <b>2 000 000</b><span class="uppercase pl-2">uzs</span>
          </td>
          <td class="py-4 px-6">22.09.2021</td>
          <td class="py-4 px-6">Moderatsiyada</td>
          <td class="py-4 px-6">
            <button class="eye" type="text">
              <img src="@/assets/images/icons/eye1.svg" alt="" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "table",
};
</script>

<style>
</style>