module.exports = {
  cms_manual_init: true,
  backend: {
    name: 'github',
    repo: 'ethancanne/IMF-website',
    branch: 'main',
  },
  media_folder: 'public/img',
  public_folder: 'img',
  collections: [
    {
      label: 'Website Layout',
      name: 'website-layout',
      format: 'json',
      files: [
        {
          label: 'Pages',
          name: 'pages',
          file: 'cms/data/websiteLayout/pages.json',
          fields: [
            {
              label: 'Pages',
              name: 'pages',
              widget: 'list',
              allow_add: false,
              fields: [
                {
                  label: 'Title',
                  name: 'title',
                  widget: 'string',
                },
                {
                  label: 'Link',
                  name: 'link',
                  widget: 'string',
                },
                {
                  label: 'Description',
                  name: 'description',
                  widget: 'text',
                },
                {
                  label: 'Image',
                  name: 'image',
                  widget: 'image',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      label: 'Page Content',
      name: 'page-content',
      format: 'json',
      files: [
        {
          label: 'About Us',
          name: 'about-us',
          file: 'cms/data/content/aboutUs.json',
          fields: [
            {
              label: 'Intro Section',
              name: 'intro',
              widget: 'markdown',
            },
            {
              label: 'History Section',
              name: 'history',
              widget: 'object',
              fields: [
                {
                  label: 'Description',
                  name: 'description',
                  widget: 'markdown',
                },
                {
                  label: 'Images',
                  name: 'images',
                  widget: 'list',
                  allow_add: true,
                  fields: [
                    {
                      label: 'Image',
                      name: 'image',
                      widget: 'image',
                    },
                  ],
                },
              ],
            },

            {
              label: 'Map and Campus Section',
              name: 'map-and-campus',
              widget: 'object',
              fields: [
                {
                  label: 'Map',
                  name: 'map',
                  widget: 'object',
                  fields: [
                    {
                      label: 'Description',
                      name: 'description',
                      widget: 'markdown',
                    },
                    {
                      label: 'Image',
                      name: 'image',
                      widget: 'image',
                    },
                  ],
                },
                {
                  label: 'Campus',
                  name: 'campus',
                  widget: 'object',
                  fields: [
                    {
                      label: 'Description',
                      name: 'description',
                      widget: 'markdown',
                    },
                    {
                      label: 'Image',
                      name: 'image',
                      widget: 'image',
                    },
                  ],
                },
              ],
            },
            {
              label: 'Missionaries Section',
              name: 'missionaries',
              widget: 'list',
              allow_add: true,
              fields: [
                {
                  label: 'Name',
                  name: 'name',
                  widget: 'string',
                },
                {
                  label: 'Description',
                  name: 'description',
                  widget: 'markdown',
                },
                {
                  label: 'Image',
                  name: 'image',
                  widget: 'image',
                },
              ],
            },
            {
              label: 'Board of Directors Section',
              name: 'board-of-directors',
              widget: 'list',
              allow_add: true,
              fields: [
                {
                  label: 'Name',
                  name: 'name',
                  widget: 'string',
                },

                {
                  label: 'Image',
                  name: 'image',
                  widget: 'image',
                },
              ],
            },
            {
              label: 'Haitian Staff Section',
              name: 'haitian-staff',
              widget: 'object',
              fields: [
                {
                  label: 'description',
                  name: 'description',
                  widget: 'markdown',
                },

                {
                  label: 'Image',
                  name: 'image',
                  widget: 'image',
                },
              ],
            },

            {
              label: 'Enabled To Do Section',
              name: 'enabled-to-do',
              widget: 'list',
              allow_add: true,
              fields: [
                {
                  label: 'description',
                  name: 'description',
                  widget: 'string',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
