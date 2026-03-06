import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { ShowOn, HideOn, ResponsiveRender } from '@neko-os/ui'

// ShowOn - only renders children when condition is true
<ShowOn mdu={true}>
  <DesktopNavigation />
</ShowOn>

<ShowOn sm={true} md={true}>
  <MobileNavigation />
</ShowOn>

// HideOn - hides children when condition is true
<HideOn smd={true}>
  <Sidebar />  {/* Hidden on small screens */}
</HideOn>

// ResponsiveRender - render different content per breakpoint
<ResponsiveRender
  sm={() => <MobileLayout />}
  md={() => <TabletLayout />}
  lg={() => <DesktopLayout />}
  df={() => <DefaultLayout />}
/>

// Can also return non-function values
<ResponsiveRender
  sm="Mobile"
  md="Tablet"
  lg="Desktop"
/>
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>ShowOn, HideOn & ResponsiveRender</Text>
      <Text text3>
        Use these components for conditional rendering based on screen size. ShowOn and HideOn are simpler toggles,
        while ResponsiveRender allows completely different content per breakpoint.
      </Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
