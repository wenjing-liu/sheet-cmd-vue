import Vue from 'vue'
import Vuex from 'vuex'
import types from './mutation-types'
import i18n from '@/i18n'
import tableHelper from '@/util/tableHelper'

Vue.use(Vuex)

function getDefaultState () {
  return {
    tableX: 0,
    tableY: 0,
    data: [],
    hintMsg: i18n.t('startMsg')
  }
}

export default new Vuex.Store({
  state: getDefaultState(),
  getters: {
    tableX: state => state.tableX,
    tableY: state => state.tableY,
    hintMsg: state => state.hintMsg,
    data: state => state.data
  },
  mutations: {
    [types.SET_TABLE_SIZE] (state, { x, y }) {
      state.tableX = x
      state.tableY = y
      state.data = tableHelper.createTable(x, y)
    },
    [types.SET_CELL_VALUE] (state, { x, y, value }) {
      Vue.set(state.data[x], y, value)
    },
    [types.SET_HINT_MSG] (state, { hintMsg }) {
      state.hintMsg = hintMsg
    },
    [types.RESET_STATE] (state) {
      state = Object.assign(state, { ...getDefaultState() })
    }
  },
  actions: {
    setTableSize ({ commit }, { x, y }) {
      commit(types.SET_TABLE_SIZE, { x, y })
    },
    setCellValue ({ commit }, { x, y, value }) {
      commit(types.SET_CELL_VALUE, { x, y, value })
    },
    setHintMsg ({ commit }, { hintMsg }) {
      commit(types.SET_HINT_MSG, { hintMsg })
    },
    quit ({ commit }) {
      commit(types.RESET_STATE)
    }
  }
})
