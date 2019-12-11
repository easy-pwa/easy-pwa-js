export default class Translator {

  private readonly availableLang: string[] = ['fr', 'en'];

  private lang: string;

  constructor() {
    const metaLang = document.documentElement.lang;
    if (metaLang) {
      this.setLang(metaLang);
    }
  }

  public setLang(lang: string): void {
    if (this.availableLang.includes(lang)) {
      this.lang = lang;
    }
  }

  public getTranslations(): JSON {
    switch(this.lang) {
      case 'fr': return require('../../translations/fr.json');
      case 'en': return require('../../translations/en.json');
      default: return require('../../translations/en.json');
    }
  }
}