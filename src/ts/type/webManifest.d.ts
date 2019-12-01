export interface WebManifest {
  readonly background_color?: string;
  readonly description?: string;
  readonly dir?: WebManifestDir;
  readonly display?: WebManifestDisplay;
  readonly icons?: WebManifestIcon[];
  readonly lang?: string;
  readonly name?: string;
  readonly orientation?: WebManifestOrientation;
  readonly prefer_related_applications?: boolean;
  readonly related_applications?: WebManifestRelatedApplications;
  readonly scope?: string;
  readonly short_name?: string;
  readonly start_url?: string;
  readonly theme_color?: string;
}

export const enum WebManifestDir {
  ltr,
  rtl,
  auto,
}

export const enum WebManifestDisplay {
  FULLSCREEN = 'fullscreen',
  STANDALONE = 'standalone',
  MINIMAL_UI = 'minimal-ui',
  BROWSER = 'browser',
}

export interface WebManifestIcon {
  src: string;
  sizes: string;
  type?: string;
  density?: number;
}

export const enum WebManifestOrientation {
  'any',
  'natural',
  'landscape',
  'landscape-primary',
  'landscape-secondary',
  'portrait',
  'portrait-primary',
  'portrait-secondary',
}

export interface WebManifestRelatedApplications {
  platform: string;
  url: string;
  id?: string;
}
