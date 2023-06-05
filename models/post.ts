import {SanityDocument, Slug} from '@sanity/types';
import {MetaFields} from './meta-fields';
import {BlogSections} from './sections';
import {Image} from './sections/image';
import {SimpleBlockContent} from './objects/simple-block-content';

export interface Blog extends SanityDocument {
  _type: 'blog';
  publishedAt: string;
  slug: Slug;
  title: string;
  excerpt: SimpleBlockContent;
  keywords?: string[];
  meta?: MetaFields;
  featuredImage?: Image;
  content?: BlogSections[];
}
