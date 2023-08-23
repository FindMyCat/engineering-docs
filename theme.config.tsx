import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>FindMyCat - Open Source Pet Tracker</span>,
  project: {
    link: 'https://github.com/FindMyCat/',
  },
  docsRepositoryBase: 'https://github.com/FindMyCat/engineering-docs',
  footer: {
    text: 'FindMyCat by ChitlangeSahas',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – FindMyCat Engineering',
    }
  },
  sidebar: {
    defaultMenuCollapseLevel: 1
  }
}

export default config
