module.exports = {
  cms_manual_init: true,
  backend: {
    // name: 'github',
    // repo: 'ethancanne/IMF-website',
    // branch: 'main',
    name: 'git-gateway',
    branch: 'main',
  },
  media_folder: 'public/img',
  public_folder: 'img',
  collections: [
    {
      label: 'Website Layout',
      name: 'websiteLayout',
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
        {
          label: 'About And Contact',
          name: 'aboutAndContact',
          file: 'cms/data/websiteLayout/aboutAndContact.json',
          fields: [
            {
              label: 'About Text',
              name: 'about',
              widget: 'markdown',
            },
            {
              label: 'Mailing Address',
              name: 'mailingAddress',
              widget: 'string',
            },
            {
              label: 'Email',
              name: 'email',
              widget: 'string',
            },
            {
              label: 'Facebook Link',
              name: 'facebookLink',
              widget: 'string',
            },
          ],
        },
      ],
    },
    {
      label: 'Page Content',
      name: 'pageContent',
      format: 'json',
      files: [
        {
          label: 'Home',
          name: 'home',
          file: 'cms/data/content/home.json',
          fields: [
            {
              label: 'Banner Image',
              name: 'bannerImage',
              widget: 'image',
            },
            {
              label: 'Description Cards Section',
              name: 'cards',
              widget: 'list',
              allow_add: true,
              fields: [
                {
                  label: 'Title',
                  name: 'title',
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
              label: 'Short Description Section',
              name: 'shortDescription',
              widget: 'object',
              fields: [
                {
                  label: 'Top Description',
                  name: 'topDescription',
                  widget: 'markdown',
                },
                {
                  label: 'Bottom Description',
                  name: 'bottomDescription',
                  widget: 'markdown',
                },
              ],
            },
            {
              label: 'Statistic Section',
              name: 'statistic',
              widget: 'object',
              fields: [
                {
                  label: 'Before Statistic',
                  name: 'beforeStatistic',
                  widget: 'markdown',
                },
                {
                  label: 'After Statistic',
                  name: 'afterStatistic',
                  widget: 'markdown',
                },
              ],
            },
            {
              label: 'Newsletter Section',
              name: 'newsletters',
              widget: 'list',
              fields: [
                {
                  label: 'Title',
                  name: 'title',
                  widget: 'string',
                },
                {
                  label: 'link',
                  name: 'link',
                  widget: 'string',
                },
              ],
            },
          ],
        },
        {
          label: 'About Us',
          name: 'aboutUs',
          file: 'cms/data/content/aboutUs.json',
          fields: [
            {
              label: 'Banner Image',
              name: 'bannerImage',
              widget: 'image',
            },
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
              name: 'mapAndCampus',
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
                  label: 'Position',
                  name: 'position',
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
              name: 'boardOfDirectors',
              widget: 'list',
              allow_add: true,
              fields: [
                {
                  label: 'Name',
                  name: 'name',
                  widget: 'string',
                },
                {
                  label: 'Position',
                  name: 'position',
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
              name: 'haitianStaff',
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
              name: 'enabledToDo',
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

        {
          label: 'Causes',
          name: 'causes',
          file: 'cms/data/content/causes.json',
          fields: [
            {
              label: 'Banner Image',
              name: 'bannerImage',
              widget: 'image',
            },
            {
              label: 'Top Description',
              name: 'topDescription',
              widget: 'markdown',
            },
            {
              label: 'Causes',
              name: 'causes',
              widget: 'list',
              allow_add: true,
              fields: [
                {
                  label: 'Title',
                  name: 'title',
                  widget: 'string',
                },
                {
                  label: 'Description',
                  name: 'description',
                  widget: 'markdown',
                },
              ],
            },
          ],
        },
        {
          label: 'Get Involved',
          name: 'getInvolved',
          file: 'cms/data/content/getInvolved.json',
          fields: [
            {
              label: 'Banner Image',
              name: 'bannerImage',
              widget: 'image',
            },

            {
              label: 'Missions',
              name: 'missions',
              widget: 'list',
              allow_add: true,
              fields: [
                {
                  label: 'Title',
                  name: 'title',
                  widget: 'string',
                },
                {
                  label: 'Image',
                  name: 'image',
                  widget: 'image',
                },
                {
                  label: 'Budget',
                  name: 'budget',
                  widget: 'number',
                },
                {
                  label: 'Description',
                  name: 'description',
                  widget: 'markdown',
                },
              ],
            },

            {
              label: 'Disclaimer',
              name: 'disclaimer',
              widget: 'markdown',
            },
            {
              label: 'Help Areas Description',
              name: 'helpAreasDescription',
              widget: 'markdown',
            },

            {
              label: 'Help Areas',
              name: 'helpAreas',
              widget: 'list',
              allow_add: true,
              fields: [
                {
                  label: 'Icon',
                  name: 'icon',
                  widget: 'image',
                },
                {
                  label: 'Title',
                  name: 'title',
                  widget: 'string',
                },
                {
                  label: 'Description',
                  name: 'description',
                  widget: 'markdown',
                },
              ],
            },

            {
              label: 'Mission Team Visits Images',
              name: 'missionTeamVisitsImages',
              widget: 'list',
              allow_add: true,
              fields: [
                {
                  label: 'Image',
                  name: 'image',
                  widget: 'image',
                },
                {
                  label: 'Alt Text',
                  name: 'altText',
                  widget: 'string',
                },
              ],
            },

            {
              label: 'Mission Trip Videos',
              name: 'missionTripVideos',
              widget: 'list',
              allow_add: true,
              fields: [
                {
                  label: 'Video URL',
                  name: 'url',
                  widget: 'string',
                },
                {
                  label: 'Video Title',
                  name: 'title',
                  widget: 'string',
                },
              ],
            },
          ],
        },

        {
          label: 'Donate',
          name: 'donate',
          file: 'cms/data/content/donate.json',
          fields: [
            {
              label: 'Banner Image',
              name: 'bannerImage',
              widget: 'image',
            },
            {
              label: 'Header Text',
              name: 'header',
              widget: 'string',
            },
            {
              label: 'Description',
              name: 'description',
              widget: 'markdown',
            },
            {
              label: 'Giving Options',
              name: 'givingOptions',
              widget: 'list',
              allow_add: true,
              fields: [
                {
                  label: 'Title',
                  name: 'title',
                  widget: 'string',
                },
                {
                  label: 'Description',
                  name: 'description',
                  widget: 'markdown',
                },
                {
                  label: 'Link Title',
                  name: 'linkTitle',
                  widget: 'string',
                  required: false,
                },
                {
                  label: 'Link',
                  name: 'link',
                  widget: 'string',
                  required: false,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
