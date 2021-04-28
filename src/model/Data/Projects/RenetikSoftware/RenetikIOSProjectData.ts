import { PortfolioProjectData } from '@/model/Data/PortfolioProjectsData'

export class RenetikIOSProjectData implements PortfolioProjectData {
  route = 'renetik-ios'
  title = 'Renetik iOS'
  subtitle = 'Software library in Objective-C and Swift, used in my professional projects '
  date = '2012 - Present'
  text = 'I started with this framework few years ago with my first iOS application ' +
    'and made similar framework with similar classes for Android too so ' +
    'I could write more easily two applications for my clients fro both platforms, ' +
    'one for Android and other for iOS while keeping similar structure of code. ' +
    'Then framework mutated as I was easily developing apps further and lately ' +
    'I started adding code written in Swift'
  stars = 4
  images = [
    '/images/Projects/RenetikSoftware/RenetikIOS/dev-desktop-1.jpg',
  ]
  links = [
    {
      tip: 'Github repository',
      icon: 'fab fa-github',
      url: 'https://github.com/rene-dohan/renetik-ios'
    }
  ]
  youtube = []
}
