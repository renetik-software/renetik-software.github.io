import { PortfolioProjectData } from '@/model/Data/PortfolioProjectsData'

export class OmWriterProjectData implements PortfolioProjectData {
  route = 'om-writer'
  title = 'Om Writer'
  subtitle = 'Android app in Kotlin, released as first application by Renetik Software'
  date = '(2019)'
  text = 'As my client withdrew from project, I reused some parts of it to create my own application ' +
    'and released it independently. I finished whole concept of handwriting application to make it usable, ' +
    'while simple to use. It features my custom dark design, nice logo, complete automatic state saving, ' +
    'simple but functional, with line thickness, colors and eraser, 20 steps undo and redo, export, ' +
    'save and open of files.'

  links = [
    {
      tip: 'Google Play Store',
      icon: 'fab fa-google-play',
      url: 'https://play.google.com/store/apps/details?id=com.renetik.handwriter'
    }]
  stars = 5
  images = [
    '/images/Projects/RenetikSoftware/OmWriter/omwriter-1.png',
    '/images/Projects/RenetikSoftware/OmWriter/omwriter-2.png',
    '/images/Projects/RenetikSoftware/OmWriter/omwriter-3.png',
    '/images/Projects/RenetikSoftware/OmWriter/omwriter-4.png',
    '/images/Projects/RenetikSoftware/OmWriter/omwriter-5.png',
    '/images/Projects/RenetikSoftware/OmWriter/omwriter-6.png',
    '/images/Projects/RenetikSoftware/OmWriter/omwriter-7.png',
    '/images/Projects/RenetikSoftware/OmWriter/omwriter-8.png',
    '/images/Projects/RenetikSoftware/OmWriter/omwriter-9.png',
    '/images/Projects/RenetikSoftware/OmWriter/omwriter-10.png',
    '/images/Projects/RenetikSoftware/OmWriter/omwriter-11.png',
    '/images/Projects/RenetikSoftware/OmWriter/omwriter-12.png',
    '/images/Projects/RenetikSoftware/OmWriter/omwriter-13.png'
  ]
  youtube = [
    {
      videoId: 'FouMo_eWE3Y'
    }
  ]
}
