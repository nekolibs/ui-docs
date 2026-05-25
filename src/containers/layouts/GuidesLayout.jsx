import { HideOn, LayoutContent, View, useResponsiveValue } from '@neko-os/ui'
import { Outlet } from 'react-router'

import GuidesMenu from '../menus/GuidesMenu'

export default function GuidesLayout() {
  const padding = useResponsiveValue({ lgu: 'xl', df: 'md' })

  return (
    <View row flex bg="overlayBG">
      <HideOn mdd>
        <GuidesMenu />
      </HideOn>
      <LayoutContent flex padding={padding} maxW={1200} marginH="auto">
        <Outlet />
      </LayoutContent>
    </View>
  )
}
