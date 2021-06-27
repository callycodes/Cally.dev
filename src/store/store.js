import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      popup_shown: false,
      popup: {},
      window: {
        width: 0,
        height: 0
      }
    },
    mutations: {

      SET_POPUP(state, popup) {
        state.popup = popup
        state.popup_shown = true;
      },
      SET_WINDOW(state, window) {
        state.window = window
      },
      UNSET_POPUP(state) {
        state.popup_shown = false;
        state.popup = {}
      }
    },
    getters: {
    },
  
    actions: {
      setWindow(store, window) {
        store.commit('SET_WINDOW', window)
      },
      showPopup(store, popup) {
        store.commit('SET_POPUP', popup)
      },
      closePopup(store) {
        store.commit('UNSET_POPUP')
      }
    }
});