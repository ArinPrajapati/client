type IndustryIdentifier = {
  type: string;
  identifier: string;
};

type ReadingModes = {
  text: boolean;
  image: boolean;
};

type PanelizationSummary = {
  containsEpubBubbles: boolean;
  containsImageBubbles: boolean;
};

type ImageLinks = {
  smallThumbnail: string;
  thumbnail: string;
};

type VolumeInfo = {
  title: string;
  subtitle?: string;
  authors?: string[];
  publishedDate?: string;
  description?: string;
  industryIdentifiers?: IndustryIdentifier[];
  readingModes?: ReadingModes;
  pageCount?: number;
  printType?: string;
  categories?: string[];
  averageRating?: number;
  ratingsCount?: number;
  maturityRating?: string;
  allowAnonLogging?: boolean;
  contentVersion?: string;
  panelizationSummary?: PanelizationSummary;
  imageLinks?: ImageLinks;
  language?: string;
  previewLink?: string;
  infoLink?: string;
  canonicalVolumeLink?: string;
};

type SaleInfo = {
  country: string;
  saleability: string;
  isEbook: boolean;
  listPrice?: {
    amount: number;
    currencyCode: string;
  };
  retailPrice?: {
    amount: number;
    currencyCode: string;
  };
  buyLink?: string;
  offers?: {
    finskyOfferType: number;
    listPrice: {
      amountInMicros: number;
      currencyCode: string;
    };
    retailPrice: {
      amountInMicros: number;
      currencyCode: string;
    };
  }[];
};

type AccessInfo = {
  country: string;
  viewability: string;
  embeddable: boolean;
  publicDomain: boolean;
  textToSpeechPermission: string;
  epub?: {
    isAvailable: boolean;
    acsTokenLink?: string;
  };
  pdf?: {
    isAvailable: boolean;
    acsTokenLink?: string;
  };
  webReaderLink?: string;
  accessViewStatus: string;
  quoteSharingAllowed: boolean;
};

type SearchInfo = {
  textSnippet: string;
};

type Volume = {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
  saleInfo: SaleInfo;
  accessInfo: AccessInfo;
  searchInfo?: SearchInfo;
};

export type BookVolumesByQuery = {
  kind: string;
  totalItems: number;
  items: Volume[];
};
export type BookVolumeByID = {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
  saleInfo: SaleInfo;
  accessInfo: AccessInfo;
};
