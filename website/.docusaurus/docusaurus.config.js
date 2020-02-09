export default {
  "plugins": [],
  "themes": [],
  "customFields": {},
  "themeConfig": {
    "navbar": {
      "title": "Ph.D. Project",
      "logo": {
        "alt": "My Facebook Project Logo",
        "src": "img/logo.svg"
      },
      "links": [
        {
          "to": "docs/doc1",
          "label": "Docs",
          "position": "left"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://github.com/facebook/docusaurus",
          "label": "GitHub",
          "position": "right"
        }
      ]
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Style Guide",
              "to": "docs/doc1"
            },
            {
              "label": "Second Doc",
              "to": "docs/doc2"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Stack Overflow",
              "href": "https://stackoverflow.com/questions/tagged/docusaurus"
            },
            {
              "label": "Discord",
              "href": "https://discordapp.com/invite/docusaurus"
            }
          ]
        },
        {
          "title": "Social",
          "items": [
            {
              "label": "Blog",
              "to": "blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/facebook/docusaurus"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/docusaurus"
            }
          ]
        }
      ],
      "logo": {
        "alt": "Facebook Open Source Logo",
        "src": "img/oss_logo.png",
        "href": "https://opensource.facebook.com/"
      },
      "copyright": "Copyright © 2020 Facebook, Inc. Built with Docusaurus."
    }
  },
  "title": "Adaptive Internet-Delivered Psychological Treatment System (AIDPT)",
  "tagline": "Modeling Architecture for AIDPT using DPF",
  "url": "https://sureshhardiya.github.io",
  "baseUrl": "/",
  "favicon": "img/favicon.ico",
  "organizationName": "sureshhardiya",
  "projectName": "sureshhardiya.github.io",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/sureshkumarmukhiyahvl/Documents/Projects/sureshhardiya.github.io/website/sidebars.js",
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        "theme": {
          "customCss": "/Users/sureshkumarmukhiyahvl/Documents/Projects/sureshhardiya.github.io/website/src/css/custom.css"
        }
      }
    ]
  ]
};