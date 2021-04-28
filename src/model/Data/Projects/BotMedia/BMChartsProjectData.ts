import { PortfolioProjectData } from '@/model/Data/PortfolioProjectsData'

export class BMChartsProjectData implements PortfolioProjectData {
  route = 'bm-charts'
  title = 'Charts for Bot.Media'
  subtitle = 'Configurable Vue.js chart component using chart.js and written in typescript'
  date = '(2019)'
  text = 'For client Bot.Media I created configurable component for charts. ' +
    'I used highly adaptable javascript framework chart.js. ' +
    'I added support for typescript to existing boilerplate codebase from Bo.Media, ' +
    'incorporated chart.js javascript library and adapted it to work as was specified in images from designer.' +
    'I made it easily usable as any Vue component, ' +
    'I made custom tooltip implementation as library one was not sufficient. ' +
    'I am hoping for more projects in Vue.js with combination with typescript using class based approach.'
  links = []
  stars = 5
  images = [
    '/images/Projects/BotMedia/Charts/bot.media-charts-1.png',
    '/images/Projects/BotMedia/Charts/bot.media-charts-2.png',
    '/images/Projects/BotMedia/Charts/bot.media-charts-3.png',
    '/images/Projects/BotMedia/Charts/bot.media-charts-4.png',
    '/images/Projects/BotMedia/Charts/bot.media-charts-5.png',
    '/images/Projects/BotMedia/Charts/bot.media-charts-6.png'
  ]
  youtube = [
    {
      videoId: 'wr_OSaa61Cw'
    }
  ]
}
