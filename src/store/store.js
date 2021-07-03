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
      },
      scrolling: {
        scrolled: false,
        timestamp: 0
      },
      routing: false
    },
    mutations: {
      SET_ROUTING(state, routing) {
        state.routing = routing;
      },
      SET_SCROLLING(state, scrolling) {
        state.scrolling = scrolling;
      },
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
      setRouting(store, routing) {
        store.commit('SET_ROUTING', routing);
      },
      setScrolling(store, scrolling) {
        store.commit('SET_SCROLLING', scrolling);
      },
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