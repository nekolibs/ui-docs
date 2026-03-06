import { Button, ModalsRouter, ModalRoute, Text, useModalsNavigation, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { ModalsRouter, ModalRoute, useModalsNavigation } from '@neko-os/ui'

function ScreenContent() {
  return (
    <View center minHeight={200}>
      <Text>Screen content</Text>
    </View>
  )
}

function App() {
  const { push } = useModalsNavigation()

  return (
    <View row gap={10}>
      <Button label="Modal" onPress={() => push('modalScreen')} />
      <Button label="Drawer" onPress={() => push('drawerScreen')} />
      <Button label="BottomDrawer" onPress={() => push('bottomDrawerScreen')} />
    </View>
  )
}

<ModalsRouter>
  <ModalRoute name="modalScreen" component={ScreenContent} type="modal" title="Modal" />
  <ModalRoute name="drawerScreen" component={ScreenContent} type="drawer" title="Drawer" />
  <ModalRoute name="bottomDrawerScreen" component={ScreenContent} type="bottomDrawer" title="Bottom Drawer" />
  <App />
</ModalsRouter>
`

function ScreenContent() {
  return (
    <View center minHeight={200}>
      <Text>Screen content</Text>
    </View>
  )
}

function App() {
  const { push } = useModalsNavigation()

  return (
    <View row gap={10} flex center>
      <Button label="Modal" onPress={() => push('modalScreen')} />
      <Button label="Drawer" onPress={() => push('drawerScreen')} />
      <Button label="BottomDrawer" onPress={() => push('bottomDrawerScreen')} />
    </View>
  )
}

function Content() {
  return (
    <ModalsRouter>
      <ModalRoute name="modalScreen" component={ScreenContent} type="modal" title="Modal" />
      <ModalRoute name="drawerScreen" component={ScreenContent} type="drawer" title="Drawer" />
      <ModalRoute name="bottomDrawerScreen" component={ScreenContent} type="bottomDrawer" title="Bottom Drawer" />
      <App />
    </ModalsRouter>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Container Types (modal, drawer, bottomDrawer)" code={CODE} content={<Content />} />
}
