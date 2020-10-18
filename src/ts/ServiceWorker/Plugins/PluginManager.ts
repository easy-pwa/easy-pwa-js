import PageSubstitutionPlugin from './SubstitutionPage';

export default class PluginManager {

  public pageSubstitutionPlugin(): PageSubstitutionPlugin {
    return new PageSubstitutionPlugin();
  }
}
