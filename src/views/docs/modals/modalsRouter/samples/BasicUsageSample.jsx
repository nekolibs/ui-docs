import { Button, ModalsRouter, ModalRoute, Text, useModalsNavigation, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Button, ModalsRouter, ModalRoute, Text, useModalsNavigation, View } from '@neko-os/ui'

function MyScreen() {
  return (
    <View center minHeight={200}>
      <Text>Hello from modal!</Text>
    </View>
  )
}

function App() {
  const { push } = useModalsNavigation()

  return <Button label="Open Modal" onPress={() => push('myScreen')} />
}

<ModalsRouter>
  <ModalRoute name="myScreen" component={MyScreen} title="My Screen" />
  <App />
</ModalsRouter>
`

function MyScreen() {
  return (
    <View center minHeight={200}>
      <Text>Hello from modal!</Text>
    </View>
  )
}

function App() {
  const { push } = useModalsNavigation()

  return (
    <View row gap={10} flex center>
      <Button label="Open Modal" onPress={() => push('myScreen')} />
    </View>
  )
}

function Content() {
  return (
    <ModalsRouter>
      <ModalRoute name="myScreen" component={MyScreen} title="My Screen" />
      <App />
    </ModalsRouter>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={<Content />} />
}
