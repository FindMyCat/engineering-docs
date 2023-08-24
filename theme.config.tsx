import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import ImageProvider from "./pages/ImageProvider";
import slack from "./public/slack.png"
import Image from "next/image";

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
  },
  chat: {
    link: "https://join.slack.com/t/findmycat/shared_invite/zt-21wo1f57m-zVcXlUkAvFmwDA3k5uYysw",
    icon: <Image src={slack} width={25} alt={"slack"}/>
  }
}

export default config
