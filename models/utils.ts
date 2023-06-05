export interface SanityBlock {
  [key: string]: unknown;
  _type: 'block' | 'image';
}

export type SanityReference = {
  _type: 'reference';
  _key?: string;
  _ref: string;
};

export type SanityAsset = SanityReference;
