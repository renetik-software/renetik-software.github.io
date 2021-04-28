<template>
  <v-switch
    :color="buttonColor"
    :disabled="isLoading"
    :loading="isLoading"
    v-model="isChecked"
  >
    <template #prepend>
      <v-btn :color="buttonColor"
             :disabled="isLoading"
             :loading="isLoading"
             @click="onButtonClick()"
             class="align-center">
        {{buttonTitle}}
        <template #loader>
          <span class="custom-loader">
            <v-icon dark>autorenew</v-icon>
          </span>
        </template>
      </v-btn>
    </template>
  </v-switch>
</template>

<style>
  .v-input--selection-controls .v-input__append-outer, .v-input--selection-controls .v-input__prepend-outer {
    margin-top: -10px;
  }
</style>

<script lang="ts">
  import { Component, Prop, Watch } from 'vue-property-decorator'
  import { CSVue } from '@/cs/CSVue'
  import { CSButtonType } from '@/cs/vuetify/CSVuetifyTypes'

  @Component
  export default class CSSwitchButton extends CSVue implements CSButtonType {
    @Prop({ default: 'Title2' }) title!: string
    @Prop({ default: 'primary' }) color!: string
    @Prop({ default: false }) readonly loading!: boolean

    buttonColor = this.color
    buttonTitle = this.title
    isLoading = this.loading
    isChecked = false

    @Watch('loading') onChildChanged() { this.isLoading = this.loading }

    @Watch('isChecked') onIsCheckedChanged2() { this.$emit('checked') }

    setLoading(loading: boolean) { this.isLoading = loading }

    onButtonClick() { this.$emit('click') }
  }
</script>
