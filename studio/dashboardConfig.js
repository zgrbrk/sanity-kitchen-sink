export default {
  widgets: [
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
                  buildHookId: '60f54dad7a18c6df3854e042',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-arquf1v6',
                  apiId: 'deaf27ca-2a77-4be6-9bbe-4b09f1e14150'
                },
                {
                  buildHookId: '60f54dadb66d4be1d603c82e',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ghh7jnxg',
                  apiId: '476f35a6-a9e8-4bd2-af0e-5fd902e52afc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zgrbrk/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ghh7jnxg.netlify.app', category: 'apps'}
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
