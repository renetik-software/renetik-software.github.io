import Model from '@/model/Model'
import Constants from '@/model/Routes'

export interface ProfileSocialLinkData {
  icon: string
  url: string
}

export interface WorkExperience {
  client: string
  position: string
  date: string
  title: string
  text: string
}

export class ProfileData {
  name = 'Rene Dohan'
  title = 'Professional Software Developer'
  activityDates = '(2005 - Present)'
  profileImages = [
    '/images/profile/profile_image.jpg', '/images/profile/profile_pv_1.jpg',
    '/images/profile/profile_pv_2.jpg', '/images/profile/profile_pv_3.jpg']
  professionalMotto = 'Creating various software and libraries with passion starting from 2005.'
  aboutMe =
    'My name is Rene Dohan, software developer from Slovakia. ' +
    'I am professional developer with broad scale of abilities.' +
    '<br/>I make and did software such as native mobile applications for iOS and Android, progressive web apps, ' +
    'backend development and desktop apps as well. ' +
    'I am potentially open for new projects and or cooperation. <br/>' +
    'Contact me to discuss details or use a <a href="' + Constants.startProjectPath + '">start page</a>.'
  contactLinks: ProfileSocialLinkData[] = [
    { icon: 'fa-envelope', url: 'mailto:dohan.rene@gmail.com' },
    { icon: 'fab fa-skype', url: 'skype:rene-inno?chat' },
    { icon: 'fab fa-facebook-messenger', url: 'http://m.me/renetiksoftware' }
  ]
  aboutMe2 =
    'I like to work focused on product success, ' +
    'take it as my own and improve and suggest and build to de best possible quality ' +
    'and detail I currently am able to. ' +
    'I love to use new software technologies and frameworks, but always looking to no over-complicate things, ' +
    'make logic simple, readable and easy to understand next time I will have to look at it, ' +
    'what is good for others as well.<br>' +
    'I like to create long term relations/confidence with clients/companies I am working with. ' +
    'Dealing with people with respect is priority, but also with focus on delivery of quality product, ' +
    'so to express valuable opinions even if different from others is a must.<br>' +
    'With my nomad style of living, I prefer remote positions, currently I am in Fiji, ' +
    'will go to australia in october and later probably back to Mexico, ' +
    'where are my favorite places for living right now.<br>' +
    'Favorite editor: Android Studio, Xcode, IntelliJIdea • First computer: Intel 386 SX'

  aboutMe3 =
    'When I was 15 years old I bought my first Intel 386 SX in Vancouver, Canada and brought it to Bratislava.' +
    'and it stopped working suddenly. I completely disassembled it and found factory defect in power supply.' +
    'I was able to fix it actually and I re-assembled the computer while studying all parts, ' +
    'later some years I actually broke it when changing some memory parts.<br><br>' +
    'When I was 16 I already started doing some software development so to speak, ' +
    'it was computer virus in assembler.' +
    'The basic idea was to promote some Anarcho-Communistic ideology to computer users, ' +
    'by forcing them to respond to some ' +
    'simple questions about how ideal world should be like. <br>' +
    'For wrong answers there was prepared surprise of complete wiping of both FAT tables, ' +
    'that cause almost unrepairable data los.' +
    'Thanks god the reproduction/copy routine was not so good written and ' +
    'I subsequently gave up on idea altogether.<br>' +
    'I also played a little with pascal but then abandoned software development and focused' +
    ' on computer hardware and playing games. I then fallen in love with computer hardware, ' +
    'tuning of by bios configurations to accelerate PC and hardware cooling etc, ' +
    'until some years later I came back to software again in one of my first jobs.'


  socialLinks: ProfileSocialLinkData[] = [
    { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/renedohan' },
    { icon: 'fab fa-github', url: 'https://github.com/rene-dohan' },
    { icon: 'fab fa-stack-overflow', url: 'https://stackoverflow.com/users/925135/renetik' },
    { icon: 'fab fa-instagram', url: 'https://www.instagram.com/renetiksoftware' },
    { icon: 'fab fa-twitter', url: 'https://www.twitter.com/renetiksoftware' },
    { icon: 'fab fa-facebook', url: 'https://www.facebook.com/renetiksoftware' },
    { icon: 'fab fa-behance', url: 'https://www.behance.net/renetiksoftware' }
  ]
  experience: WorkExperience[] = [
    {
      client: '<a href="https://renetik-software.github.io/" target="_blank">Renetik Software</a>',
      position: 'Freelance software developer',
      date: '2019 - ...',
      title: 'Native Mobile and Web frontend developer with touches on backend when necessary',
      text:
        `● <a href="${Constants.portfolioProjectsPath}/${Model.projects.bmcharts.route}" >
         ${Model.projects.bmcharts.title}</a> ${Model.projects.bmcharts.subtitle}<br/>` +
        `● <a href="${Constants.portfolioProjectsPath}/${Model.projects.omwriter.route}" >
         ${Model.projects.omwriter.title}</a> ${Model.projects.omwriter.subtitle}<br/>`
    },
    {
      client: '<a href="http://www.thedatafarmer.com/" target="_blank">T Johnson Marketing</a>',
      position: 'Freelance software developer',
      date: '2018 - 2019',
      title: 'Mobile, Web and backend developer',
      text:
        `● <a href="${Constants.portfolioProjectsPath}/${Model.projects.handwriter.route}" >
         ${Model.projects.handwriter.title}</a> ${Model.projects.handwriter.subtitle}<br/>` +
        `● <a href="${Constants.portfolioProjectsPath}/${Model.projects.propertyFarmer.route}" >
         ${Model.projects.propertyFarmer.title}</a> ${Model.projects.propertyFarmer.subtitle}<br/>`
    },
    {
      client: '<a href="https://www.motorkari.cz/" target="_blank">Moto portal s.r.o</a>',
      position: 'iOS developer',
      date: '2017 - Present',
      title: 'Motorkari iOS for iPhone & iPad',
      text:
        `● <a href="${Constants.portfolioProjectsPath}/${Model.projects.motorkari.route}" >
         ${Model.projects.motorkari.title}</a> ${Model.projects.motorkari.subtitle}<br/>`
    },
    {
      client: '<a href="http://rcherz.com" target="_blank">Bowbook, s.r.o.</a>',
      position: 'Mobile applications developer',
      date: '2014 - Present',
      title: 'Rcherz iOS & Rcherz Android & Rcherz Scoring Android',
      text:
        `● <a href="${Constants.portfolioProjectsPath}/${Model.projects.rcherzIOS.route}" >
         ${Model.projects.rcherzIOS.title}</a> ${Model.projects.rcherzIOS.subtitle}<br/>` +
        `● <a href="${Constants.portfolioProjectsPath}/${Model.projects.rcherzAndroid.route}" >
         ${Model.projects.rcherzAndroid.title}</a> ${Model.projects.rcherzAndroid.subtitle}<br/>` +
        `● <a href="${Constants.portfolioProjectsPath}/${Model.projects.rcherzScoring.route}" >
         ${Model.projects.rcherzScoring.title}</a> ${Model.projects.rcherzScoring.subtitle}<br/>`
    },
    {
      client: '<a href="http://rene-dohan.github.io" target="_blank">Renetik Software</a>',
      position: 'Independent software developer',
      date: '2011 - Present',
      title: 'Working on iOS and Android libraries and other hobby projects',
      text:
        `● <a href="${Constants.portfolioProjectsPath}/${Model.projects.renetikAndroid.route}" >
         ${Model.projects.renetikAndroid.title}</a> ${Model.projects.renetikAndroid.subtitle}<br/>` +
        `● <a href="${Constants.portfolioProjectsPath}/${Model.projects.renetikIOS.route}" >
         ${Model.projects.renetikIOS.title}</a> ${Model.projects.renetikIOS.subtitle}<br/>` +
        `● <a href="${Constants.portfolioProjectsPath}/${Model.projects.forceQuitMacOS.route}" >
         ${Model.projects.forceQuitMacOS.title}</a> ${Model.projects.forceQuitMacOS.subtitle}<br/>`
    },
    {
      client: '<a href="https://triad.sk" target="_blank">TRIAD Advertising s.r.o.</a>',
      position: 'Mobile applications developer',
      date: '2011 - 2014',
      title: 'Worked on various iOS and Android applications',
      text:
        `● <a href="${Constants.portfolioProjectsPath}/${Model.projects.triadPromile.route}" >
         ${Model.projects.triadPromile.title}</a> ${Model.projects.triadPromile.subtitle}<br/>` +
        `● <a href="${Constants.portfolioProjectsPath}/${Model.projects.triadKompas.route}" >
         ${Model.projects.triadKompas.title}</a> ${Model.projects.triadKompas.subtitle}<br/>` +
        `● <a href="${Constants.portfolioProjectsPath}/${Model.projects.triadMarkiza.route}" >
         ${Model.projects.triadMarkiza.title}</a> ${Model.projects.triadMarkiza.subtitle}<br/>`
    },
    {
      client: 'Various clients',
      position: 'Independent software developer',
      date: '2010 - 2013',
      title: 'Worked on various iOS and Android applications',
      text:
        `● <a href="${Constants.portfolioProjectsPath}/${Model.projects.liveAgent.route}" >
         ${Model.projects.liveAgent.title}</a> ${Model.projects.liveAgent.subtitle}<br/>` +
        `● <a href="${Constants.portfolioProjectsPath}/${Model.projects.pap.route}" >
         ${Model.projects.pap.title}</a> ${Model.projects.pap.subtitle}<br/>` +
        `● <a href="${Constants.portfolioProjectsPath}/${Model.projects.taxicar.route}" >
         ${Model.projects.taxicar.title}</a> ${Model.projects.taxicar.subtitle}<br/>` +
        `● <a href="${Constants.portfolioProjectsPath}/${Model.projects.regiofood.route}" >
         ${Model.projects.regiofood.title}</a> ${Model.projects.regiofood.subtitle}<br/>`
    },
    {
      client: '<a href="http://qualityunit.com" target="_blank">QualityUnit</a>',
      position: 'Senior developer',
      date: '2008 - 2010',
      title: 'Development with team of Quality unit',
      text:
        '● I have improved my coding and software design skills, team-work, pair-programming, ' +
        'test-driven development, Scrum, working on the large projects, ' +
        'communication with customers while resolving issues<br/>' +
        '● Development of web application customer help-desk support software (Live Agent Pro), ' +
        'Framework based on GWT , PHP , Javascript, Comet, Event driven design , ' +
        'Model View Presenter<br/>' +
        '● Development and fixing problems in web application Post Affiliate Pro. ' +
        'Development of PDF parser and generator (PDF Re-brander) written in PHP , ' +
        'based on Adobe PDF specification. Fixing problems and improvements in old applications I made ' +
        'for QualityUnit (Aff Notify, Unit Miner Studio)'
    },
    {
      client: '<a href="https://halfpixel.sk" target="_blank">Half•Pixel Studio</a>',
      position: 'Developer at Media Creative (later Half•Pixel Studio)',
      date: '2008 - 2008',
      title: 'Development of PDF viewer application',
      text:
        'Working on application for company client, targeting sale of magazines and periodicals.<br/>' +
        'Java (Swing), PHP, PDF, Various Java PDF and other libraries.'
    },
    {
      client: '<a href="http://qualityunit.com" target="_blank">QualityUnit</a>',
      position: 'Junior software developer',
      date: '2005 - 2008',
      title: 'Working on various projects for company clients',
      text:
        '● I made desktop application, editor for Unit miner scripting language, with code highlighting, ' +
        'formatting, some other actions and features to run the scripts an test them. ' +
        'It was based on RCP platform from Eclipse project. Eclipse, Java, JRE, Swing<br/>' +
        '● Working on java server project with other Quality-unit members. J2EE, JSF, Web application<br/>' +
        '● I made windows desktop c# application for company client for doing OCR of documents in large ' +
        'quantities automatically on client server in USA.\n' +
        'C#, OCR, Desktop application<br/>' +
        '● Then made c# desktop application for "post affiliate pro" notifications, ' +
        'this was additional product for company product "post affiliate pro" C# desktop application<br/>' +
        '● I was working on windows desktop application, editor for wireframes ,' +
        'this project was later abandoned because we had some discord about it and then I left company.'
    },
    {
      client: 'Slovak Technical University in Bratislava',
      position: 'Education',
      date: '2001 - 2005',
      title: 'Computer Software Engineering',
      text:
        'Bachelor\'s degree'
    },
    {
      client: 'MOVYS, a.s.',
      position: 'Technician, Web administrator',
      date: '2000 - 2001',
      title: 'Short work for telecommunication company',
      text:
        'Technologies: Html , Linux , Wireless networks<br/>' +
        'Knowledge gained: Web technologies, Linux administration, Installation of hardware in buildings'
    },
    {
      client: 'University of Architecture, Bratislava',
      position: 'PC administrator',
      date: '1999 - 2000',
      title: 'Short work on PC department',
      text:
        'Technologies: Windows , Auto Cad , Networks, Linux'
    },
    {
      client: 'Marsoft Computer s.r.o',
      position: 'Technician, Sales',
      date: '1997 - 1999 ',
      title: 'Working as technician and seller',
      text:
        'Assembling PC\'s, installing software and selling computers and parts' +
        'Knowledge gained: Understand computer hardware and small networks, ' +
        'Windows installations and service, Selling PC\'s, Customer PC service'
    }
  ]
}
