<template>
  <!-- <AppLayoutMain />  -->
  <div class="container mt-8">
    <div class="container mb-4">
      <h1>
        <span class="text-neutral cursor-pointer" @click="dashboard"
          >Dashboard/
        </span>
        <span>Overview</span>
      </h1>
    </div>
    <div class="container">
      <div class="flex">
        <SelectAllField
          background-color="background"
          :items="myPortfolios"
          label="Portfolio:"
          @change="onPortfolioChange"
          :data.sync="selectedPortfolio"
        />
        <SelectAllField
          background-color="background"
          :items="allProperties"
          label="Property:"
          @change="onPropertyAllChange"
          :data.sync="selectedProperty"
        />
        <SelectAllField
          background-color="background"
          :items="owners"
          label="Owner:"
          @change="onOwnerChange"
          :value.sync="selectedOwners"
        />

        <!-- <div class="flex justify-center">
          <div class="dropdown dropdown-bottom mr-3">
            <label
              tabindex="0"
              class="flex m-1 border-solid border-2 rounded-md pl-4 pr-4 pb-2 pt-2 text-sm font-semibold text-gray-500"
            >
              Portfolio:
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="caret-down"
                class="w-2 ml-8"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                ></path>
              </svg>
            </label>
            <ul
              tabindex="0"
              class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <div class="flex">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-primary bg-gray-100 rounded"
                  />
                  <label
                    for="default-checkbox"
                    class="ml-2 text-sm font-semibold text-secondary"
                    >Select All</label
                  >
                </div>
              </li>
              <li class="divide"></li>
              <li>
                <div class="flex">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-primary bg-gray-100 rounded"
                  />
                  <label
                    for="default-checkbox"
                    class="ml-2 text-sm font-semibold text-secondary"
                    >Default checkbox</label
                  >
                </div>
              </li>
            </ul>
          </div>
        </div> -->
        <!-- <div>
          <div class="dropdown dropdown-bottom mr-3">
            <label
              tabindex="0"
              class="flex m-1 border-solid border-2 rounded-md pl-4 pr-4 pb-2 pt-2 text-sm font-semibold text-gray-500"
            >
              Property:
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="caret-down"
                class="w-2 ml-8"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                ></path>
              </svg>
            </label>
            <ul
              tabindex="0"
              class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <div class="flex">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-primary bg-gray-100 rounded"
                  />
                  <label
                    for="default-checkbox"
                    class="ml-2 text-sm font-semibold text-secondary"
                    >Select All</label
                  >
                </div>
              </li>
              <li class="divide"></li>
              <li>
                <div class="flex">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-primary bg-gray-100 rounded"
                  />
                  <label
                    for="default-checkbox"
                    class="ml-2 text-sm font-semibold text-secondary"
                    >Default checkbox</label
                  >
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div class="dropdown dropdown-bottom mr-3">
            <label
              tabindex="0"
              class="flex m-1 border-solid border-2 rounded-md pl-4 pr-4 pb-2 pt-2 text-sm font-semibold text-gray-500"
            >
              Owner:
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="caret-down"
                class="w-2 ml-8"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                ></path>
              </svg>
            </label>
            <ul
              tabindex="0"
              class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <div class="flex">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-primary bg-gray-100 rounded"
                  />
                  <label
                    for="default-checkbox"
                    class="ml-2 text-sm font-semibold text-secondary"
                    >Select All</label
                  >
                </div>
              </li>
              <li class="divide"></li>
              <li>
                <div class="flex">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-primary bg-gray-100 rounded"
                  />
                  <label
                    for="default-checkbox"
                    class="ml-2 text-sm font-semibold text-secondary"
                    >Default checkbox</label
                  >
                </div>
              </li>
            </ul>
          </div>
        </div> -->
        <div>
          <div class="dropdown dropdown-bottom">
            <label
              tabindex="0"
              class="flex m-1 border-solid border-2 rounded-md pl-4 pr-4 pb-2 pt-2 text-sm font-semibold text-gray-500"
            >
              Date:
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="caret-down"
                class="w-2 ml-8"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                ></path>
              </svg>
            </label>
            <ul
              tabindex="0"
              class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container bg-white">
        <overview-chart
          :statistics="chartStatistics"
          :units="units"
          :sqft="sqft"
          :loading="loading"
        />
      </div>
      <div class="container bg-white">
        <!-- <overview-table
          :statistics="statistics"
          :startingDate="startingDate"
          :endingDate="endingDate"
        /> -->
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "pinia";
import axios from "axios";
import { useNotificationStore } from "../../stores/notification_store";
// import moment from 'moment';
import AppLayoutMain from "../../components/app-layout-main.vue";
import OverviewChart from "../../components/chart/overview-chart.vue";
import SelectAllField from "../../components/inputs/select-all-field.vue";
export default {
  components: { AppLayoutMain, OverviewChart, SelectAllField },
  data: () => ({
    years: [],
    // proTypes: portfolioOptions,
    primaryId: 0,
    propertyId: 0,
    loading: false,
    properties: [],
    allProperties: [],
    initialProperties: [],
    initialPropertyIds: [],
    dateFilter: 1,
    selectedProperty: [],
    selectedPropertyType: [],
    Portfolios: [],
    selectedPortfolio: [],
    statistics: [],
    chartStatistics: [
      {
        asset_value: 4498367.659539057,
        cashflow: 4872.906666666668,
        date: "2022-01-01",
        debt: 3158793.36,
        equity: 1339574.2995390568,
        revenue: 31815.2,
      },
      {
        asset_value: 4571888.94975431,
        cashflow: 4320.744722222224,
        date: "2022-02-01",
        debt: 3158387.96,
        equity: 1413500.9897543096,
        revenue: 31069.615000000005,
      },
      {
        asset_value: 4645411.026708994,
        cashflow: 6209.133611111113,
        date: "2022-03-01",
        debt: 2978276.19,
        equity: 1667134.8367089941,
        revenue: 31896.8675,
      },
      {
        asset_value: 4718933.891702475,
        cashflow: 7738.246666666668,
        date: "2022-04-01",
        debt: 2972946.09,
        equity: 1745987.8017024754,
        revenue: 32506.561666666672,
      },
      {
        asset_value: 4792457.546036266,
        cashflow: 8257.757222222222,
        date: "2022-05-01",
        debt: 2967597.98,
        equity: 1824859.5660362656,
        revenue: 33410.519166666665,
      },
      {
        asset_value: 4840168.5948,
        cashflow: 9396.433611111112,
        date: "2022-06-01",
        debt: 2962231.78,
        equity: 1877936.8148000003,
        revenue: 34139.2975,
      },
      {
        asset_value: 4913651.198805009,
        cashflow: 9220.52333333333,
        date: "2022-07-01",
        debt: 2956847.4400000004,
        equity: 1956803.758805009,
        revenue: 35068.4925,
      },
      {
        asset_value: 4987134.525656029,
        cashflow: 9740.573888888886,
        date: "2022-08-01",
        debt: 2951444.9,
        equity: 2035689.6256560287,
        revenue: 36005.83833333334,
      },
      {
        asset_value: 5060618.576546899,
        cashflow: 10726.792777777777,
        date: "2022-09-01",
        debt: 2946024.08,
        equity: 2114594.496546899,
        revenue: 37310.67083333334,
      },
      {
        asset_value: 5134103.352673429,
        cashflow: 10408.596666666666,
        date: "2022-10-01",
        debt: 2940584.93,
        equity: 2193518.422673429,
        revenue: 35208.154166666674,
      },
      {
        asset_value: 5207588.855233407,
        cashflow: 9941.170555555556,
        date: "2022-11-01",
        debt: 2935127.4,
        equity: 2272461.4552334067,
        revenue: 32869.60916666667,
      },
      {
        asset_value: 5281075.085426595,
        cashflow: 9285.68611111111,
        date: "2022-12-01",
        debt: 2929651.4,
        equity: 2351423.6854265947,
        revenue: 29852.396666666667,
      },
      {
        asset_value: 5354562.044454738,
        cashflow: 8664.5975,
        date: "2023-01-01",
        debt: 2924156.89,
        equity: 2430405.1544547374,
        revenue: 27167.53666666667,
      },
    ],
    units: 456,
    sqft: 166754,
    startingDate: "",
    endingDate: "",
    isHiddenSideBar: true,
    sm: 8,
    myPortfolios: [],
    // startDate: moment(new Date()).subtract(1, 'Y').format('YYYY-MM'),
    // endDate: moment(new Date()).format('YYYY-MM'),
    selectedMonth: "",
    dateArray: [],
    // maxDate: moment(new Date()).format('YYYY-MM'),
    selectedOwners: [],
    owners: [],
    ownerTypes: [],
    ownerIds: [],
    uniqueEntities: [],
  }),
  /* created() {
    const notificationStore = useNotificationStore();
    notificationStore.getAllNotificationsByUser({});

  }, */
  async fetch() {
    this.generateYears();
    this.getPropertiesByFilters("");

    const res = await this.getAllNotificationsByUser();
    if (res.length === 0) {
      this.isHiddenSideBar = false;
      this.sm = 12;
    }
    this.dateArray = [this.startDate, this.endDate];
  },
  methods: {
    /* ...mapActions({
      fetchProperties: "getProperties",
      getCurrentProperty: "../../property_store/getCurrentProperty",
      getOverviewFiltersData: "../../property_store/getOverviewFiltersData",
    }), */
    dashboard() {
      this.$router.push({ name: "Dashboard" });
    },
/*     onDateChanged(val) {
      console.log(val);
      console.log("starteDate", val[0]);
      console.log("endDate", val[1]);
      this.startDate = val[0];
      this.endDate = val[1];
      let portfolios = [];
      for (let item of this.initialProperties) {
        for (let Property of this.selectedProperty) {
          if (Property == item.propertyId) {
            portfolios.push(item.propertyType);
          }
        }
      }
      this.onchangeFilters(this.selectedProperty, portfolios);
    },
    async getPropertiesByFilters(propertyType) {
      try {
        const res = await this.fetchProperties({
          search: "",
          propertyType: propertyType,
          status: "",
          sort: "",
        });
        for (let property of res) {
          if (property.isActive) {
            let address = property.addressLine1;
            property.text = address.slice(0, 15);
            property.value = property.propertyId;
            property.propertyType = property.propertyType;
            this.properties.push(property);
            this.allProperties.push({
              text: address.slice(0, 15),
              value: property.propertyId,
              portfolio: property.propertyType,
            });

            for (let item of this.proTypes) {
              if (item.value === property.propertyType) {
                this.myPortfolios.push(item);
              }
            }

            const unique = (value, index, self) => {
              return self.indexOf(value) === index;
            };

            this.myPortfolios = this.myPortfolios.filter(unique);

            this.initialPropertyIds.push(property.propertyId);
            this.initialProperties.push(property);
          }
        }
        this.onInitialFilters(this.initialPropertyIds);
      } catch (e) {
        console.error(e);
      } finally {
      }
    },

    async onPropertyAllChange(val) {
      this.ownerTypes = [];
      this.ownerIds = [];
      await this.updateOwnersArray(val);
      if (this.timeout >= 0) {
        clearTimeout(this.timeout);
      }
      this.timeout = setTimeout(async () => {
        this.selectedProperty = val;

        let portfolios = [];
        for (let item of this.initialProperties) {
          for (let Property of this.selectedProperty) {
            if (Property == item.propertyId) {
              portfolios.push(item.propertyType);
            }
          }
        }
        this.onchangeFilters(this.selectedProperty, portfolios);
      }, 1000);
    },

    onPortfolioChange(val) {
      console.log(val);

      if (this.timeout >= 0) {
        clearTimeout(this.timeout);
      }
      this.timeout = setTimeout(() => {
        this.selectedPropertyType = val;

        if (val.length > 0) {
          this.allProperties = [];
          for (let type of val) {
            let properties = this.initialProperties.filter((item) => {
              console.log(item);
              const propertyType = item.propertyType;
              return propertyType.includes(type);
            });
            this.allProperties = this.allProperties.concat(properties);
          }
          let newProperty = [];
          let newPropertyIds = [];
          for (let property of this.allProperties) {
            let address = property.addressLine1;
            property.text = address.slice(0, 15);
            property.value = property.propertyId;
            property.propertyType = property.propertyType;
            this.properties.push(property);
            newProperty.push({
              value: property.propertyId,
              text: address.slice(0, 15),
              portfolio: property.propertyType,
            });

            newPropertyIds.push(property.propertyId);
            this.selectedProperty = newPropertyIds;
          }
          this.allProperties = newProperty;
          console.log(this.allProperties);

          this.onchangeFilters(newPropertyIds, this.selectedPropertyType);
        } else {
          this.allProperties = [];
        }
      }, 1000);
    },

    async onchangeFilters(propertyIds, portfolios) {
      this.loading = true;
      const res = await this.getOverviewFiltersData({
        startDate: this.startDate + "-01",
        endDate: this.endDate + "-01",
        portfolios: portfolios,
        propertyIds: propertyIds,
        ownerTypes: this.ownerTypes,
        ownerIds: this.ownerIds,
      });
      console.log(res);
      this.statistics = res.statistics;
      this.chartStatistics = res.chart;
      this.startingDate = moment(res.chart[0].date).format("MMMM YYYY");
      this.endingDate = moment(res.chart[res.chart.length - 1].date).format(
        "MMMM YYYY"
      );
      this.units = res.units;
      this.sqft = res.sqft;
      this.loading = false;
    },

    async onInitialFilters(propertyIds) {
      this.loading = true;
      await this.updateOwnersArray(propertyIds);

      let allPortfolios = [];
      for (let type of this.myPortfolios) {
        allPortfolios.push(type.value);
      }
      console.log(propertyIds);
      console.log(allPortfolios);
      this.selectedPropertyType = allPortfolios;
      this.selectedProperty = propertyIds;

      const res = await this.getOverviewFiltersData({
        startDate: this.startDate + "-01",
        endDate: this.endDate + "-01",
        portfolios: allPortfolios,
        propertyIds: propertyIds,
        ownerTypes: this.ownerTypes,
        ownerIds: this.ownerIds,
      });
      console.log(res);
      this.statistics = res.statistics;
      this.chartStatistics = res.chart;
      this.startingDate = moment(res.chart[0].date).format("MMMM YYYY");
      this.endingDate = moment(res.chart[res.chart.length - 1].date).format(
        "MMMM YYYY"
      );
      this.units = res.units;
      this.sqft = res.sqft;
      this.loading = false;
    },

    generateYears() {
      let currentYear = moment(new Date()).format("YYYY");
      console.log(Number(currentYear) + 1);
      this.year = [];
      for (let i = 1; i < currentYear - 1899; i++) {
        if (i == 1)
          this.years.push({
            text: `This year (${12 * i} months ago)`,
            value: i,
          });
        else {
          this.years.push({
            text: `Last ${i} years (${12 * i} months ago)`,
            value: i,
          });
        }
      }
    },
    onClickHidden() {
      console.log(this.isHiddenSideBar);

      if (this.isHiddenSideBar == true) {
        this.sm = 12;
      } else {
        this.sm = 8;
      }
      this.isHiddenSideBar = !this.isHiddenSideBar;
    },

    async updateOwnersArray(val) {
      try {
        this.loading = true;
        let properties = val;
        console.log(val);
        this.owners = [];
        let arr = [];
        if (properties && properties.length > 0) {
          for (let propertyId of properties) {
            console.log(propertyId);
            const res = await this.getCurrentProperty({
              propertyId: propertyId,
            });
            if (res && res.entities && res.entities.length > 0) {
              arr.push(...res.entities);
            }
          }

          console.log(arr);
          const key = "taxId";

          let arrayUniqueByKey = [
            ...new Map(arr.map((item) => [item[key], item])).values(),
          ];
          this.uniqueEntities = arrayUniqueByKey;
          console.log(arrayUniqueByKey);

          for (let entity of arrayUniqueByKey) {
            if (entity.ownerType == "entity") {
              this.owners.push({
                text: entity.name + " (entity)",
                type: "entity",
                value: entity.entityId,
                entityId: entity.entityId,
                parentId: entity.parentEntityId,
              });
              if (entity && entity.owners && entity.owners.length > 0) {
                for (let owner of entity.owners) {
                  this.owners.push({
                    text: owner.fname + "" + owner.lname,
                    type: "entityOwner",
                    value: owner.ownerId,
                    entityId: entity.entityId,
                    parentId: owner.entityId,
                  });
                }
              }
            } else {
              if (entity && entity.owners && entity.owners.length > 0) {
                for (let owner of entity.owners) {
                  this.owners.push({
                    text: owner.fname + "" + owner.lname,
                    type: "singleOwner",
                    value: owner.ownerId,
                    entityId: entity.entityId,
                    parentId: entity.parentEntityId,
                  });
                }
              }
            }
          }
        }
      } catch (error) {
      } finally {
      }
    },

    onOwnerChange(obj) {
      console.log(obj);
      console.log(this.selectedOwners);
      if (this.timeout >= 0) {
        clearTimeout(this.timeout);
      }
      this.timeout = setTimeout(() => {
        console.log(obj);
        let types = [];
        if (obj && obj.length > 0) {
          for (let i = 0; i < obj.length; i++) {
            let item = this._.find(this.owners, function (owner) {
              return owner.value === obj[i];
            });
            types.push(item.type);
            if (item.type == "entity") {
              console.log("==================================");
              console.log(obj[i]);
            }
            this.getChildsByEntityId(obj[i]);
          }
        }
        if (obj.length == this.owners.length) this.selectedOwners = obj;
        // this.ownerTypes = types;
        // this.ownerIds = obj;
        // console.log(types);
        // console.log(obj);
        console.log(this.selectedOwners);
        let portfolios = [];
        for (let item of this.initialProperties) {
          for (let Property of this.selectedProperty) {
            if (Property == item.propertyId) {
              portfolios.push(item.propertyType);
            }
          }
        }
        this.onchangeFilters(this.selectedProperty, portfolios);
      }, 1000);
    },

    onChangeLength(val) {
      // if(val===0){
      //   this.isHiddenSideBar == true
      //    this.sm = 12;
      // }
      // alert(val)
    },

    async getChildsByEntityId(id) {
      var newItem1 = this.owners.filter((entity) => {
        return entity.parentId == id;
      });

      let child = this._.cloneDeep(newItem1);
      for (let item of newItem1) {
        if (item.type == "entity") {
          var newItem2 = this.owners.filter((entity) => {
            return entity.parentId == item.entityId;
          });
          newItem1.push(...newItem2);
          child.push(...newItem2);
        }
      }

      let arr = this._.cloneDeep(this.selectedOwners);
      for (let item of child) {
        let newItem2 = this._.find(arr, function (id) {
          return id == item.value;
        });
        if (!newItem2) arr.push(item.value);
      }
      this.selectedOwners = arr;

      let types = [];
      for (let selectedItem of this.selectedOwners) {
        let newItem2 = this._.find(this.owners, function (entity) {
          return entity.value == selectedItem;
        });
        types.push(newItem2.type);
      }

      this.ownerTypes = types;
      this.ownerIds = this.selectedOwners;
    }, */
  },
};
</script>
<style scoped>
h1 {
  color: #0f0d36;
  text-align: left;
  font-size: 20px;
  font-weight: bold;
}

p {
  width: 452px;
  text-align: center;
}

.container {
  padding-left: 8%;
}
</style>
