
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  
{
  path: '/',
  component: ComponentCreator('/'),
  exact: true,
  
},
{
  path: '/blog',
  component: ComponentCreator('/blog'),
  exact: true,
  
},
{
  path: '/blog/heyo',
  component: ComponentCreator('/blog/heyo'),
  exact: true,
  
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags'),
  exact: true,
  
},
{
  path: '/blog/tags/smatterings',
  component: ComponentCreator('/blog/tags/smatterings'),
  exact: true,
  
},
{
  path: '/docs',
  component: ComponentCreator('/docs'),
  exact: true,
  
},
{
  path: '/projects',
  component: ComponentCreator('/projects'),
  exact: true,
  
},
{
  path: '/docs/:route',
  component: ComponentCreator('/docs/:route'),
  
  routes: [
{
  path: '/docs/animal-crossing',
  component: ComponentCreator('/docs/animal-crossing'),
  exact: true,
  
},
{
  path: '/docs/animal-crossing/diy-bug-islands',
  component: ComponentCreator('/docs/animal-crossing/diy-bug-islands'),
  exact: true,
  
},
{
  path: '/docs/animal-crossing/fake-art-checker',
  component: ComponentCreator('/docs/animal-crossing/fake-art-checker'),
  exact: true,
  
},
{
  path: '/docs/animal-crossing/flower-breeding-guide',
  component: ComponentCreator('/docs/animal-crossing/flower-breeding-guide'),
  exact: true,
  
},
{
  path: '/docs/animal-crossing/tool-durability',
  component: ComponentCreator('/docs/animal-crossing/tool-durability'),
  exact: true,
  
},
{
  path: '/docs/animal-crossing/turnip-mania',
  component: ComponentCreator('/docs/animal-crossing/turnip-mania'),
  exact: true,
  
},
{
  path: '/docs/style-guide',
  component: ComponentCreator('/docs/style-guide'),
  exact: true,
  
}],
},
  
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
