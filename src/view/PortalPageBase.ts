import { PortalVueBase } from '@/view/PortalVueBase'
import { PortalPageView } from '@/view/View'

export default abstract class PortalPageBase extends PortalVueBase implements PortalPageView {

  abstract pageTitle: string

  beforeRouteEnter(to: any, from: any, next: any) {
    next((vm: PortalPageView) => {
      const self = vm as PortalPageBase
      self.main.portal!.topBar.pageTitle(self.pageTitle)
    })
    next()
  }
}
