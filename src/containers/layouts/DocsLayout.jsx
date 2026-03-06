import { HideOn, LayoutContent, View } from '@neko-os/ui'
import { Outlet } from 'react-router'

import DocsMenu from '../menus/DocsMenu'

export default function DocsLayout() {
  return (
    <View row flex>
      <HideOn mdd>
        <DocsMenu />
      </HideOn>
      <LayoutContent flex padding={40} bg="mainBG">
        <Outlet />
      </LayoutContent>
    </View>
  )
}
