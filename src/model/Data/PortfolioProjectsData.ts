// import '@/cs/CSExtensions'
import { MotorkariProjectData } from '@/model/Data/Projects/MotoPortal/MotorkariProjectData'
import { RcherzIOSProjectData } from '@/model/Data/Projects/Bowbook/RcherzIOSProjectData'
import { HandWriterProjectData } from '@/model/Data/Projects/Tanya/HandWriterProjectData'
import { PropertyFarmerProjectData } from '@/model/Data/Projects/Tanya/PropertyFarmerProjectData'
import { RcherzAndroidProjectData } from '@/model/Data/Projects/Bowbook/RcherzAndroidProjectData'
import { RcherzScoringProjectData } from '@/model/Data/Projects/Bowbook/RcherzScoringProjectData'
import { RenetikIOSProjectData } from '@/model/Data/Projects/RenetikSoftware/RenetikIOSProjectData'
import { RenetikAndroidProjectData } from '@/model/Data/Projects/RenetikSoftware/RenetikAndroidProjectData'
import { ForceQuitMacOSProjectData } from '@/model/Data/Projects/RenetikSoftware/ForceQuitMacOSProjectData'
import { TriadPromileProjectData } from '@/model/Data/Projects/Triad/TriadPromileProjectData'
import { TriadKompasProjectData } from '@/model/Data/Projects/Triad/TriadKompasProjectData'
import { TriadMarkizaProjectData } from '@/model/Data/Projects/Triad/TriadMarkizaProjectData'
import { LiveAgentProjectData } from '@/model/Data/Projects/QualityUnit/LiveAgentProjectData'
import { PostAffiliateProProjectData } from '@/model/Data/Projects/QualityUnit/PostAffiliateProProjectData'
import { TaxicarProjectData } from '@/model/Data/Projects/TaxicarProjectData'
import { RegiofoodProjectData } from '@/model/Data/Projects/RegiofoodProjectData'
import { OmWriterProjectData } from '@/model/Data/Projects/RenetikSoftware/OmWriterProjectData'
import { BMChartsProjectData } from '@/model/Data/Projects/BotMedia/BMChartsProjectData'

export interface PortfolioProjectLink {
  icon: string
  url: string
  tip: string
}

export interface PortfolioProjectYoutubeVideo {
  videoId: string
}

export interface PortfolioProjectData {
  route: string
  title: string
  subtitle: string
  date: string
  text: string
  stars?: number
  images: string[]
  links: PortfolioProjectLink[]
  youtube: PortfolioProjectYoutubeVideo[]
}

export class PortfolioProjectsData extends Map<string, PortfolioProjectData> {

  bmcharts = new BMChartsProjectData()
  omwriter = new OmWriterProjectData()

  handwriter = new HandWriterProjectData()
  propertyFarmer = new PropertyFarmerProjectData()
  motorkari = new MotorkariProjectData()

  rcherzIOS = new RcherzIOSProjectData()
  rcherzAndroid = new RcherzAndroidProjectData()
  rcherzScoring = new RcherzScoringProjectData()

  renetikIOS = new RenetikIOSProjectData()
  renetikAndroid = new RenetikAndroidProjectData()
  forceQuitMacOS = new ForceQuitMacOSProjectData()

  triadMarkiza = new TriadMarkizaProjectData()
  triadPromile = new TriadPromileProjectData()
  triadKompas = new TriadKompasProjectData()

  liveAgent = new LiveAgentProjectData()
  pap = new PostAffiliateProProjectData()
  taxicar = new TaxicarProjectData()
  regiofood = new RegiofoodProjectData()

  constructor() {
    super()
    this.set(this.bmcharts.route, this.bmcharts)

    this.set(this.omwriter.route, this.omwriter)
    this.set(this.handwriter.route, this.handwriter)
    this.set(this.propertyFarmer.route, this.propertyFarmer)
    this.set(this.motorkari.route, this.motorkari)

    this.set(this.rcherzIOS.route, this.rcherzIOS)
    this.set(this.rcherzAndroid.route, this.rcherzAndroid)
    this.set(this.rcherzScoring.route, this.rcherzScoring)

    this.set(this.renetikAndroid.route, this.renetikAndroid)
    this.set(this.renetikIOS.route, this.renetikIOS)
    this.set(this.forceQuitMacOS.route, this.forceQuitMacOS)

    this.set(this.triadMarkiza.route, this.triadMarkiza)
    this.set(this.triadPromile.route, this.triadPromile)
    this.set(this.triadKompas.route, this.triadKompas)

    this.set(this.liveAgent.route, this.liveAgent)
    this.set(this.taxicar.route, this.taxicar)
    this.set(this.regiofood.route, this.regiofood)
    this.set(this.pap.route, this.pap)
  }

  getNextFrom(project: PortfolioProjectData): PortfolioProjectData {
    const projects = this.valuesArray()
    const index = projects.indexOf(project)
    return projects[index + 1]
  }

  getPreviousFrom(project: PortfolioProjectData): PortfolioProjectData {
    const projects = this.valuesArray()
    const index = projects.indexOf(project)
    return projects[index - 1]
  }

  indexOfProject = (project: PortfolioProjectData) => this.valuesArray().indexOf(project)

  indexOfProjectRoute = (route: string) => this.keysArray().indexOf(route)

  get lastIndex() { return this.valuesArray().lastIndex() }
}



