import { PortfolioProjectData } from '@/model/Data/PortfolioProjectsData'

export class HandWriterProjectData implements PortfolioProjectData {
  route = 'hand-writer'
  title = 'Hand Writer'
  subtitle = 'Android app in Kotlin, web in Vue.js (Typescript), backend developed with Firebase'
  date = '(2019)'
  text = 'This project was started with wireframes and specification, that was accepted by client, ' +
    'subsequently I developed Android application with primary functionality to showcase it to client, ' +
    'that was too welcomed as well done, ' +
    'later I started build web part with firebase backend and during development ' +
    'I was informed about client difficulties in continuing of financing of project. ' +
    'So I had to stop in first quarter of work done as this project was quite big, ' +
    'still I am waiting for my payments, but I look forward for project resuming.'
  links = []
  stars = 2
  images = [
    '/images/Projects/Tanya/HandWriter/wireframes-mobile.png',
    '/images/Projects/Tanya/HandWriter/wireframes-web.png',
    '/images/Projects/Tanya/HandWriter/hadwriter-web-dev-1.png',
    '/images/Projects/Tanya/HandWriter/hadwriting-android-1.png',
    '/images/Projects/Tanya/HandWriter/hadwriter-web-dev-2.png',
    '/images/Projects/Tanya/HandWriter/hadwriting-android-2.png',
    '/images/Projects/Tanya/HandWriter/hadwriter-web-dev-3.png',
    '/images/Projects/Tanya/HandWriter/hadwriting-android-3.png',
    '/images/Projects/Tanya/HandWriter/hadwriter-web-dev-4.png',
    '/images/Projects/Tanya/HandWriter/hadwriting-android-5.png',
    '/images/Projects/Tanya/HandWriter/wireframe-hadwriter-AppliedJobs.jpg',
    '/images/Projects/Tanya/HandWriter/hadwriting-android-4.png',
    '/images/Projects/Tanya/HandWriter/hadwriting-android-6.png'
  ]
  youtube = [
    {
      videoId: 'dvZya0NVk_M'
    }
  ]
}
