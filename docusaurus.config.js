module.exports = {
  title: "moostache.io",
  tagline: "An experiment in responsive web development.",
  url: "https://moostache.io",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "moostache.io", // Usually your GitHub org/user name.
  projectName: "moostache.io", // Usually your repo name.
  themeConfig: {
    //disableDarkMode: true,
    defaultDarkMode: false,
    navbar: {
      title: "moostache.io",
      hideOnScroll: true,
      logo: {
        alt: "A glorious mustache",
        src: "img/logo.svg",
      },
      links: [
        {
          to: "projects",
          label: "Projects",
          position: "left",
        },
        {
          to: "posts",
          label: "Posts",
          position: "left",
        },
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://github.com/mrbradleylee",
          position: "right",
          className: "header-github-link",
        },
        {
          href: "https://codepen.io/mrbradleylee",
          position: "right",
          className: "header-codepen-link",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "/findme",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/mrbradleylee",
            },
            {
              label: "CodePen",
              href: "https://codepen.io/mrbradleylee"
            },
          ],
        },
//        {
//          title: "Community",
//          items: [
//            {
//              label: "Discord",
//              href: "https://discordapp.com/invite/docusaurus",
//            },
//            {
//              label: "Twitter",
//              href: "https://twitter.com/docusaurus",
//            },
//          ],
//        },
        {
          title: "/more",
          items: [
            {
              label: "Posts",
              to: "posts",
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} - moostache.io - powered by 🦄`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "_index",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          routeBasePath: 'posts',
          showReadingTime: false,
          // Please change this to your repo.
          editUrl:
            "#",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
