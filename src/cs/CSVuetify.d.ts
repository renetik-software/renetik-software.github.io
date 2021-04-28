import { Vue } from 'vue/types/vue'

export interface VInput extends Vue {
  lazyValue: boolean
}

export interface VSwitch extends VInput {
}

export interface VMenu extends Vue {
  isActive: boolean
}

export interface VBtn extends Vue {
  isActive: boolean
}
