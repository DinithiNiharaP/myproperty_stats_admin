<template>
  <!-- <AppLayoutMain /> -->
  <!-- <h1 class="absolute top-2 left-2 mt-5">
    <span class="text-neutral cursor-pointer" @click="dashboard"
      >Dashboard/
    </span>
    <span>Users</span>
  </h1> -->

  <div class="container px-5 sm:px-8 ml-5">
    <div class="py-8">
      <div>
        <h1>
          <span class="text-neutral cursor-pointer" @click="dashboard"
            >Dashboard/
          </span>
          <span>Users</span>
        </h1>
      </div>
      <div class="my-2 flex sm:flex-row flex-col mt-4">
        <div class="dropdown dropdown-bottom">
          <button class="text-primary font-semibold rounded" tabindex="0">
            <div class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                width="14"
                height="25"
                class="mr-1"
              >
                <path
                  d="M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"
                  fill="currentColor"
                ></path>
              </svg>
              Add Filters
            </div>
          </button>
          <ul
            tabindex="0"
            class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <div class="block relative">
                <span
                  class="h-full absolute inset-y-0 left-0 flex items-center pl-2"
                >
                  <svg
                    viewBox="0 0 24 24"
                    class="ml-4 h-4 w-4 fill-current text-secondary"
                  >
                    <path
                      d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"
                    ></path>
                  </svg>
                </span>
                <input
                  placeholder="Search"
                  class="appearance-none rounded-r rounded-l border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                />
              </div>
            </li>
            <li class="divide"></li>
            <li class="text-sm ml-5 font-semibold text-gray-500 mb-2">ID</li>
            <li class="text-sm ml-5 font-semibold text-gray-500 mb-2">Name</li>
            <li class="text-sm ml-5 font-semibold text-gray-500 mb-2">Email</li>
            <li class="text-sm ml-5 font-semibold text-gray-500 mb-2">
              Created At
            </li>
            <li class="text-sm ml-5 font-semibold text-gray-500 mb-2">
              Last Signed In
            </li>
          </ul>
        </div>
      </div>
      <div class="sm:-mx-8 sm:px-8 py-4 overflow-x-auto">
        <div class="inline-block min-w-[85%] shadow rounded-lg overflow-hidden">
          <table class="min-w-full leading-normal">
            <thead>
              <tr>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-accent text-left text-xs font-semibold text-secondary tracking-wider"
                >
                  ID
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-accent text-left text-xs font-semibold text-secondary tracking-wider"
                >
                  Name
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-accent text-left text-xs font-semibold text-secondary tracking-wider"
                >
                  Email
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-accent text-left text-xs font-semibold text-secondary tracking-wider"
                >
                  Created At
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-accent text-left text-xs font-semibold text-secondary tracking-wider"
                >
                  Last Signed In
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-accent text-center text-xs font-semibold text-secondary tracking-wider"
                >
                  Password Reset Link
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex items-center">
                    <p class="text-gray-900 whitespace-no-wrap">1</p>
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex items-center">
                    <p class="text-gray-900 whitespace-no-wrap">
                      Wednesday Addams
                    </p>
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    wednesdayaddams@gmail.com
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">Jan 21, 2020</p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">Jan 21, 2020</p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="grid place-content-center">
                    <span
                      class="relative inline-block px-3 py-1 font-semibold text-primary leading-tight"
                      ><div class="flex">
                        <span
                          aria-hidden
                          class="absolute inset-0 bg-accent opacity-50 rounded-full"
                        ></span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 24 24"
                          width="15"
                          height="18"
                        >
                          <path
                            d="M2.01 21L23 12L2.01 3L2 10l15 2l-15 2l.01 7z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        <span class="relative ml-1">Send</span>
                      </div>
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex items-center">
                    <p class="text-gray-900 whitespace-no-wrap">2</p>
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex items-center">
                    <p class="text-gray-900 whitespace-no-wrap">
                      Wednesday Addams
                    </p>
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    wednesdayaddams@gmail.com
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">Jan 21, 2020</p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">Jan 21, 2020</p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="grid place-content-center">
                    <span
                      class="relative inline-block px-3 py-1 font-semibold text-primary leading-tight"
                      ><div class="flex">
                        <span
                          aria-hidden
                          class="absolute inset-0 bg-accent opacity-50 rounded-full"
                        ></span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 24 24"
                          width="15"
                          height="18"
                        >
                          <path
                            d="M2.01 21L23 12L2.01 3L2 10l15 2l-15 2l.01 7z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        <span class="relative ml-1">Send</span>
                      </div>
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex items-center">
                    <p class="text-gray-900 whitespace-no-wrap">3</p>
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex items-center">
                    <p class="text-gray-900 whitespace-no-wrap">
                      Wednesday Addams
                    </p>
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    wednesdayaddams@gmail.com
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">Jan 21, 2020</p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">Jan 21, 2020</p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="grid place-content-center">
                    <span
                      class="relative inline-block px-3 py-1 font-semibold text-primary leading-tight"
                      ><div class="flex">
                        <span
                          aria-hidden
                          class="absolute inset-0 bg-accent opacity-50 rounded-full"
                        ></span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 24 24"
                          width="15"
                          height="18"
                        >
                          <path
                            d="M2.01 21L23 12L2.01 3L2 10l15 2l-15 2l.01 7z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        <span class="relative ml-1">Send</span>
                      </div>
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex items-center">
                    <p class="text-gray-900 whitespace-no-wrap">4</p>
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex items-center">
                    <p class="text-gray-900 whitespace-no-wrap">
                      Wednesday Addams
                    </p>
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    wednesdayaddams@gmail.com
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">Jan 21, 2020</p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">Jan 21, 2020</p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="grid place-content-center">
                    <span
                      class="relative inline-block px-3 py-1 font-semibold text-primary leading-tight"
                      ><div class="flex">
                        <span
                          aria-hidden
                          class="absolute inset-0 bg-accent opacity-50 rounded-full"
                        ></span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 24 24"
                          width="15"
                          height="18"
                        >
                          <path
                            d="M2.01 21L23 12L2.01 3L2 10l15 2l-15 2l.01 7z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        <span class="relative ml-1">Send</span>
                      </div>
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex items-center">
                    <p class="text-gray-900 whitespace-no-wrap">5</p>
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex items-center">
                    <p class="text-gray-900 whitespace-no-wrap">
                      Wednesday Addams
                    </p>
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    wednesdayaddams@gmail.com
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">Jan 21, 2020</p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">Jan 21, 2020</p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="grid place-content-center">
                    <span
                      class="relative inline-block px-3 py-1 font-semibold text-primary leading-tight"
                      ><div class="flex">
                        <span
                          aria-hidden
                          class="absolute inset-0 bg-accent opacity-50 rounded-full"
                        ></span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 24 24"
                          width="15"
                          height="18"
                        >
                          <path
                            d="M2.01 21L23 12L2.01 3L2 10l15 2l-15 2l.01 7z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        <span class="relative ml-1">Send</span>
                      </div>
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex items-center">
                    <p class="text-gray-900 whitespace-no-wrap">6</p>
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex items-center">
                    <p class="text-gray-900 whitespace-no-wrap">
                      Wednesday Addams
                    </p>
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    wednesdayaddams@gmail.com
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">Jan 21, 2020</p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">Jan 21, 2020</p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="grid place-content-center">
                    <span
                      class="relative inline-block px-3 py-1 font-semibold text-primary leading-tight"
                      ><div class="flex">
                        <span
                          aria-hidden
                          class="absolute inset-0 bg-accent opacity-50 rounded-full"
                        ></span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 24 24"
                          width="15"
                          height="18"
                        >
                          <path
                            d="M2.01 21L23 12L2.01 3L2 10l15 2l-15 2l.01 7z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        <span class="relative ml-1">Send</span>
                      </div>
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex items-center">
                    <p class="text-gray-900 whitespace-no-wrap">7</p>
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex items-center">
                    <p class="text-gray-900 whitespace-no-wrap">
                      Wednesday Addams
                    </p>
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    wednesdayaddams@gmail.com
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">Jan 21, 2020</p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">Jan 21, 2020</p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="grid place-content-center">
                    <span
                      class="relative inline-block px-3 py-1 font-semibold text-primary leading-tight"
                      ><div class="flex">
                        <span
                          aria-hidden
                          class="absolute inset-0 bg-accent opacity-50 rounded-full"
                        ></span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 24 24"
                          width="15"
                          height="18"
                        >
                          <path
                            d="M2.01 21L23 12L2.01 3L2 10l15 2l-15 2l.01 7z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        <span class="relative ml-1">Send</span>
                      </div>
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div
            class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between"
          >
            <span class="text-xs xs:text-sm text-gray-900">
              Showing 1 to 10 of 50 Entries
            </span>
            <div class="inline-flex mt-2 xs:mt-0">
              <button
                class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l"
              >
                Prev
              </button>
              <button
                class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import AppLayoutMain from "../../components/app-layout-main.vue";
export default {
  methods: {
    dashboard() {
      this.$router.push({ name: "Dashboard" });
    },
  },
  // components: { AppLayoutMain }
};
</script>
<style scoped>
h1 {
  color: #0f0d36;
  text-align: left;
  font-size: 20px;
  font-weight: bold;
}
.container {
  padding-left: 8%;
}
</style>
