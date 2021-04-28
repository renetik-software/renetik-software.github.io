import Vue from 'vue'
import Router from 'vue-router'
import About from '@/view/About/About.vue'
import StartProject from '@/view/StartProject/StartProject.vue'
import PortfolioProjects from '@/view/Portfolio/PortfolioProjects.vue'
import PortfolioPictures from '@/view/Portfolio/PortfolioPictures.vue'
import PortfolioProject from '@/view/Portfolio/PortfolioProject.vue'
import Routes from '@/model/Routes'
import PortfolioVideos from '@/view/Portfolio/PortfolioVideos.vue'
import Portal from '@/view/Portal.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/' + Routes.about,
      component: About
    },
    {
      path: Routes.portfolioPath,
      redirect: { path: Routes.portfolioProjectsPath }
    },
    {
      path: Routes.portalPath,
      name: Routes.portal,
      component: Portal,
      children: [
        {
          path: Routes.about,
          name: Routes.about,
          component: About
        },
        {
          path: Routes.portfolioRoute,
          name: Routes.portfolioRoute,
          redirect: { path: Routes.portfolioProjectsPath }
        },
        {
          path: Routes.portfolioProjectsRoute,
          name: Routes.portfolioProjectsRoute,
          alias: Routes.portfolioProjectsPath,
          component: PortfolioProjects
        },
        {
          path: Routes.portfolioProjectPath,
          name: Routes.portfolioProjectRoute,
          alias: Routes.portfolioProjectFullPath,
          component: PortfolioProject, props: true
        },
        {
          path: Routes.portfolioPicturesRoute,
          name: Routes.portfolioPicturesRoute,
          alias: Routes.portfolioPicturesPath,
          component: PortfolioPictures
        },
        {
          path: Routes.portfolioVideosRoute,
          name: Routes.portfolioVideosRoute,
          alias: Routes.portfolioVideosPath,
          component: PortfolioVideos
        },
        {
          path: Routes.startProjectRoute,
          name: Routes.startProjectRoute,
          component: StartProject
        },
        // {
        //   path: Routes.clientRoute,
        //   name: Routes.clientRoute,
        //   component: Client
        // }
      ]
    },
    {
      path: '*',
      redirect: { name: Routes.about }
    }
  ]
})
export default router
