import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug', // будет в URL: /catalog, /contacts и т.д.
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'content',
      type: 'richText', // редактор текста прямо в админке
    },
  ],
}