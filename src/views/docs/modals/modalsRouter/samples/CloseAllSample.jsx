import { Button, ModalsRouter, ModalRoute, Text, useModalsNavigation, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { ModalsRouter, ModalRoute, useModalsNavigation } from '@neko-os/ui'

function ScreenA() {
  const { push } = useModalsNavigation()

  return (
    <View center minHeight={200} gap="md">
      <Text>Screen A</Text>
      <Button label="Open Screen B" onPress={() => push('screenB')} />
    </View>
  )
}

function ScreenB() {
  const { push } = useModalsNavigation()

  return (
    <View center minHeight={200} gap="md">
      <Text>Screen B</Text>
      <Button label="Open Screen C" onPress={() => push('screenC')} />
    </View>
  )
}

function ScreenC() {
  const { closeAll } = useModalsNavigation()

  return (
    <View center minHeight={200} gap="md">
      <Text>Screen C</Text>
      <Button label="Close All" red onPress={closeAll} />
    </View>
  )
}

<ModalsRouter>
  <ModalRoute name="screenA" component={ScreenA} title="Screen A" />
  <ModalRoute name="screenB" component={ScreenB} title="Screen B" />
  <ModalRoute name="screenC" component={ScreenC} title="Screen C" />
  <App />
</ModalsRouter>
`

function ScreenA() {
  const { push } = useModalsNavigation()

  return (
    <View center minHeight={200} gap="md">
      <Text>Screen A</Text>
      <Button label="Open Screen B" onPress={() => push('screenB')} />
    </View>
  )
}

function ScreenB() {
  const { push } = useModalsNavigation()

  return (
    <View center minHeight={200} gap="md">
      <Text>Screen B</Text>
      <Button label="Open Screen C" onPress={() => push('screenC')} />
    </View>
  )
}

function ScreenC() {
  const { closeAll } = useModalsNavigation()

  return (
    <View center minHeight={200} gap="md">
      <Text>Screen C</Text>
      <Button label="Close All" red onPress={closeAll} />
    </View>
  )
}

function App() {
  const { push } = useModalsNavigation()

  return (
    <View row gap={10} flex center>
      <Button label="Start" onPress={() => push('screenA')} />
    </View>
  )
}

function Content() {
  return (
    <ModalsRouter>
      <ModalRoute name="screenA" component={ScreenA} title="Screen A" />
      <ModalRoute name="screenB" component={ScreenB} title="Screen B" />
      <ModalRoute name="screenC" component={ScreenC} title="Screen C" />
      <App />
    </ModalsRouter>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="closeAll" code={CODE} content={<Content />} />
}
