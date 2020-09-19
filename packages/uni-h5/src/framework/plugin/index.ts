import { App } from 'vue'

import { initApp } from '@dcloudio/uni-vue'
import { initView, initService } from '@dcloudio/uni-core'
import { isCustomElement } from '@dcloudio/uni-shared'

import { initRouter } from './router'
import { initSystemComponents } from './components'

export default {
  install(app: App) {
    app._context.config.isCustomElement = isCustomElement

    initApp(app)
    initView(app)
    initService(app)
    initSystemComponents(app)

    initRouter(app)
  }
}
