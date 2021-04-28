export class Routes {

  portal = 'portal'
  portalPath = '/portal'

  about = 'about'

  portfolioRoute = 'portfolio'
  portfolioPath = '/portfolio'

  portfolioProjectsRoute = 'projects'
  portfolioProjectsPath = '/portfolio/projects'
  portfolioVideosRoute = 'videos'
  portfolioVideosPath = '/portfolio/videos'
  portfolioPicturesRoute = 'pictures'
  portfolioPicturesPath = '/portfolio/pictures'

  portfolioProjectPath = 'projects/:projectRoute'
  portfolioProjectFullPath = '/portfolio/projects/:projectRoute'
  portfolioProjectRoute = 'project'

  startProjectRoute = 'start-project'
  startProjectPath = '/portal/start-project'

  // clientRoute = 'client'
  // clientLoginRoute = 'login'
}

export default new Routes()
