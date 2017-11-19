import Vue from 'vue'
import Page2 from '@/components/Page2'

describe('Page2.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Page2)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
    .to.equal('Page2')
  })
})
