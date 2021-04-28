// import axios from 'axios'
// import model from '@/model/Model'
//
// const localhost = 'http://localhost:8080'
// const remote = 'http://renetik-software-server.herokuapp.com'
// const gcmServiceUrl = '/api/sendGcmMessage?'
// const fcmServiceUrl = '/api/sendFcmMessage?'
// const registrationParam = 'client_registration_id='
// const pushMessageIdParam = '&pushMessageId='
// const commandParam = '&command='
// const argumentParam = '&argument='
// const testGcmRegistrationId = 'APA91bFxjTt4CDzl9H8GEg_AAqMzqEZvIeoAxF6b6efkjdNR3AwpdfntkJysA6ajV-' +
//   'Oq0HcSffo8tgTKWI7j4fOWGEr8i1E4RIX5YHKpDake7D_tGVG0565AJUgZMahqTx7hwJnie18K'
// const testFcmRegistrationId = 'f4hynPNcL00:APA91bE4wOkejqT5bSLXDxKii055MrHqppJDLxcT2c51MY4I5qpJ0D' +
//   'wyHfx6OkHllqWqlkNjWv8zIFS6n7b0Lw9ese2OvGhWiE_TdBe4Hlz4HWSbrhPGeZ88UJf9hEht3jPIkfm9b4OG'
//
// export class Rcherz {
//
//   get serverUrl() { return model.isProduction ? remote : localhost }
//
//   isGCMEnabled = false
//   pushMessageId = 100
//   gcmRegistrationId = testGcmRegistrationId
//   fcmRegistrationId = testFcmRegistrationId
//
//   sendCommand(command: string, argument?: string) {
//     if (this.isGCMEnabled) return this.sendGcmCommand(command, argument)
//     else return this.sendFcmCommand(command, argument)
//   }
//
//   private sendGcmCommand(command: string, argument?: string): Promise<any> {
//     return this.sendCommandImpl(`${this.serverUrl}${gcmServiceUrl}`,
//       this.gcmRegistrationId, command, argument)
//   }
//
//   private sendFcmCommand(command: string, argument?: string): Promise<any> {
//     return this.sendCommandImpl(`${this.serverUrl}${fcmServiceUrl}`,
//       this.fcmRegistrationId, command, argument)
//   }
//
//   private sendCommandImpl(
//     serviceUrl: string, registrationId: string, command: string,
//     argument?: string): Promise<any> {
//     let url = `${serviceUrl}${registrationParam}${registrationId}`
//     url += `${pushMessageIdParam}${this.pushMessageId++}`
//     url += `${commandParam}${command}`
//     if (argument) url += `${argumentParam}${argument}`
//     console.log(`sending get ${url}`)
//     return axios.get(url)
//   }
// }
