import main from '@/main'
import titles from '@/model/Titles'
import { CSVue } from '@/cs/CSVue'
import Model from '@/model/Model'
import constants, { Routes } from '@/model/Routes'

export class PortalVueBase extends CSVue {
  main = main
  model = Model
  titles = titles
  constants: Routes = constants
}


