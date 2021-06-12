import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      popup_shown: false,
      popup: {}
    },
    mutations: {
      SET_POPUP(state, popup) {
        state.popup = popup
        state.popup_shown = true;
      },
      UNSET_POPUP(state) {
        state.popup_shown = false;
        state.popup = {}
      }
    },
    getters: {
    },
  
    actions: {
      showPopup(store, popup) {
        store.commit('SET_POPUP', popup)
      },
      closePopup(store) {
        store.commit('UNSET_POPUP')
      }
    }
});