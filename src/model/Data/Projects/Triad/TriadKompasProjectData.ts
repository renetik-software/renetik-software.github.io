import { PortfolioProjectData } from '@/model/Data/PortfolioProjectsData'

export class TriadKompasProjectData implements PortfolioProjectData {
  route = 'triad-kompas'
  title = 'Pilsner & Kozel Compass'
  subtitle = 'iPhone app for finding closest bar for specific beer brand'
  date = '2013'
  text = 'For Triad advertising I created two variations of application for their local beer clients ' +
    'to promote beer brands. App was localized in few languages and was targeting central europe. ' +
    'It was possible to change language at runtime. ' +
    'Applications are not online anymore due to change in Triad business.'
  stars = 4
  images = [
    '/images/Projects/Triad/Kompas/pilsner-2.png',
    '/images/Projects/Triad/Kompas/kozel-1.jpg',
    '/images/Projects/Triad/Kompas/pilsner-1.png',
    '/images/Projects/Triad/Kompas/pilsner-3.png',
    '/images/Projects/Triad/Kompas/pilsner-4.png',
    '/images/Projects/Triad/Kompas/pilsner-5.png',
    '/images/Projects/Triad/Kompas/pilsner-6.png',
    '/images/Projects/Triad/Kompas/pilsner-7.png',
    '/images/Projects/Triad/Kompas/pilsner-8.png'
  ]
  links = []
  youtube = []
}
