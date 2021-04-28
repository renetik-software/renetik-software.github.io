import { Vue } from 'vue-property-decorator'
import model from '@/model/Model'

export class CSToast {
  static success(title: any) {
    console.log(title)
    Vue.toasted.show(`${title}`, {
      position: 'bottom-center',
      duration: 4000,
      fullWidth: true,
      icon: 'check',
      type: 'success',
      theme: 'bubble',
      action: {
        text: '',
        icon: 'close',
        onClick: (e, it) => { it.goAway(200) }
      },
      iconPack: 'fontawesome'
    })
  }

  static info(title: any) {
    console.log(title)
    Vue.toasted.show(`${title}`, {
      position: 'bottom-center',
      duration: 4000,
      fullWidth: false,
      icon: 'info',
      type: 'info',
      theme: 'bubble',
      action: {
        text: '',
        icon: 'close',
        onClick: (e, it) => { it.goAway(200) }
      },
      iconPack: 'fontawesome'
    })
  }

  static warn(title: any) {
    console.log(title)
    Vue.toasted.show(`${title}`, {
      position: 'bottom-center',
      duration: 4000,
      fullWidth: false,
      icon: 'warning',
      type: 'default',
      theme: 'bubble',
      action: {
        text: '',
        icon: 'close',
        onClick: (e, it) => { it.goAway(500) }
      },
      iconPack: 'fontawesome'
    })
  }

  static error(title: any) {
    console.log(title)
    Vue.toasted.show(`${title}`, {
      position: 'bottom-center',
      duration: 10000,
      fullWidth: false,
      icon: 'error',
      type: 'error',
      action: {
        text: '',
        icon: 'close',
        onClick: (e, it) => { it.goAway(500) }
      }
    })
  }

  static debug(title: any) {
    console.log(title)
    if (model.isProduction) return
    Vue.toasted.show(`${title}`, {
      position: 'bottom-center',
      duration: 4000,
      fullWidth: false,
      icon: 'info',
      type: 'info',
      action: {
        text: '',
        icon: 'close',
        onClick: (e, it) => { it.goAway(200) }
      }
    })
  }
}
