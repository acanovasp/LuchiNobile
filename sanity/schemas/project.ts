import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Order in the featured list (1-5 for featured projects)',
      validation: (Rule) => Rule.integer().positive(),
    }),
    defineField({
      name: 'isFeatured',
      title: 'Is Featured',
      type: 'boolean',
      description: 'Show this project in the main page carousel (max 5)',
      initialValue: false,
    }),
    defineField({
      name: 'previewVimeoId',
      title: 'Preview Vimeo ID',
      type: 'string',
      description: 'Vimeo video ID for the short preview loop (e.g., 123456789)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fullVimeoId',
      title: 'Full Video Vimeo ID',
      type: 'string',
      description: 'Vimeo video ID for the full video playback',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      description: 'Thumbnail image for the archive grid',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      client: 'client',
      order: 'order',
      isFeatured: 'isFeatured',
      media: 'thumbnail',
    },
    prepare({ title, client, order, isFeatured, media }) {
      return {
        title: isFeatured ? `${order}. ${title}` : title,
        subtitle: client,
        media,
      }
    },
  },
})

