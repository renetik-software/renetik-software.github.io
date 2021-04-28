<template>
  <div :style="{width: this.width,height: this.height}">
    <v-lazy-image :src="src" :src-placeholder="loaderSrc" :style="lazyImageStyles"/>
  </div>
</template>

<style lang="stylus" scoped>
  img.v-lazy-image {
    padding var(--loader-padding)
    object-fit contain
    object-position center center
  }

  img.v-lazy-image-loaded {
    padding 0
    object-fit var(--object-fit)
    object-position var(--object-position)
  }
</style>

<script lang="ts">
  import { Component, Prop } from 'vue-property-decorator'
  import { CSVue } from '@/cs/CSVue'

  @Component
  export default class CSImage extends CSVue {
    @Prop({ required: true }) src!: string
    @Prop({ required: true }) width!: string
    @Prop({ required: true }) height!: string
    @Prop({ default: false }) cover!: boolean
    @Prop({ default: 'center center' }) position!: string
    @Prop({ default: '0' }) loaderPadding!: string
    @Prop({ default: require('@/assets/loaders/loading-6.gif') }) loaderSrc!: string

    lazyImageStyles = {
      'width': '100%',
      'height': '100%',
      '--loader-padding': this.loaderPadding,
      '--object-fit': this.cover ? 'cover' : 'contain',
      '--object-position': this.position
    }
  }
</script>
