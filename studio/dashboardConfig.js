export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f74dd299141ce0fd2181e8b',
                  title: 'Sanity Studio',
                  name: 'the-new-age-studio',
                  apiId: '493f09aa-9996-408c-9885-bfb7d4c47a69'
                },
                {
                  buildHookId: '5f74dd29fd981a0e80d7b6c1',
                  title: 'Blog Website',
                  name: 'the-new-age',
                  apiId: '4d435ff5-2d47-45f1-91f7-96e03ff610b2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sambaines/the-new-age',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://the-new-age.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
