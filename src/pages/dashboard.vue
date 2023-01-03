<template>
  <!-- <AppLayoutMain /> -->

  <div class="drawer-content flex flex-col">
    <div class="navbar bg-white shadow-sm">
      <div class="flex-none">
        <label for="my-drawer-3" class="btn btn-square btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-6 h-6 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div class="flex-1">
        <img
          src="../static/logo.svg"
          contain
          max-height="50"
          max-width="180"
          class="text--text tw-cursor-pointer ml-8 mr-8"
        />
      </div>
    </div>
  </div>
  <div class="container bg-base-100">
    <div class="drawer drawer-mobile">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col ml-5 mt-5">Dashboard</div>
      <div class="drawer-side ml-0 mt-0 p-5">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu bg-white w-56">
          <li class="mt-10">
            <a @click="onOverview">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <g class="a">
                  <path
                    class="b"
                    d="M5.454,20A5.242,5.242,0,0,1,0,14.549l0-.233V6.507C0,3.231,2.075.923,5.227.817l.227,0H12.5a.725.725,0,0,1,.1,1.443l-.1.006H5.454a3.824,3.824,0,0,0-4,4.019l0,.225v7.808c0,2.514,1.437,4.138,3.784,4.231l.216,0h8.338a3.817,3.817,0,0,0,4-4.011l0-.224v-6.8a.727.727,0,0,1,1.446-.1l.007.1v6.8c0,3.275-2.074,5.575-5.228,5.681l-.227,0ZM4.7,13.436l-.09-.058a.724.724,0,0,1-.192-.927l.059-.089L7.379,8.6a.729.729,0,0,1,.935-.188l.09.06,2.732,2.14L13.528,7.54a.726.726,0,0,1,1.209.8l-.06.089L11.839,12.08a.729.729,0,0,1-.934.186l-.089-.06L8.084,10.067,5.631,13.244a.729.729,0,0,1-.93.192ZM14.821,2.581A2.589,2.589,0,1,1,17.41,5.162,2.589,2.589,0,0,1,14.821,2.581Zm1.453,0A1.136,1.136,0,1,0,17.41,1.449,1.135,1.135,0,0,0,16.275,2.581Z"
                  />
                </g>
              </svg>
              Overview
            </a>
          </li>
          <li>
            <a @click="onUsers">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16.001"
                height="20"
                viewBox="0 0 16.001 20"
              >
                <g class="a" transform="translate(0)">
                  <path
                    class="b"
                    d="M6.676,19.964c-.121,0-.206,0-.284,0l-.144-.005a2.214,2.214,0,0,1-.4-.047,15.4,15.4,0,0,1-2.333-.338l-.256-.054a3.961,3.961,0,0,1-2.975-1.9A2.936,2.936,0,0,1,0,16.363,2.876,2.876,0,0,1,.287,15.1a4.334,4.334,0,0,1,3.2-1.948,16.744,16.744,0,0,1,2.339-.331c.718-.063,1.448-.094,2.17-.094s1.452.031,2.17.094l.461.039a17.218,17.218,0,0,1,1.873.292c1.727.355,2.749.979,3.215,1.962a2.912,2.912,0,0,1,0,2.5c-.464.978-1.512,1.616-3.2,1.949l-.468.1a15.713,15.713,0,0,1-1.88.245c-.715.061-1.442.092-2.158.092C7.563,20,7.114,19.988,6.676,19.964Zm-.734-5.7a15.528,15.528,0,0,0-2.156.305,3.21,3.21,0,0,0-2.205,1.168,1.417,1.417,0,0,0-.14.624,1.452,1.452,0,0,0,.139.627c.255.527,1.025.93,2.228,1.165l.353.075a15.507,15.507,0,0,0,1.874.249,1.84,1.84,0,0,0,.287.033l.393.006c.429.023.866.035,1.3.035.678,0,1.366-.029,2.047-.087a14.344,14.344,0,0,0,2.162-.315l.225-.048c1.061-.24,1.743-.624,1.973-1.108a1.463,1.463,0,0,0,0-1.259c-.245-.516-1.008-.92-2.209-1.167a15.575,15.575,0,0,0-2.152-.3l-.013,0c-.675-.059-1.361-.089-2.038-.089S6.628,14.2,5.943,14.264ZM2.692,5.335A5.313,5.313,0,1,1,8,10.67,5.33,5.33,0,0,1,2.692,5.335Zm1.442,0A3.871,3.871,0,1,0,8,1.448,3.883,3.883,0,0,0,4.134,5.335Z"
                  />
                </g>
              </svg>
              Users
            </a>
          </li>
          <li>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17.168"
                height="20"
                viewBox="0 0 17.168 20"
              >
                <g transform="translate(0 0)">
                  <path
                    class="a"
                    d="M4.615,20A4.6,4.6,0,0,1,0,15.307V4.522A4.418,4.418,0,0,1,1.368,1.337,4.639,4.639,0,0,1,4.615.012h6.3a.763.763,0,0,1,.267,0h.131a.76.76,0,0,1,.545.232l5.1,5.312a.757.757,0,0,1,.211.524v9.228A4.666,4.666,0,0,1,12.659,20Zm0-18.478a3.094,3.094,0,0,0-3.1,3V15.307A3.216,3.216,0,0,0,2.4,17.571a3.057,3.057,0,0,0,2.21.919h8.044a2.924,2.924,0,0,0,2.1-.952,3.291,3.291,0,0,0,.9-2.23V7.03l-.881,0-1.144,0A3.347,3.347,0,0,1,10.3,3.874l-.005-.189V1.521ZM11.8,3.684a1.836,1.836,0,0,0,1.832,1.837H14.83L11.8,2.369ZM5.424,14.4a.755.755,0,0,1-.1-1.5l.1-.006h5.434a.755.755,0,0,1,.1,1.5l-.1.006Zm0-4.986a.755.755,0,0,1-.1-1.5l.1-.007H8.8a.755.755,0,0,1,.1,1.5l-.1.007Z"
                    transform="translate(0 0)"
                  />
                </g>
              </svg>
              Reports
            </a>
          </li>

          <div class="divider"></div>

          <li class="mt-10">
            <a @click="onLogIn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="19.5"
                viewBox="0 0 20 19.5"
              >
                <g class="a" transform="translate(-0.022 -0.022)">
                  <path
                    class="b"
                    d="M4.318,19.5A4.322,4.322,0,0,1,0,15.379l0-.2V4.324A4.323,4.323,0,0,1,4.115,0l.2,0H9.065A4.322,4.322,0,0,1,13.38,4.121l0,.2v.909a.73.73,0,0,1-1.454.1l-.007-.1V4.324a2.86,2.86,0,0,0-2.69-2.857l-.168,0H4.318A2.86,2.86,0,0,0,1.465,4.156l0,.168V15.176A2.86,2.86,0,0,0,4.15,18.033l.168.005H9.075a2.85,2.85,0,0,0,2.844-2.683l0-.168v-.92a.731.731,0,0,1,1.455-.1l.006.1v.92a4.313,4.313,0,0,1-4.1,4.309l-.209,0ZM15.9,13.109a.732.732,0,0,1-.068-.952l.07-.082,1.6-1.594H7.544a.731.731,0,0,1-.1-1.456l.1-.006H17.5L15.9,7.426a.732.732,0,0,1-.074-.952l.071-.082a.731.731,0,0,1,.951-.073l.082.07,2.852,2.842a.729.729,0,0,1,.209.425h0l0,.017v0l0,.017h0q0,.028,0,.056h0v0s0,.01,0,.015v0s0,.008,0,.012v.046a.728.728,0,0,1-.071.246v0l-.006.012-.005.01,0,0-.007.013h0l-.008.013h0l-.008.013h0l-.008.012v0l-.007.011,0,0-.007.009,0,0,0,0h0a.735.735,0,0,1-.088.1l-2.835,2.826a.729.729,0,0,1-1.032,0Z"
                    transform="translate(0.022 0.022)"
                  />
                </g>
              </svg>
              Log out
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <!-- <h1 class="absolute left-8 top-8 mt-5">Dashboard</h1> -->
  <!-- <div class="container content-center grid h-screen place-items-center">
    <div>
      <button class="btn btn-wide text-black bg-primary/10 mb-3 mr-5">
        Overview
      </button>
      <button class="btn btn-wide text-black bg-primary/10 mb-3">Users</button>
    </div>
  </div> -->
</template>

<script>
import AppLayoutMain from "../components/app-layout-main.vue";

export default {
  components: { AppLayoutMain },
  methods: {
    onLogIn() {
      this.$router.push({ name: "Login" });
    },
    onOverview() {
      this.$router.push({ name: "Overview" });
    },
    onUsers() {
      this.$router.push({ name: "Users" });
    },
  },
};
</script>

<style scoped>
h1 {
  color: #0f0d36;
  text-align: left;
  font-size: 30px;
  font-weight: bold;
  margin-top: 5%;
  margin-left: 18%;
}
.container {
  /* height: 80vh; */
  /* display: inline;
  flex-direction: row; */
}
.container > div > .btn-wide {
  width: 24rem;
  height: 8rem;
  font-size: large;
  margin-right: 1rem;
  margin-left: 1rem;
}
</style>
