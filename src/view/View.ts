import { Vue } from 'vue/types/vue'

export enum PortalViewAnimation {
  slideLeft = 'slide-left',
  slideRight = 'slide-right',
  slide = 'slide',
}

export interface PortalView extends Vue {
  routerTransition: PortalViewAnimation

  readonly topBar: TopBarView

  readonly leftPanel: LeftPanelView
}

export interface TopBarView extends Vue {
  pageTitle(title: string): void
}

export interface LeftPanelView extends Vue {
  isVisible: boolean

  toggleVisibility(): void
}

export interface PortalPageView extends Vue {
  pageTitle: string
}
