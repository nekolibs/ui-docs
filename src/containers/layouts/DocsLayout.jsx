import { HideOn, LayoutContent, View, useResponsiveValue } from '@neko-os/ui'
import { Outlet } from 'react-router'

import DocsMenu from '../menus/DocsMenu'

export default function DocsLayout() {
  const padding = useResponsiveValue({ lgu: 'xl', df: 'md' })

  return (
    <View row flex bg="mainBG">
      <HideOn mdd>
        <DocsMenu />
      </HideOn>
      <LayoutContent flex padding={padding} maxW={1600} marginH="auto">
        <Outlet />
      </LayoutContent>
    </View>
  )
}
