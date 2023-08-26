import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import slack from "./public/slack.png"
import Image from "next/image";
import {SLACK_INVITE_LINK, PROJECT_FULL_NAME} from "./constants";

const config: DocsThemeConfig = {
  logo: <span>{PROJECT_FULL_NAME}</span>,
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
    link: SLACK_INVITE_LINK,
    icon: <Image src={slack} width={25} alt={"slack"}/>
  }
}

export default config
