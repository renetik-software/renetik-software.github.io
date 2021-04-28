import { PortfolioProjectData } from '@/model/Data/PortfolioProjectsData'

export class RegiofoodProjectData implements PortfolioProjectData {
  route = 'regiofood'
  title = 'Regiofood'
  subtitle = 'Android as well as iPhone and iPad applications in Java and Objective-C respectively'
  date = '(2011)'
  stars = 3
  text = 'This was my second mobile applications project with shake future now totally forgotten in the dust of time.' +
    'It featured bar code scanner to check originality of products ' +
    'meant to support local Slovak food products consumption.<br/> ' +
    'But the idea and management was pure fail to be honest. ' +
    'Application worked well thought, as was requested by client at that time.'
  images = [
    '/images/Projects/Others/Regiofood/regiofood-1.jpg',
    '/images/Projects/Others/Regiofood/regiofood-2.png',
    '/images/Projects/Others/Regiofood/regiofood-3.jpg',
    '/images/Projects/Others/Regiofood/regiofood-4.png',
    '/images/Projects/Others/Regiofood/regiofood-5.png',
    '/images/Projects/Others/Regiofood/regiofood-6.png',
    '/images/Projects/Others/Regiofood/regiofood-7.png',
    '/images/Projects/Others/Regiofood/regiofood-8.png',
  ]
  links = []
  youtube = []
}
