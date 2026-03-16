import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import discord from "./public/Discord_Symbol_Color/Discord-Symbol-Blurple.png"
import Image from "next/image";
import {DISCORD_INVITE_LINK, PROJECT_FULL_NAME} from "./constants";

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
    link: DISCORD_INVITE_LINK,
    icon: <Image src={discord} width={25} alt={"discord"}/>
  }
}

export default config
