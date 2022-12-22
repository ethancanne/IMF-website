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
              ],
            },
          ],
        },
      ],
    },
  ],
};
