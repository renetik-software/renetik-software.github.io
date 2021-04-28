<template>
  <iframe frameborder="0" allowfullscreen :height="height" :src="youtubeUrl()" :width="width"/>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'

  @Component
  export default class CSYoutubeVideo extends Vue {

    @Prop({ required: true }) videoId!: string
    @Prop({ required: true }) width!: string
    @Prop({ required: true }) height!: string

    youtubeUrl(): string {
      return `https://www.youtube.com/embed/${this.videoId}?modestbranding=1&playsinline=0
      &showinfo=0&enablejsapi=1&origin=${window.location.origin}&widgetid=1`
    }
  }
</script>
