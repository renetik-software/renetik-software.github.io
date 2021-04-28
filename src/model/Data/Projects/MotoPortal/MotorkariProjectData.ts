import { PortfolioProjectData } from '@/model/Data/PortfolioProjectsData'

export class MotorkariProjectData implements PortfolioProjectData {
  route = 'motorkari'
  title = 'Motorkari'
  subtitle = 'iPhone and iPad app originally in Objective-C, now rewritten to Swift'
  date = '(2014-2019)'
  stars = 5
  text = 'I am working and continuously improving application for portal motorkari.cz, ' +
    'based on some initial design of Android application that is made by other developer, ' +
    'I developed iOS version while using REST API of the motorkari.cz server.\n' +
    'Principal features are site content viewing and interacting, like forum, advertisements, articles. ' +
    'Then there are interactive maps with points of interest, nice design and UI, supports iPad as well as iPhone.'
  images = [
    '/images/Projects/MotoPortal/Motorkari/motorkari-ios-1.png',
    '/images/Projects/MotoPortal/Motorkari/motorkari-ios-2.png',
    '/images/Projects/MotoPortal/Motorkari/motorkari-ios-3.png',
    '/images/Projects/MotoPortal/Motorkari/motorkari-ios-4.png',
    '/images/Projects/MotoPortal/Motorkari/motorkari-ios-5.png',
    '/images/Projects/MotoPortal/Motorkari/motorkari-ios-6.png',
    '/images/Projects/MotoPortal/Motorkari/motorkari-ios-7.png',
    '/images/Projects/MotoPortal/Motorkari/motorkari-ios-8.png',
    '/images/Projects/MotoPortal/Motorkari/motorkari-ios-9.png',
    '/images/Projects/MotoPortal/Motorkari/motorkari-ios-10.png',
    '/images/Projects/MotoPortal/Motorkari/motorkari-ios-11.png',
    '/images/Projects/MotoPortal/Motorkari/motorkari-ios-12.png',
    '/images/Projects/MotoPortal/Motorkari/motorkari-ios-13.png',
    '/images/Projects/MotoPortal/Motorkari/motorkari-ios-14.png',
    '/images/Projects/MotoPortal/Motorkari/motorkari-ios-15.png',
    '/images/Projects/MotoPortal/Motorkari/motorkari-ios-16.png',
    '/images/Projects/MotoPortal/Motorkari/motorkari-ios-17.png',
    '/images/Projects/MotoPortal/Motorkari/motorkari-ios-18.png',
    '/images/Projects/MotoPortal/Motorkari/motorkari-ios-19.png',
    '/images/Projects/MotoPortal/Motorkari/motorkari-ios-20.png',
    '/images/Projects/MotoPortal/Motorkari/motorkari-ios-21.png',
    '/images/Projects/MotoPortal/Motorkari/motorkari-ios-22.png',
    '/images/Projects/MotoPortal/Motorkari/motorkari-ios-23.png',
    '/images/Projects/MotoPortal/Motorkari/motorkari-ios-24.png'
  ]
  links = [
    {
      tip: 'Application release',
      icon: 'fab fa-app-store-ios',
      url: 'https://itunes.apple.com/us/app/motorkari.cz/id548591868?mt=8'
    },
    {
      tip: 'Moto-portal website',
      icon: 'fa-globe',
      url: 'https://www.motorkari.cz'
    }
  ]
  youtube = [
    {
      videoId: 'VZRrsg4MgVY'
    }
  ]
}
