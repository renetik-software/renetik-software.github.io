import { PortfolioProjectData } from '@/model/Data/PortfolioProjectsData'

export class RcherzAndroidProjectData implements PortfolioProjectData {
  route = 'rcherz-android'
  title = 'Rcherz Android'
  subtitle = 'large Android application written in Java'
  date = '(2014-2018)'
  text = 'This is mobile app for rcherz.com website, what is basically social network for sport of archery.<br/>' +
    'There is important scoring part used on competitions, but this application was separated ' +
    'due to more important stability focus in Scoring app.<br/> ' +
    'Here I was trying to deliver cool user interface.<br/>' +
    'Also there have been other special requirements specifically for Scoring and ' +
    'problems with updating of devices, ' +
    'to latest Play services.<br/>' +
    'This application was developed together with her iOS counterpart but they are two beasts, ' +
    'quite complex and similar, still different in implementation and details.'
  stars = 5
  images = [
    '/images/Projects/Bowbook/RcherzAndroid/rcherz-android-1.png',
    '/images/Projects/Bowbook/RcherzAndroid/rcherz-android-2.png',
    '/images/Projects/Bowbook/RcherzAndroid/rcherz-android-3.png',
    '/images/Projects/Bowbook/RcherzAndroid/rcherz-android-4.png',
    '/images/Projects/Bowbook/RcherzAndroid/rcherz-android-5.png',
    '/images/Projects/Bowbook/RcherzAndroid/rcherz-android-6.png',
    '/images/Projects/Bowbook/RcherzAndroid/rcherz-android-7.png',
    '/images/Projects/Bowbook/RcherzAndroid/rcherz-android-8.png',
    '/images/Projects/Bowbook/RcherzAndroid/rcherz-android-9.png',
    '/images/Projects/Bowbook/RcherzAndroid/rcherz-android-10.png',
    '/images/Projects/Bowbook/RcherzAndroid/rcherz-android-11.png',
    '/images/Projects/Bowbook/RcherzAndroid/rcherz-android-12.png',
    '/images/Projects/Bowbook/RcherzAndroid/rcherz-android-13.png',
    '/images/Projects/Bowbook/RcherzAndroid/rcherz-android-14.png',
    '/images/Projects/Bowbook/RcherzAndroid/rcherz-android-15.png',
    '/images/Projects/Bowbook/RcherzAndroid/rcherz-android-16.png'
  ]
  links = [
    {
      tip: 'Google Play Store',
      icon: 'fab fa-google-play',
      url: 'https://play.google.com/store/apps/details?id=cs.rcherz'
    },
    {
      tip: 'Rcherz Website',
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
