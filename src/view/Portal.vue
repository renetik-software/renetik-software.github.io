<template>
  <div>
    <TopBar ref="topBar"/>
    <LeftPanel class="hidden-sm-and-up" ref="leftPanel"/>
    <transition :name="routerTransition" mode="out-in">
      <!--:key="$route.fullPath" is here to reinitialize components when parameters change-->
      <router-view :key="$route.fullPath"/>
    </transition>
    <Footer xs12/>
  </div>
</template>

<style lang="stylus">
  @media only screen and (max-width: 320px)
    .container {
      padding: 8px;
    }
</style>

<style lang="stylus" scoped>

  .slide-enter-active
    transition: transform 0.3s ease-in

  .slide-leave-active
    transition: transform 0.1s ease-in

  .slide-enter
    transform: translateY(100%)

  .slide-leave-to
    transform: translateY(100%)

  .slide-left-enter-active,
  .slide-left-leave-active,
  .slide-right-enter-active,
  .slide-right-leave-active
    transition-property: height, opacity, transform
    transition-timing-function: ease-in
    overflow: hidden

  .slide-left-enter-active,
  .slide-right-enter-active
    transition-duration: 0.3s

  .slide-left-leave-active,
  .slide-right-leave-active
    transition-duration: 0.1s

  .slide-left-enter,
  .slide-right-leave-active
    transform: translate(100%)

  .slide-left-leave-active,
  .slide-right-enter
    transform: translate(-100%)

</style>

<script lang="ts">
  import { Component } from 'vue-property-decorator'
  import { PortalVueBase } from '@/view/PortalVueBase'
  import TopBar from '@/view/TopBar.vue'
  import LeftPanel from '@/view/LeftPanel.vue'
  import { LeftPanelView, PortalView, PortalViewAnimation, TopBarView } from '@/view/View'
  import Footer from '@/view/Footer.vue'
  import { doLater } from '@/cs/extensions/CSLang'

  @Component({ components: { Footer, TopBar, LeftPanel } })
  export default class Portal extends PortalVueBase implements PortalView {

    routerTransition = PortalViewAnimation.slide

    get leftPanel() { return this.reference<LeftPanelView>('leftPanel') }

    get topBar() { return this.reference<TopBarView>('topBar') }

    mounted() {
      super.mounted()
      this.main.portal = this
      this.$router.afterEach(() => {
        doLater(() => { this.routerTransition = PortalViewAnimation.slide }, 500)
      })
    }

    destroyed() {
      this.main.portal = null
    }
  }
</script>
