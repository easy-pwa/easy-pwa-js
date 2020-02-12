export default class Translator {
  private readonly lang: string;

  constructor() {
    this.lang = Translator.getLangName();
  }

  public getTranslations(): JSON {
    switch (this.lang) {
      case 'fr':
        return require('../../translations/fr.json');
      case 'en':
        return require('../../translations/en.json');
      default:
        return require('../../translations/en.json');
    }
  }

  public static getLangName(): string {
    const [currentLang] = navigator.language.split('-');
    return currentLang;
  }
}
