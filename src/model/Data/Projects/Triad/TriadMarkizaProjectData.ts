import { PortfolioProjectData } from '@/model/Data/PortfolioProjectsData'

export class TriadMarkizaProjectData implements PortfolioProjectData {
  route = 'triad-markiza'
  title = 'TV Markiza Archiv'
  subtitle = 'iPhone and iPad app for TV Markiza'
  date = '2014'
  text = 'Application made for Triad advertising agency for their client TV Markiza, ' +
    'what is most popular TV station in Slovakia. It was successfully launched by me to App Store, ' +
    'later I transferred app to store account of TV Markiza. ' +
    'They decided later to stop supporting watching of TV content by mobile devices altogether.'
  stars = 4
  images = [
    '/images/Projects/Triad/Markiza/markiza-2.png',
    '/images/Projects/Triad/Markiza/markiza-1.jpg',
    '/images/Projects/Triad/Markiza/markiza-3.jpg',
    '/images/Projects/Triad/Markiza/markiza-4.jpg',
    '/images/Projects/Triad/Markiza/markiza-5.jpg',
    '/images/Projects/Triad/Markiza/markiza-6.jpg',
  ]
  links = []
  youtube = []
}
