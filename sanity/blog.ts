import { title } from "process";

// sanity/blog.ts
export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Write Your Blog Name',
      },
      {
        name: 'subheading',
        type: 'string',
        title: 'Write A Suitable Subheading',
      },
      {
        name: 'description',
        type: 'string',
        title: 'Write Description Of Your Blog',
      },
      {
        name: 'detail',
        type: 'string',
        title: 'Write Detail Paragraph About Your Blog',
      },
      {
        name: 'image',
        type: 'image',
        title: 'Upload A Relevant Image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
          source: 'name', // Automatically generate slug from the blog name
          maxLength: 96,
        },
      },
    ],
  };
  