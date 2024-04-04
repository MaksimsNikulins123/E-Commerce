import type { GlobalConfig } from 'payload/types'

import link from '../fields/link'
import settings from '../fields/settings'
import linkForSocialMedia from '../fields/linkForSocialMedia'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'subscribe',
      label: 'Subscribe',
      type: 'text',
      required: true
    },
    { 
      name: 'greenfinity',
      label: 'Greenfinity',
      type: 'text',
      required: true
    },
    {
      name: 'shopNavItems',
      type: 'array',
      maxRows: 6,
      fields: [
        link({
          appearances: false,
        }),
      ],
    },
    {
      name: 'sellNavItems',
      type: 'array',
      maxRows: 6,
      fields: [
        link({
          appearances: false,
        }),
      ],
    },
    {
      name: 'aboutNavItems',
      type: 'array',
      maxRows: 6,
      fields: [
        link({
          appearances: false,
        }),
      ],
    },
    {
      name: 'helpNavItems',
      type: 'array',
      maxRows: 6,
      fields: [
        link({
          appearances: false,
        }),
      ],
    },
    {
      name: 'socialMedia',
      type: 'array',
      maxRows: 6,
      fields: [
        linkForSocialMedia({
          appearances: false,
        }),
      ],
    },
    {
      name: 'locationSettings',
      type: 'array',
      maxRows: 6,
      fields: [
        settings({
          appearances: false,
        }),
      ],
    },
    {
      name: 'copyright',
      label: 'Copyright',
      type: 'text',
      required: true,
    },
    {
      name: 'additionalLinks',
      type: 'array',
      maxRows: 6,
      fields: [
        link({
          appearances: false,
        }),
      ],
    },
   
  ],
}
