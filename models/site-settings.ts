import {SanityDocument} from '@sanity/types';
import {InternalLink} from './objects/internal-link';
import {SocialFields} from './objects/social-fields';

export interface SiteSettings extends SanityDocument {
  _type: 'siteSettings';
  _key: string;
  title: string;
  description: string;
  navigation?: Array<InternalLink>;
  socialFields?: SocialFields;
}
