import './assets/css/styles.styl'
import './class-component-hooks'
import './plugins/vuetify'
import '@/cs/CSExtensions.ts'
import router from './router'
import { CSToast } from '@/cs/CSToast'
import { Component, Vue } from 'vue-property-decorator'
import { PortalVueBase } from '@/view/PortalVueBase'

import ToastedPlugin from 'vue-toasted'
import { PortalView } from '@/view/View'
import { doLater, is } from '@/cs/extensions/CSLang'

// import * as firebase from 'firebase/app'

const { VLazyImagePlugin } = require('v-lazy-image')

Vue.use(ToastedPlugin)
Vue.use(VLazyImagePlugin)

Vue.config.productionTip = false

Vue.config.errorHandler = error => {
  CSToast.error(`${error.name} ${error.message}`)
  CSToast.error(`${error.stack}`)
  // ga('send', 'event', 'window.onerror', message, navigator.userAgent);
}

@Component({
  router,
  template:
    `<v-app :dark="model.isDarkMode.value" :style="cssProps">
      <v-content :style="contentStyle()">
        <transition name="zoom">
          <router-view/>
        </transition>
      </v-content>
     </v-app>`
})
export class Main extends PortalVueBase {

  isMounted = false
  portal: PortalView | null = null

  mounted() {
    super.mounted()
    this.model.loadThemeColors()
    this.isMounted = true
  }

  cssProps() {
    return {
      '--primary-color': this.$vuetify.theme.primary,
      '--secondary-color': this.$vuetify.theme.secondary,
      '--accent-color': this.$vuetify.theme.accent
    }
  }

  contentStyle() {
    // const isPortal = this.$router.currentRoute.path.includes(this.constants.portalPath)
    const portalPadding = this.$vuetify.breakpoint.smAndUp ? '86px' : '64px'
    return {
      'padding-top': is(this.portal) ? portalPadding : 0
    }
  }
}

const main = new Main()
// firebase.initializeApp(Model.firebase.config)
// firebase.auth().onAuthStateChanged(() => {
//   if (main.isMounted) return
//   main.$mount('#app')
// })

doLater(() => main.$mount('#app'))
export default main


