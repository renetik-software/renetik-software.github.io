<template>
  <v-stepper v-model="currentStep" vertical>
    <v-stepper-step :color="componentColor" :complete="currentStep > 1" ref="step1" step="1">
      {{titles.startProjectStep1}}
      <small>{{titles.startProjectStep1Desc}}</small>
    </v-stepper-step>
    <v-stepper-content step="1">
      <v-textarea :placeholder="titles.textAreaPlaceholder" auto-grow box
                  class="pa-2 subheading" clearable ref="step1TextArea" v-model="formDescriptionValue"/>
      <v-btn :color="componentColor" @click="setCurrentStep(2, step2, step2TextArea)">Continue</v-btn>
    </v-stepper-content>

    <v-stepper-step :color="componentColor" :complete="currentStep > 2" ref="step2" step="2">
      {{titles.startProjectStep2}}
      <small>{{titles.startProjectStep2Desc}}</small>
    </v-stepper-step>
    <v-stepper-content step="2">
      <v-textarea :placeholder="titles.textAreaPlaceholder" auto-grow box
                  class="pa-2 subheading" clearable ref="step2TextArea" v-model="formRealisationValue"/>
      <v-btn :color="componentColor" @click="setCurrentStep(3, step3, step3TextArea)">Continue</v-btn>
      <v-btn @click="setCurrentStep(1, step1, step1TextArea)" flat>Back</v-btn>
    </v-stepper-content>

    <v-stepper-step :color="componentColor" :complete="currentStep > 3" ref="step3" step="3">
      {{titles.startProjectStep3}}
      <small>{{titles.startProjectStep3Desc}}</small>
    </v-stepper-step>
    <v-stepper-content step="3">
      <v-textarea :placeholder="titles.textAreaPlaceholder" auto-grow box
                  class="pa-2 subheading" clearable ref="step3TextArea" v-model="formExpectationValue"/>
      <v-btn :color="componentColor" @click="setCurrentStep(4, step4, step4TextArea)">Continue</v-btn>
      <v-btn @click="setCurrentStep(2, step2, step2TextArea)" flat>Back</v-btn>
    </v-stepper-content>

    <v-stepper-step :color="componentColor" ref="step4" step="4">
      {{titles.startProjectStep4}}
      <small>{{titles.startProjectStep4Desc}}</small>
    </v-stepper-step>
    <v-stepper-content step="4">
      <v-textarea :placeholder="titles.textAreaPlaceholder" auto-grow box
                  class="pa-2 subheading" clearable ref="step4TextArea" v-model="formContactValue"/>
      <CSLoadingButton :loading="isFinishButtonLoading" @click="onFinishClick()" color="info" title="Finish"/>
      <v-btn @click="setCurrentStep(3, step3, step3TextArea)" flat>Back</v-btn>
    </v-stepper-content>
  </v-stepper>
</template>

<style lang="stylus" scoped>
</style>

<script lang="ts">
  import { Component } from 'vue-property-decorator'
  import PortalPageBase from '@/view/PortalPageBase'
  import { doLater, stringify } from '@/cs/extensions/CSLang'
  import { Vue } from 'vue/types/vue'
  import { VInput } from '@/cs/CSVuetify'
  import CSLoadingButton from '@/cs/view/CSLoadingButton.vue'

  @Component({ components: { CSLoadingButton } })
  export default class StartProject extends PortalPageBase {

    readonly componentColor = 'secondary'
    pageTitle = this.titles.startProjectPage
    currentStep = 1
    formDescriptionValue = ''
    formRealisationValue = ''
    formExpectationValue = ''
    formContactValue = ''
    isFinishButtonLoading = false

    get step1() { return this.reference<HTMLElement>('step1') }

    get step2() { return this.reference<HTMLElement>('step2') }

    get step3() { return this.reference<HTMLElement>('step3') }

    get step4() { return this.reference<HTMLElement>('step4') }

    get step1TextArea() { return this.reference<VInput>('step1TextArea') }

    get step2TextArea() { return this.reference<Vue>('step2TextArea') }

    get step3TextArea() { return this.reference<Vue>('step3TextArea') }

    get step4TextArea() { return this.reference<Vue>('step4TextArea') }

    beforeRouteEnter(to: any, from: any, next: any) {
      super.beforeRouteEnter(to, from, next)
    }

    mounted() {
      super.mounted()
      this.setCurrentStep(1, this.step1, this.step1TextArea)
    }

    onFinishClick() {
      this.isFinishButtonLoading = true
      this.model.mail.sendStartProject(
        this.formDescriptionValue + '<br>' + this.formRealisationValue + '<br>' +
        this.formExpectationValue + '<br>' + this.formContactValue).
        then(response => {
          if (response.data.success) {
            this.toastSuccess('Email sent, thank you')
            this.resetForm()
          } else this.toastSuccess(`Email not sent, ${response.data.message}`)
        }).
        catch(e => { this.toastError(stringify(e.response ? e.response.data : e)) }).
        finally(() => {this.isFinishButtonLoading = false})
    }

    setCurrentStep(step: number, stepElement: HTMLElement, vtextarea: Vue) {
      this.currentStep = step
      doLater(() => this.$vuetify.goTo(stepElement).then(() => {
        doLater(() => {
          if (!this.isTouchScreen())
            (vtextarea.$el.childNodes[0].childNodes[0].childNodes[0].childNodes[0] as HTMLElement).focus()
        }, 200)
      }), 500)
    }

    private resetForm() {
      this.setCurrentStep(1, this.step1, this.step1TextArea)
      this.formDescriptionValue = ''
      this.formRealisationValue = ''
      this.formExpectationValue = ''
      this.formContactValue = ''
    }

  }
</script>
