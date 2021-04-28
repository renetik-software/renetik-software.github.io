import { Vue } from 'vue/types/vue'

export interface CSImageViewerType extends Vue {
  showFullScreenImage(index: number): void
}

export interface CSImageGalleryType extends Vue {
  showFullScreenImage(index: number): void
}

export interface CSButtonType extends Vue {
  isChecked?: boolean
  fieldText?: string
  setLoading(loading: boolean): void
}

export interface CSSnackBarType extends Vue {
  showInfo(text: string): void

  showError(text: string): void
}
