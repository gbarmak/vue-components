// export { default as HelloWorld } from './components/HelloWorld.vue'
// export const foo = 'hello world'
import Vue from 'vue'
import HelloWorld from './components/HelloWorld.vue'

const Components = {
  HelloWorld
}

Object.keys(Components).forEach((name) => {
  Vue.component(name, Components[name])
})

export default Components
