import Vue from 'vue'
import Coins from '@/components/Coins'
import router from '@/router'

describe('Coins.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Coins)
    const vm = new Constructor({router}).$mount()
    expect(vm.$el.querySelector('.hello p').textContent).to.equal('Name: ')
  })
})
