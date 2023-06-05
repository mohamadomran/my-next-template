import {RiCheckboxIndeterminateLine} from 'react-icons/ri';
import {defineField} from 'sanity';

const spacer = defineField({
  name: 'spacer',
  type: 'object',
  title: 'Spacer',
  hidden: true,
  description: 'An empty block to create space between sections',
  icon: RiCheckboxIndeterminateLine,
  fields: [
    {
      name: 'size',
      title: 'Size',
      type: 'string',
      options: {
        list: [
          {title: 'Small', value: 'small'},
          {title: 'Medium', value: 'medium'},
          {title: 'Large', value: 'large'},
          {title: 'X-Large', value: 'xlarge'}
        ],
        layout: 'radio'
      }
    }
  ]
});

export default spacer;
