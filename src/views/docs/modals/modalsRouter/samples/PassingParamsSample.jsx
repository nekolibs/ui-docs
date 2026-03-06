import {
  Button,
  ModalRoute,
  ModalsRouter,
  Text,
  View,
  useAllModalsParams,
  useModalParams,
  useModalsNavigation,
} from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { ModalsRouter, ModalRoute, useModalParams, useModalsNavigation } from '@neko-os/ui'

function UserProfile() {
  const { name, role } = useModalParams()

  return (
    <View center minHeight={200} gap="md">
      <Text h3>{name}</Text>
      <Text text3>{role}</Text>
    </View>
  )
}

function App() {
  const { push } = useModalsNavigation()

  return (
    <Button
      label="View Profile"
      onPress={() => push('userProfile', { name: 'John Doe', role: 'Admin' })}
    />
  )
}

<ModalsRouter>
  <ModalRoute name="userProfile" component={UserProfile} title="User Profile" />
  <App />
</ModalsRouter>
`

function UserProfile() {
  const { name, role } = useModalParams()

  return (
    <View center minHeight={200} gap="md">
      <Text h3>{name}</Text>
      <Text text3>{role}</Text>
    </View>
  )
}

function App() {
  const { push } = useModalsNavigation()

  return (
    <View row gap={10} flex center>
      <Button label="View Profile" onPress={() => push('userProfile', { name: 'John Doe', role: 'Admin' })} />
    </View>
  )
}

function Content() {
  return (
    <ModalsRouter>
      <ModalRoute name="userProfile" component={UserProfile} title="User Profile" />
      <App />
    </ModalsRouter>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Passing Params with useModalParams" code={CODE} content={<Content />} />
}
