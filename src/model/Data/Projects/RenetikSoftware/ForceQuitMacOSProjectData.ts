import { PortfolioProjectData } from '@/model/Data/PortfolioProjectsData'

export class ForceQuitMacOSProjectData implements PortfolioProjectData {
  route = 'force-quit-macos'
  title = 'Force Quit'
  subtitle = 'Small desktop application for MacOS written in objective-c'
  date = '2016'
  text = 'Due to frustration of misbehaving app that was hard to find out on activity manager to close it, ' +
    'I developed small utility application residing in system tray to quit any application with window, ' +
    'by simple click. This was never released to official store because I didnt see potential for popularity, ' +
    'even thou I use this app all the time to quit some apps if situation arise.'
  stars = 4
  images = [
    '/images/Projects/RenetikSoftware/ForceQuit/force-quit-1.png',
    '/images/Projects/RenetikSoftware/ForceQuit/force-quit-2.png'
  ]
  links = [
    {
      tip: 'Github repository',
      icon: 'fab fa-github',
      url: 'https://github.com/rene-dohan/force-quit-osx-app'
    }
  ]
  youtube = []
}
