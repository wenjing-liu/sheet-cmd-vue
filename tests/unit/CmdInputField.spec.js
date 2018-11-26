import { expect } from 'chai'
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import myStore from '@/store/index'
import CmdInputField from '@/components/simpleSpreadsheet/CmdInputField.vue'
import i18n from '@/i18n'
import testUtil from '../test-util'
import sinon from 'sinon'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(i18n)

function cmdSimulator (input, cmd) {
  input.element.value = cmd
  input.trigger('change')
  input.trigger('keyup.enter')
}

describe('CmdInputField.vue', () => {
  let store
  beforeEach(() => {
    store = myStore
  })

  it('value is empty by default', () => {
    const wrapper = testUtil.mountComponent(CmdInputField, { store, localVue })
    expect(wrapper.vm.value).to.equal('')
  })
  it('value is test if input test', () => {
    const wrapper = testUtil.mountComponent(CmdInputField, { store, localVue })
    const input = wrapper.find('input')
    input.element.value = 'test'
    input.trigger('change')
    expect(input.element.value).to.equal('test')
  })
  it('input create  table cmd', () => {
    const spy = sinon.spy()
    const wrapper = testUtil.mountComponent(CmdInputField, { store, localVue })
    wrapper.setMethods({
      createTable: spy
    })
    const input = wrapper.find('input')
    cmdSimulator(input, 'C 20 20')
    expect(spy.callCount).to.be.equal(1)
  })
  it('input insert value cmd', () => {
    const spy = sinon.spy()
    const wrapper = testUtil.mountComponent(CmdInputField, { store, localVue })
    wrapper.setMethods({
      setTableValue: spy
    })

    const input = wrapper.find('input')
    cmdSimulator(input, 'C 20 20')
    cmdSimulator(input, 'N 10 10 10')
    expect(spy.callCount).to.be.equal(1)
  })
  it('input sum cmd', () => {
    const spy = sinon.spy()
    const wrapper = testUtil.mountComponent(CmdInputField, { store, localVue })
    wrapper.setMethods({
      setTableValue: spy
    })
    const input = wrapper.find('input')
    cmdSimulator(input, 'C 20 20')
    cmdSimulator(input, 'N 10 10 10')
    cmdSimulator(input, 'N 10 11 10')
    cmdSimulator(input, 'S 10 10 10 11 10 12')
    expect(spy.callCount).to.be.equal(3)
  })
  it('input quit cmd', () => {
    const stub = sinon.stub()
    const wrapper = testUtil.mountComponent(CmdInputField, { store, localVue })
    wrapper.setMethods({
      quit: stub
    })
    const input = wrapper.find('input')
    cmdSimulator(input, 'Q')
    expect(stub.callCount).to.be.equal(1)
  })
})
