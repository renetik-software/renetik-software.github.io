import axios, { AxiosPromise } from 'axios'
import { CSToast } from '@/cs/CSToast'

const local = 'http://localhost:8080'
const remote = 'https://renetik-software-server.herokuapp.com'
const serviceUrl = '/api/mail/sendStartProject'

export class Mail {

  private get serverUrl() { return remote }

  sendStartProject(text: string): AxiosPromise {
    const url = `${this.serverUrl}${serviceUrl}`
    CSToast.debug(`sending post ${url}`)
    return axios.post(url, { html: text }, { auth: { username: 'api', password: 'F6g7h8J9' } })
  }

}

