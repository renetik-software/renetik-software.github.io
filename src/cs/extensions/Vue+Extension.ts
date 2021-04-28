import Vue from 'vue'
import { CSToast } from '@/cs/CSToast'

declare module 'vue/types/vue' {
  interface Vue {
    reference<Type extends Vue | Element | Vue[] | Element[]>(id: string): Type

    isTouchScreen(): boolean

    toastDebug(title: any): void

    toastInfo(title: any): void

    toastSuccess(title: any): void

    toastWarn(title: any): void

    toastError(title: any): void
  }
}

Vue.prototype.reference = function <Type>(id: string): Type {
  return this.$refs[id] as Type
}

Vue.prototype.isTouchScreen = () => {
  try {
    document.createEvent('TouchEvent')
    return true
  } catch (e) {
    return false
  }
}

Vue.prototype.toastDebug = (title: any) => CSToast.debug(title)
Vue.prototype.toastInfo = (title: any) => CSToast.info(title)
Vue.prototype.toastSuccess = (title: any) => CSToast.success(title)
Vue.prototype.toastWarn = (title: any) => CSToast.warn(title)
Vue.prototype.toastError = (title: any) => CSToast.error(title)
