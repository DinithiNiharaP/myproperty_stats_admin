import { defineStore } from "pinia";

export const actions = {
  async getProperties({ commit }, { search, propertyType, status, sort }) {
    try {
      const res = await this.$axios.$get(
        `http://localhost:8080/properties/current?search=${search}&propertyType=${propertyType}&status=${status}&sort=${sort}`
      );
      return res;
    } catch (e) {
      console.error(e);
    }
  },
  async getCurrentProperty({ commit }, { propertyId }) {
    try {
      this.$auth.$storage.removeState("_token.local");

      const res = await this.$axios.$get(
        `http://localhost:8080/property/current/${propertyId}`
      );
      return res;
    } catch (e) {
      console.error(e);
    }
  },
  async getOverviewFiltersData(
    { commit },
    { startDate, endDate, portfolios, propertyIds, ownerTypes, ownerIds }
  ) {
    try {
      let portfoliosText = "";
      let propertyIdsText = "";

      if (portfolios && portfolios.length > 0) {
        for (let portfolio of portfolios) {
          let prop = `&portfolios[]=${portfolio}`;
          portfoliosText = portfoliosText.concat(prop);
        }
      }

      if (propertyIds && propertyIds.length > 0) {
        for (let propertyId of propertyIds) {
          console.log(propertyId);
          let prop = `&propertyIds[]=${propertyId}`;
          propertyIdsText = propertyIdsText.concat(prop);
        }
      }

      let text1 = "";
      let text2 = "";

      if (ownerIds && ownerIds.length > 0) {
        for (let ownerId of ownerIds) {
          let prop = `&ids[]=${ownerId}`;
          text1 = text1.concat(prop);
        }
      }

      if (ownerTypes && ownerTypes.length > 0) {
        for (let ownerType of ownerTypes) {
          let prop = `&types[]=${ownerType}`;
          text2 = text2.concat(prop);
        }
      }

      console.log(text1);
      console.log(text2);

      // console.log(`properties/current/overview?years=${year}${portfoliosText}${propertyIdsText}`);

      const res = await this.$axios.$get(
        `http://localhost:8080/properties/current/overview?${portfoliosText}${propertyIdsText}&startDate=${startDate}&endDate=${endDate}${text2}${text1}`
      );
      return res;
    } catch (e) {
      console.error(e);
    }
  },
};
