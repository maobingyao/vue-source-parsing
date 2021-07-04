import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

// 定义了一个Vue的构造函数
// 思考： 这里为何不用class去定义
// 因为在很多情况下在构造函数的原型prototype上进行了很多操作。如果使用class去定义的话  会显得代码风格不一致
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  // 所有功能的入口
  this._init(options)
}
// 注册全局混入
initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue
