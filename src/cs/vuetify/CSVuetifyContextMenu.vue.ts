import { Component, Prop } from 'vue-property-decorator'
import { CSVue } from '@/cs/CSVue'

@Component
export default class CSVuetifyContextMenu extends CSVue {

  @Prop({ required: true }) menuItems!: []

  isContextMenuVisible = false
  contextMenuX = 0
  contextMenuY = 0

  showMenu(e: MouseEvent) {
    this.isContextMenuVisible = false
    this.contextMenuX = e.clientX
    this.contextMenuY = e.clientY
    this.$nextTick(() => { this.isContextMenuVisible = true })
  }
}
