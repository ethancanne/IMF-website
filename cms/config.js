module.exports = {
  cms_manual_init: true,
  backend: {
    name: 'github',
    branch: 'main',
  },
  media_folder: 'public/img',
  public_folder: 'img',
  collections: [
    {
      name: 'pages',
      label: 'Pages',
      format: 'json',
      files: [
        {
          label: 'Pages',
          name: 'pages',
          file: 'cms/data/pages.json',
          fields: [
            {
              label: 'Pages',
              name: 'Pages',
              widget: 'list',
              allow_add: true,
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
