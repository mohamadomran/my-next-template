import type {StructureResolver} from 'sanity/desk';
import {SiteSettings} from './global-settings';
import {PageMenuItem} from './pages';
import {BlogMenuItem} from './blogs';

export const structure: StructureResolver = (S, _context) =>
  S.list()
    .title('Content')
    .items([SiteSettings(S), PageMenuItem(S), BlogMenuItem(S)]);

export const defaultDocumentNode = (S: any, props: any) => {
  return S.document().views([S.view.form()]);
};

export default structure;
