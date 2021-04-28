import { CSValueStore } from '@/cs/CSValueStore'
import { LazyGetter } from 'lazy-get-decorator'
import main from '@/main'
import colors from 'vuetify/es5/util/colors'
import { ProfileData } from '@/model/Data/ProfileData'
import { PortfolioProjectsData } from '@/model/Data/PortfolioProjectsData'
import { Mail } from '@/model/Mail'

export class Model {

  isDarkMode = this.store.booleanProperty('isDarkMode', true, () => {
    this.loadThemeColors()
  })

  @LazyGetter()
  get baseUrl() { return window.location.protocol + '//' + window.location.host }

  @LazyGetter()
  get isProduction() { return process.env.NODE_ENV === 'production' }

  @LazyGetter()
  get projects(): PortfolioProjectsData { return new PortfolioProjectsData() }

  // @LazyGetter()
  // get rcherz(): Rcherz { return new Rcherz() }

  @LazyGetter()
  get mail(): Mail { return new Mail() }

  @LazyGetter()
  get profile(): ProfileData { return new ProfileData() }

  // @LazyGetter()
  // get firebase(): Firebase { return new Firebase() }

  // @LazyGetter()
  // get jobs(): WriterJobs { return new WriterJobs() }

  loadThemeColors() {
    if (this.isDarkMode.value) {
      main.$vuetify.theme.primary = colors.yellow.lighten1
      main.$vuetify.theme.secondary = colors.teal.darken3
      main.$vuetify.theme.accent = colors.orange.darken4
    } else {
      main.$vuetify.theme.primary = colors.blue.base
      main.$vuetify.theme.secondary = colors.indigo.base
      main.$vuetify.theme.accent = colors.orange.darken4
    }
  }

  @LazyGetter()
  get store(): CSValueStore { return new CSValueStore() }

}

export default new Model()

