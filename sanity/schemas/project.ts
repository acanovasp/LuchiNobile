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
      name: 'previewVideo',
      title: 'Preview Video (WebM/MP4)',
      type: 'file',
      description: 'Self-hosted video for instant loading. Upload a short loop (5-15s) at 1080p. Used on homepage and archive grid (if large).',
      options: {
        accept: 'video/webm,video/mp4',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'archiveSize',
      title: 'Archive Grid Size',
      type: 'string',
      description: 'Size in the archive grid. Large items show video, small items show thumbnail.',
      options: {
        list: [
          { title: 'Small (1x1) - Shows thumbnail', value: 'small' },
          { title: 'Large (2x2) - Shows preview video', value: 'large' },
        ],
        layout: 'radio',
      },
      initialValue: 'small',
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

