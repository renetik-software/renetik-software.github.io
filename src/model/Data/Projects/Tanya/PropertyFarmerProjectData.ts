import { PortfolioProjectData } from '@/model/Data/PortfolioProjectsData'

export class PropertyFarmerProjectData implements PortfolioProjectData {

  route = 'property-farmer'
  title = 'Property Farmer'
  subtitle = 'Android app in Kotlin, Amazon S3 storage, Spring backend hosted on Heroku'
  date = '(2018-2019)'
  text = 'Android application targeted for real estate business of my client. ' +
    'Application allows to track movement and writes path on map, ' +
    'it allows to collect pictures of properties with addresses ' +
    'and some text and later export it to comma separated file (.csv). ' +
    'It allows also to import csv files with this data to application. ' +
    'Backend was developed using Spring Boot framework and hosted on Heroku platform ' +
    'and it is using google servers for location to address conversion, ' +
    'with some additional parsing logic of google results. ' +
    'Export fo images is made using Amazon S3 storage for now.'
  stars = 5
  images = [
    '/images/Projects/Tanya/PropertyFarmer/property-farmer-24.png',
    '/images/Projects/Tanya/PropertyFarmer/property-farmer-1.png',
    '/images/Projects/Tanya/PropertyFarmer/property-farmer-2.png',
    '/images/Projects/Tanya/PropertyFarmer/property-farmer-3.png',
    '/images/Projects/Tanya/PropertyFarmer/property-farmer-4.png',
    '/images/Projects/Tanya/PropertyFarmer/property-farmer-5.png',
    '/images/Projects/Tanya/PropertyFarmer/property-farmer-6.png',
    '/images/Projects/Tanya/PropertyFarmer/property-farmer-7.png',
    '/images/Projects/Tanya/PropertyFarmer/property-farmer-8.png',
    '/images/Projects/Tanya/PropertyFarmer/property-farmer-9.png',
    '/images/Projects/Tanya/PropertyFarmer/property-farmer-10.png',
    '/images/Projects/Tanya/PropertyFarmer/property-farmer-11.png',
    '/images/Projects/Tanya/PropertyFarmer/property-farmer-12.png',
    '/images/Projects/Tanya/PropertyFarmer/property-farmer-13.png',
    '/images/Projects/Tanya/PropertyFarmer/property-farmer-14.png',
    '/images/Projects/Tanya/PropertyFarmer/property-farmer-15.png',
    '/images/Projects/Tanya/PropertyFarmer/property-farmer-16.png',
    '/images/Projects/Tanya/PropertyFarmer/property-farmer-17.png',
    '/images/Projects/Tanya/PropertyFarmer/property-farmer-18.png',
    '/images/Projects/Tanya/PropertyFarmer/property-farmer-19.png',
    '/images/Projects/Tanya/PropertyFarmer/property-farmer-20.png',
    '/images/Projects/Tanya/PropertyFarmer/property-farmer-21.png',
    '/images/Projects/Tanya/PropertyFarmer/property-farmer-22.png',
    '/images/Projects/Tanya/PropertyFarmer/property-farmer-23.png'
  ]
  links = [
    {
      tip: 'Google Play Store',
      icon: 'fab fa-google-play',
      url: 'https://play.google.com/store/apps/details?id=com.tanya.renetik.redriver'
    },
    {
      tip: 'Customer Web',
      icon: 'fa-globe',
      url: 'http://thedatafarmer.com/'
    }
  ]
  youtube = [
    {
      videoId: 'Uqs16RLw3M4'
    }
  ]
}
