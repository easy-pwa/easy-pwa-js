import WebManifestData, {WebManifestIcon} from "./Model/WebManifestData";

class WebManifestReader {
  public async read(): Promise<WebManifestData> {
    const manifestPath = this.getManifestPath();

    if (!manifestPath) {
      throw new Error('No manifest declaration found.');
    }

    const manifestContent = await this.getManifestContent(manifestPath);

    return this.deserialize(manifestContent);
  }

  private getManifestContent(manifestPath: string): Promise<JSON|Error> {
    return new Promise((resolve, reject): void => {
    fetch(manifestPath)
      .then(response => response.json())
      .then((data): void => {
        resolve(data);
      })
      .catch(reject)
    });
  }

  private getManifestPath(): string|null {
    const manifestEl: HTMLLinkElement = document.head.querySelector('link[rel="manifest"]');

    return manifestEl ? manifestEl.href : null;
  }

  private deserialize(data: any): WebManifestData {
    const wmd = new WebManifestData();

    wmd.name = this.getStringProperty(data, 'name');
    wmd.shortName = this.getStringProperty(data, 'short_name');
    wmd.startUrl = this.getStringProperty(data, 'start_url');
    wmd.display = this.getStringProperty(data, 'display');
    wmd.description = this.getStringProperty(data, 'description');
    wmd.dir = this.getStringProperty(data, 'dir');
    wmd.lang = this.getStringProperty(data, 'lang');
    wmd.orientation = this.getStringProperty(data, 'orientation');
    wmd.scope = this.getStringProperty(data, 'scope');
    wmd.themeColor = this.getStringProperty(data, 'theme_color');

    if ('icons' in data && Array.isArray(data.icons)) {
      data.icons.forEach((iconData: any) => {
        const webManifestIcon = new WebManifestIcon();
        webManifestIcon.src = iconData.src || null;
        webManifestIcon.sizes = iconData.sizes || null;
        webManifestIcon.type = iconData.type || null;
        wmd.icons.push(webManifestIcon);
      });
    }

    return wmd;
  }

  private getStringProperty(data: any, property: string): string|null {
    if (!(property in data)) {
      return null;
    }

    return data[property];
  }
}

export default new WebManifestReader();
