import { PortfolioProjectData } from '@/model/Data/PortfolioProjectsData'

export class PostAffiliateProProjectData implements PortfolioProjectData {
  route = 'post-affiliate-pro'
  title = 'Post Affiliate Pro Mobile'
  subtitle = 'Two applications, for iPhone and Android, for Quality Unit'
  date = '(2011)'
  stars = 5
  text = 'This was my first Android (Java) and iOS (Objective-C) ' +
    'applications and they are up and running still today, ' +
    'even though they where updated by company internal developers lately, ' +
    'they was mostly redesigned visually.<br/> ' +
    'I take it as proof that i can write code that is understandable ' +
    'and maintainable for long term support and by others.<br/>' +
    'This applications are quite simple, far simpler then my latest ones, ' +
    'but they where ideal to start up my full time freelancer and independent developer path.'
  images = [
    '/images/Projects/QualityUnit/PostAffiliatePro/pap-1.jpg',
    '/images/Projects/QualityUnit/PostAffiliatePro/pap-7.png',
    '/images/Projects/QualityUnit/PostAffiliatePro/pap-2.png',
    '/images/Projects/QualityUnit/PostAffiliatePro/pap-3.png',
    '/images/Projects/QualityUnit/PostAffiliatePro/pap-8.png',
    '/images/Projects/QualityUnit/PostAffiliatePro/pap-4.png',
    '/images/Projects/QualityUnit/PostAffiliatePro/pap-5.png',
    '/images/Projects/QualityUnit/PostAffiliatePro/pap-6.png'
  ]
  links = [
    {
      tip: 'Google Play Store',
      icon: 'fab fa-google-play',
      url: 'https://play.google.com/store/apps/details?id=com.qualityunit.android.postaffiliatepro'
    },
    {
      tip: 'Apple App Store',
      icon: 'fab fa-app-store-ios',
      url: 'https://itunes.apple.com/us/app/post-affiliate-pro/id1100644457?mt=8'
    },
    {
      tip: 'Company website',
      icon: 'fa-globe',
      url: 'https://www.postaffiliatepro.com/mobile-apps/'
    }
  ]
  youtube = []
}
