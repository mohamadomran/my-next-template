import {RiLayoutGridLine} from 'react-icons/ri';
import {defineField} from 'sanity';

const grid = defineField({
  title: 'Grid',
  name: 'grid',
  type: 'object',
  hidden: true,
  description:
    'This is a simple grid component, all items are going to be equally wide',
  icon: RiLayoutGridLine,
  groups: [
    {
      name: 'columns',
      title: 'Columns'
    },
    {
      name: 'items',
      title: 'Items'
    }
  ],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      name: 'columns',
      title: 'Columns',
      type: 'columns',
      group: 'columns'
    },
    {
      name: 'items',
      title: 'Items',
      group: 'items',
      type: 'array',
      options: {
        layout: 'grid'
      },
      of: [{type: 'mainImage'}, {type: 'blockContent'}, {type: 'youtube'}]
    }
  ]
});

export default grid;
