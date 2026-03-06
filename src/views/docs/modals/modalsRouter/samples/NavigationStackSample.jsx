import { Button, ModalsRouter, ModalRoute, Text, useModalParams, useModalsNavigation, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { ModalsRouter, ModalRoute, useModalParams, useModalsNavigation } from '@neko-os/ui'

function StepOne() {
  const { push } = useModalsNavigation()

  return (
    <View center minHeight={200} gap="md">
      <Text>Step 1</Text>
      <Button label="Next Step" onPress={() => push('stepTwo')} />
    </View>
  )
}

function StepTwo() {
  const { push, goBack } = useModalsNavigation()

  return (
    <View center minHeight={200} gap="md">
      <Text>Step 2</Text>
      <View row gap="sm">
        <Button label="Back" outline onPress={goBack} />
        <Button label="Next Step" onPress={() => push('stepThree')} />
      </View>
    </View>
  )
}

function StepThree() {
  const { goBack, closeAll } = useModalsNavigation()

  return (
    <View center minHeight={200} gap="md">
      <Text>Step 3</Text>
      <View row gap="sm">
        <Button label="Back" outline onPress={goBack} />
        <Button label="Done" green onPress={closeAll} />
      </View>
    </View>
  )
}

<ModalsRouter>
  <ModalRoute name="stepOne" component={StepOne} title="Step 1" />
  <ModalRoute name="stepTwo" component={StepTwo} title="Step 2" />
  <ModalRoute name="stepThree" component={StepThree} title="Step 3" />
  <App />
</ModalsRouter>
`

function StepOne() {
  const { push } = useModalsNavigation()

  return (
    <View center minHeight={200} gap="md">
      <Text>Step 1</Text>
      <Button label="Next Step" onPress={() => push('stepTwo')} />
    </View>
  )
}

function StepTwo() {
  const { push, goBack } = useModalsNavigation()

  return (
    <View center minHeight={200} gap="md">
      <Text>Step 2</Text>
      <View row gap="sm">
        <Button label="Back" outline onPress={goBack} />
        <Button label="Next Step" onPress={() => push('stepThree')} />
      </View>
    </View>
  )
}

function StepThree() {
  const { goBack, closeAll } = useModalsNavigation()

  return (
    <View center minHeight={200} gap="md">
      <Text>Step 3</Text>
      <View row gap="sm">
        <Button label="Back" outline onPress={goBack} />
        <Button label="Done" green onPress={closeAll} />
      </View>
    </View>
  )
}

function App() {
  const { push } = useModalsNavigation()

  return (
    <View row gap={10} flex center>
      <Button label="Start Flow" onPress={() => push('stepOne')} />
    </View>
  )
}

function Content() {
  return (
    <ModalsRouter>
      <ModalRoute name="stepOne" component={StepOne} title="Step 1" />
      <ModalRoute name="stepTwo" component={StepTwo} title="Step 2" />
      <ModalRoute name="stepThree" component={StepThree} title="Step 3" />
      <App />
    </ModalsRouter>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Navigation Stack with goBack" code={CODE} content={<Content />} />
}
