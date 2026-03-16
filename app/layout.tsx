import React from 'react'
import { Layout, Navbar, Footer } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import Image from 'next/image'
import discordIcon from '../public/Discord_Symbol_Color/Discord-Symbol-Blurple.png'
import { DISCORD_INVITE_LINK, PROJECT_FULL_NAME } from '../constants'

export const metadata = {
  title: {
    template: '%s – FindMyCat Engineering',
  },
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const pageMap = await getPageMap()
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Layout
          navbar={
            <Navbar
              logo={<span>{PROJECT_FULL_NAME}</span>}
              projectLink="https://github.com/FindMyCat/"
              chatLink={DISCORD_INVITE_LINK}
              chatIcon={<Image src={discordIcon} width={25} alt="discord" />}
            />
          }
          footer={<Footer>FindMyCat by ChitlangeSahas</Footer>}
          docsRepositoryBase="https://github.com/FindMyCat/engineering-docs"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={pageMap}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
