<template>
  <v-text-field :mask="fieldMask" :placeholder="fieldPlaceholder"
                v-model="fieldText">
    <template #prepend-inner>
      <v-btn :color="buttonColor"
             :disabled="isLoading"
             :loading="isLoading"
             @click="onButtonClick()">{{buttonTitle}}
        <template #loader>
          <span class="custom-loader">
            <v-icon dark>autorenew</v-icon>
          </span>
        </template>
      </v-btn>
    </template>
  </v-text-field>
</template>

<style>
  .v-text-field .v-input__prepend-inner {
    margin-top: -4px;
  }

  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }

  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>

<script lang="ts">
  import { Component, Prop, Watch } from 'vue-property-decorator'
  import { CSButtonType } from '@/cs/vuetify/CSVuetifyTypes'
  import { CSVue } from '@/cs/CSVue'

  @Component
  export default class CSTextButton extends CSVue implements CSButtonType {
    @Prop({ default: 'Title' }) title!: string
    @Prop({ default: 'PlaceHolder' }) placeholder!: string
    @Prop() mask!: string
    @Prop() text!: string
    @Prop({ default: 'primary' }) color!: string
    @Prop({ default: false }) readonly loading!: boolean

    buttonColor = this.color
    buttonTitle = this.title
    fieldPlaceholder = this.placeholder ? this.placeholder : this.title
    fieldMask = this.mask ? this.mask : ''
    fieldText = this.text ? this.text : ''
    isLoading = this.loading

    @Watch('loading') onChildChanged() { this.isLoading = this.loading }

    setLoading(loading: boolean) { this.isLoading = loading }

    onButtonClick() { this.$emit('click') }
  }
</script>
