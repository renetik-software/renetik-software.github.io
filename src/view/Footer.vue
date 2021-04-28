<template>
  <v-footer dark height="auto">
    <v-card class="accent lighten-1 text-xs-center" flat tile width="100%">
      <v-card-text>
        <v-btn :href="item.url" :key="index" class="mx-3 white--text"
               icon target="_blank" v-for="(item, index) in model.profile.socialLinks">
          <v-icon size="24px">{{ item.icon }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="white--text pt-0">
        Get connected with us on social networks or email!
      </v-card-text>
      <v-divider/>
      <v-card-text class="white--text">
        &copy;2019 — <strong>Renetik Software</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script lang="ts">
  import { Component } from 'vue-property-decorator'
  import { PortalVueBase } from '@/view/PortalVueBase'

  @Component
  export default class Footer extends PortalVueBase {
  }
</script>
