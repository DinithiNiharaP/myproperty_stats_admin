<template>
  <div class="drawer-content flex flex-col">
    <div class="navbar bg-base-100">
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
  <div class="drawer drawer-mobile">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <!-- <div class="drawer-content flex flex-col">
      fasfsafasfasfsafafsaafas
    </div> -->
    <div class="drawer-side ml-0 pl-2">
      <label for="my-drawer-3" class="drawer-overlay"></label>
      <ul class="menu bg-base-100 w-56 p-2">
        <li class="font-semibold text-primary mb-3 mt-7">Investment Manager</li>
        <li>
          <a>
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
          <a>
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
        <!-- <li>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <g class="a">
                <path
                  class="b"
                  d="M5.641,20a5.478,5.478,0,0,1-4.092-1.642A6.024,6.024,0,0,1,0,14.107V5.893A6.018,6.018,0,0,1,1.552,1.644,5.475,5.475,0,0,1,5.641,0h8.717a5.478,5.478,0,0,1,4.092,1.643A6.024,6.024,0,0,1,20,5.893v8.213a6.024,6.024,0,0,1-1.549,4.251A5.478,5.478,0,0,1,14.359,20ZM1.395,5.893v8.213c0,2.732,1.667,4.5,4.246,4.5h8.717c2.579,0,4.246-1.766,4.246-4.5V5.893c0-2.732-1.667-4.5-4.246-4.5H5.641C3.062,1.395,1.395,3.161,1.395,5.893ZM13.614,14.8l-.006-.095V11.7A.7.7,0,0,1,15,11.6L15,11.7v3.01a.7.7,0,0,1-1.389.095Zm-4.271,0-.006-.095V5.274a.7.7,0,0,1,1.39-.1l.006.1v9.435a.7.7,0,0,1-1.39.095ZM5,14.8,5,14.709V8.327a.7.7,0,0,1,1.389-.095l.006.095v6.382A.7.7,0,0,1,5,14.8Z"
                />
              </g>
            </svg>
            Forecast
          </a>
        </li>
        <li>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19.998"
              viewBox="0 0 19 19.998"
            >
              <g class="a" transform="translate(0 0)">
                <path
                  class="b"
                  d="M15.28,20H13.29a1.822,1.822,0,0,1-1.79-1.689l-.01-.14V15.309a.634.634,0,0,0-.54-.621l-.09-.01H8.189a.634.634,0,0,0-.619.54l-.01.091v2.85a1.058,1.058,0,0,1-.02.179l-.01.021-.012.069A1.812,1.812,0,0,1,5.83,19.989L5.7,20H3.91A3.911,3.911,0,0,1,0,16.3V7.989A2.977,2.977,0,0,1,1,5.8L7.23.788a3.633,3.633,0,0,1,4.36-.121l.161.121,6.088,4.871A3.011,3.011,0,0,1,18.99,7.788l.01.2V16.1A3.916,3.916,0,0,1,15.28,20Zm-7.24-6.71H10.86a2.036,2.036,0,0,1,2.02,1.871v3.01a.436.436,0,0,0,.35.429h1.859a2.506,2.506,0,0,0,2.509-2.34l.012-.159V8a1.621,1.621,0,0,0-.5-1.129l-.13-.111-6.1-4.88a2.228,2.228,0,0,0-1.391-.484,2.257,2.257,0,0,0-1.249.373l-.151.111-6.08,4.9A1.553,1.553,0,0,0,1.4,7.838L1.389,8v8.1A2.511,2.511,0,0,0,3.75,18.6H5.7a.428.428,0,0,0,.439-.358l.021-.18.011-.051v-2.7A2.011,2.011,0,0,1,8.04,13.288Z"
                  transform="translate(0 0)"
                />
              </g>
            </svg>
            Property
          </a>
        </li>
         -->

        <div class="divider"></div>

        <li class="font-semibold text-primary mb-3">Deal Analyzer</li>
        <li>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <path
                class="a"
                d="M6.229,20a6.277,6.277,0,0,1-4.564-1.665A6.275,6.275,0,0,1,0,13.772V6.229A7.007,7.007,0,0,1,1.33,1.594,5.149,5.149,0,0,1,5.453,0H7.385A2.941,2.941,0,0,1,9.728,1.173l.882,1.175a1.5,1.5,0,0,0,1.185.594H14.53C18.262,2.941,20,4.857,20,8.97l-.026,4.8a6.28,6.28,0,0,1-1.663,4.563A6.267,6.267,0,0,1,13.753,20ZM1.45,6.229v7.543a4.806,4.806,0,0,0,1.24,3.537,4.809,4.809,0,0,0,3.539,1.239h7.524a4.8,4.8,0,0,0,3.533-1.241,4.816,4.816,0,0,0,1.238-3.54l.027-4.8a5.232,5.232,0,0,0-.913-3.52A3.863,3.863,0,0,0,14.53,4.393H11.794A2.953,2.953,0,0,1,9.452,3.22L8.569,2.045a1.486,1.486,0,0,0-1.184-.593H5.453C2.647,1.452,1.45,2.88,1.45,6.229Zm3.9,7.041a.726.726,0,0,1-.1-1.444l.1-.007h9.271a.726.726,0,0,1,.1,1.445l-.1.006Z"
              />
            </svg>
            Pipeline
          </a>
        </li>

        <div class="divider"></div>

        <!-- <li>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="20"
              viewBox="0 0 18 20"
            >
              <g class="a">
                <path
                  class="b"
                  d="M5.1,20a5.143,5.143,0,0,1-3.725-1.354A5.127,5.127,0,0,1,0,14.9V6.485A5,5,0,0,1,1.372,2.8,4.982,4.982,0,0,1,4.584,1.486V.7A.692.692,0,0,1,5.962.6L5.968.7v.771H12.04V.7A.692.692,0,0,1,13.419.6L13.425.7v.789a4.951,4.951,0,0,1,3.249,1.349A5,5,0,0,1,18,6.485v8.489a5.016,5.016,0,0,1-1.37,3.692A5.186,5.186,0,0,1,12.9,20ZM1.384,14.9A3.343,3.343,0,0,0,5.1,18.6H12.9c2.393,0,3.712-1.289,3.712-3.631V8.283H1.384ZM16.615,6.888v-.4a3.611,3.611,0,0,0-.922-2.664,3.5,3.5,0,0,0-2.268-.935v.875a.692.692,0,0,1-1.379.095l-.006-.095v-.9H5.968v.9a.692.692,0,0,1-1.378.095l-.006-.095V2.885a3.235,3.235,0,0,0-3.2,3.6v.4Zm-4.207,7.946a.7.7,0,0,1,.6-.691l.1-.006a.7.7,0,0,1,.094,1.389l-.094.006A.7.7,0,0,1,12.408,14.834Zm-4.1,0a.7.7,0,0,1,.6-.691l.1-.006a.7.7,0,0,1,.095,1.389l-.095.006A.7.7,0,0,1,8.312,14.834Zm-4.1,0a.7.7,0,0,1,.6-.691l.1-.006A.7.7,0,0,1,5,15.525l-.1.006A.7.7,0,0,1,4.207,14.834Zm8.2-3.615a.7.7,0,0,1,.6-.691l.1-.006A.7.7,0,0,1,13.2,11.91l-.094.006A.7.7,0,0,1,12.408,11.219Zm-4.1,0a.7.7,0,0,1,.6-.691l.1-.006a.7.7,0,0,1,.095,1.389l-.095.006A.7.7,0,0,1,8.312,11.219Zm-4.1,0a.7.7,0,0,1,.6-.691l.1-.006A.7.7,0,0,1,5,11.91l-.1.006A.7.7,0,0,1,4.207,11.219Z"
                />
              </g>
            </svg>
            Calendar
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

            Billing
          </a>
        </li> -->
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
</template>

<script>
export default {
  name: "AppLayoutMain",
  data: () => ({
    drawer: true,
  }),
  methods: {
    onLogIn() {
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
