import page from './documents/page';
import blog from './documents/blog';
import siteSettings from './documents/site-settings';

import columns from './objects/columns';
import internalLink from './objects/internal-link';
import link from './objects/link';
import metaFields from './objects/meta';
import socialFields from './objects/social-fields';
import simpleBlockContent from './objects/simple-block-content';

import blockContent from './sections/block-content';
import grid from './sections/grid';
import mainImage from './sections/main-image';
import spacer from './sections/spacer';
import youtube from './sections/youtube';

export const schemasTypes = [
  page,
  blog,
  siteSettings,
  metaFields,
  columns,
  internalLink,
  link,
  simpleBlockContent,
  grid,
  mainImage,
  socialFields,
  blockContent,
  spacer,
  youtube
];
