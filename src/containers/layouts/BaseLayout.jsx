import { Layout } from '@neko-os/ui'
import { Outlet } from 'react-router'

import TopBarMenu from '../menus/TopBarMenu'

export default function BaseLayout() {
  return (
    <Layout>
      <TopBarMenu />
      <Outlet />
    </Layout>
  )
}
