export default {
  "plugins": [],
  "themes": [],
  "customFields": {},
  "themeConfig": {
    "defaultDarkMode": false,
    "navbar": {
      "title": "moostache.io",
      "hideOnScroll": true,
      "logo": {
        "alt": "A glorious mustache",
        "src": "img/logo.svg"
      },
      "links": [
        {
          "to": "projects",
          "label": "Projects",
          "position": "left"
        },
        {
          "to": "blog",
          "label": "Posts",
          "position": "left"
        },
        {
          "to": "docs/",
          "activeBasePath": "docs",
          "label": "Docs",
          "position": "left"
        },
        {
          "href": "https://github.com/mrbradleylee",
          "position": "right",
          "className": "header-github-link"
        },
        {
          "href": "https://codepen.io/mrbradleylee",
          "position": "right",
          "className": "header-codepen-link"
        }
      ]
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "/findme",
          "items": [
            {
              "label": "GitHub",
              "href": "https://github.com/mrbradleylee"
            },
            {
              "label": "CodePen",
              "href": "https://codepen.io/mrbradleylee"
            }
          ]
        },
        {
          "title": "/more",
          "items": [
            {
              "label": "Blog",
              "to": "blog"
            }
          ]
        }
      ],
      "copyright": "© 2020 //moostache.io"
    }
  },
  "title": "moostache.io",
  "tagline": "An experiment in responsive web development.",
  "url": "https://moostache.io",
  "baseUrl": "/",
  "favicon": "img/favicon.ico",
  "organizationName": "moostache.io",
  "projectName": "moostache.io",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "homePageId": "_index",
          "sidebarPath": "C:\\Users\\bradl\\Documents\\github\\docusaurus\\moostache.io\\sidebars.js",
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/blog/"
        },
        "theme": {
          "customCss": "C:\\Users\\bradl\\Documents\\github\\docusaurus\\moostache.io\\src\\css\\custom.css"
        }
      }
    ]
  ]
};