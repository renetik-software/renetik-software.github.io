import { PortfolioProjectData } from '@/model/Data/PortfolioProjectsData'

export class RcherzScoringProjectData implements PortfolioProjectData {
  route = 'rcherz-scoring'
  title = 'Rcherz Scoring'
  subtitle = 'mission critical app for Android used for scoring competitions'
  date = '(2014-2019)'
  text = 'Android application separated from main Rcherz app. <br/>It had to be separated due to special features ' +
    'and stability focus for example: <br/>' +
    '- Protection of closing application during scoring <br/>' +
    '- Special commands from backend to control each device, like loading users, starting, stopping, clear.<br/> ' +
    'This app is basically totally remotely controllable by rcherz backend commands delivered by push messages ' +
    'and also pulling in intervals, ' +
    'as it was critically important to deliver even in problematic wifi conditions outdoor,' +
    'there are also other special features and optimizations, wifi auto connect and others. <br/>' +
    'Application was also fixed for special version of google play services, ' +
    'because of updating issues of older devices on archery competitions.'
  stars = 5
  images = [
    '/images/Projects/Bowbook/RcherzScoring/scoring-4.png',
    '/images/Projects/Bowbook/RcherzScoring/scoring-1.png',
    '/images/Projects/Bowbook/RcherzScoring/scoring-2.png',
    '/images/Projects/Bowbook/RcherzScoring/scoring-3.png',
    '/images/Projects/Bowbook/RcherzScoring/scoring-5.png',
    '/images/Projects/Bowbook/RcherzScoring/scoring-6.png',
    '/images/Projects/Bowbook/RcherzScoring/scoring-7.png',
    '/images/Projects/Bowbook/RcherzScoring/scoring-8.png',
    '/images/Projects/Bowbook/RcherzScoring/scoring-9.png'
  ]
  links = [
    {
      tip: 'Google Play Store',
      icon: 'fab fa-app-store-ios',
      url: 'https://play.google.com/store/apps/details?id=cs.rcherz.scoring'
    },
    {
      tip: 'Rcherz website',
      icon: 'fa-globe',
      url: 'https://www.rcherz.com'
    }
  ]
  youtube = [
    {
      videoId: 'HGWBu4av9z4'
    }
  ]
}
