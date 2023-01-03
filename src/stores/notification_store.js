import { defineStore } from "pinia";
import axios from "axios";

export const useNotificationStore = defineStore("notification", {
  state: () => ({
    notifications: [],
  }),
  getters: {
    getNotifications(state) {
      return state.notifications;
    },
  },
  actions: {
    async getAllNotificationsByUser({ commit }) {
      try {
        this.notifications = await axios.get(
          `http://localhost:8080/notification/user/7`
        );
        return this.notifications;
      } catch (e) {
        console.error(e);
      }
    },
  },
});
