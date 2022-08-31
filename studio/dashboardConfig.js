export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '630eece740bedd4aaecf73e0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-k35dmkez',
                  apiId: '0a9f09bf-f01c-4b67-bf4a-72422fe2794a'
                },
                {
                  buildHookId: '630eece76c203b512ae8cb3f',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-e1ma2p8o',
                  apiId: '65f1debf-55c5-447e-9cdb-0e918b631c49'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/podoodoo/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-e1ma2p8o.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
