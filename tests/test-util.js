import i18n from '@/i18n'
import router from '@/router'
import { mount } from '@vue/test-utils'

function mountComponent (component, options) {
  const defaultOptions = {
    i18n,
    router
  }
  return mount(component, { ...defaultOptions, ...options })
}

export default {
  mountComponent
}
