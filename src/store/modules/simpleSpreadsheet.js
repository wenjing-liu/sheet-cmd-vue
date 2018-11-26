import Vue from 'vue'
import types from '@/store/mutation-types'
import i18n from '@/i18n'
import tableHelper from '@/util/tableHelper'

function getDefaultState () {
  return {
    tableX: 0,
    tableY: 0,
    data: [],
    hintMsg: i18n.t('startMsg')
  }
}

const getters = {
  tableX: state => state.tableX,
  tableY: state => state.tableY,
  hintMsg: state => state.hintMsg,
  data: state => state.data
}

const mutations = {
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
}

const actions = {
  setTableSize ({ commit, dispatch }, { x, y }) {
    commit(types.SET_TABLE_SIZE, { x, y })
    dispatch('setHintMsg', { hintMsg: '' })
  },
  setCellValue ({ commit, dispatch }, { x, y, value }) {
    commit(types.SET_CELL_VALUE, { x, y, value })
    dispatch('setHintMsg', { hintMsg: '' })
  },
  setHintMsg ({ commit }, { hintMsg }) {
    commit(types.SET_HINT_MSG, { hintMsg })
  },
  quit ({ commit }) {
    commit(types.RESET_STATE)
  }
}

export default {
  state: getDefaultState(),
  getters,
  mutations,
  actions
}
