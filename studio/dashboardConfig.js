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
                  buildHookId: '5d8a0cd19e24b99ca89f91db',
                  title: 'Sanity Studio',
                  name: 'staticfirst-dev-svelte-studio',
                  apiId: 'a92cba42-1c29-47fe-9c71-cccd3dd38ad4'
                },
                {
                  buildHookId: '5d8a0cd1907524a08f7b73d3',
                  title: 'Blog Website',
                  name: 'staticfirst-dev-svelte',
                  apiId: '44aebb11-8c26-4e13-9003-83a896786d51'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mschork/staticfirst-dev-svelte',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://staticfirst-dev-svelte.netlify.com', category: 'apps'}
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
