<template>
  <v-snackbar
    v-bind:color="snackColor"
    v-bind:multi-line="snackMultiLine"
    v-bind:timeout="snackTimeout"
    v-bind:vertical="snackVertical"
    v-model="snackVisible">
    {{ snackText }}
    <v-btn @click="snackVisible = false" dark flat>
      Close
    </v-btn>
  </v-snackbar>
</template>

<script lang="ts">
  import { Component } from 'vue-property-decorator'
  import { CSSnackBarType } from '@/cs/vuetify/CSVuetifyTypes'
  import { CSVue } from '@/cs/CSVue'

  @Component
  export default class CSSnackBar extends CSVue implements CSSnackBarType {
    snackVisible = false
    snackMultiLine = true
    snackColor = 'white'
    snackTimeout = 6000
    snackText = 'none'
    snackVertical = true

    showInfo(text: string) {
      console.log(text)
      this.snackColor = 'info'
      this.snackText = text
      this.snackVisible = true
    }

    showError(text: string) {
      console.log(text)
      this.snackColor = 'error'
      this.snackText = text
      this.snackVisible = true
    }
  }
</script>
