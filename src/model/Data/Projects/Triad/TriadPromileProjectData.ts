import { PortfolioProjectData } from '@/model/Data/PortfolioProjectsData'

export class TriadPromileProjectData implements PortfolioProjectData {
  route = 'triad-promile'
  title = 'Promile Lady'
  subtitle = 'Android app for testing of alcohol level after some drinks, styled for woman'
  date = '2014'
  text = 'Nice android app for girls to test alcohol level after some drinks ' +
    'and get notification when they are clear to drive. ' +
    'As all Triad applications this app is also now down from application stores.'
  stars = 4
  images = [
    '/images/Projects/Triad/Promile/promile-16.png',
    '/images/Projects/Triad/Promile/promile-1.png',
    '/images/Projects/Triad/Promile/promile-2.jpg',
    '/images/Projects/Triad/Promile/promile-3.png',
    '/images/Projects/Triad/Promile/promile-4.png',
    '/images/Projects/Triad/Promile/promile-5.png',
    '/images/Projects/Triad/Promile/promile-6.png',
    '/images/Projects/Triad/Promile/promile-7.png',
    '/images/Projects/Triad/Promile/promile-8.png',
    '/images/Projects/Triad/Promile/promile-9.png',
    '/images/Projects/Triad/Promile/promile-10.png',
    '/images/Projects/Triad/Promile/promile-11.png',
    '/images/Projects/Triad/Promile/promile-12.png',
    '/images/Projects/Triad/Promile/promile-13.png',
    '/images/Projects/Triad/Promile/promile-14.png',
    '/images/Projects/Triad/Promile/promile-15.png'
  ]
  links = [
    {
      tip: 'Android apps website with possibility to download application',
      icon: 'fa-globe',
      url: 'https://apkpure.com/promile-lady/cs.triad.promileinfowomen'
    },
    {
      tip: 'Android apps website with app review',
      icon: 'fa-globe',
      url: 'https://www.mojandroid.sk/promile-lady-aplikacia-pre-vsetky-zeny/'
    }
  ]
  youtube = []
}
