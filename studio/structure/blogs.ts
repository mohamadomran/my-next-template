import {RiArticleLine} from 'react-icons/ri';
import type {StructureBuilder} from 'sanity/desk';

export const BlogMenuItem = (S: StructureBuilder) =>
  S.listItem()
    .title('blogs')
    .icon(RiArticleLine)
    .child(
      S.documentTypeList('blog')
        .title('blogs')
        .filter('_type == $type')
        .params({type: 'blog'})
    );
