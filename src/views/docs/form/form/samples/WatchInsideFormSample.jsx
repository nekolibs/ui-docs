import { Form, FormItem, Text, TextInput, View, useWatch } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Form, FormItem, TextInput, useWatch } from '@neko-os/ui'

function MyForm() {
  return (
    <Form onSubmit={console.log}>
      <FormItem name="name" label="Name">
        <TextInput />
      </FormItem>

      <Result />
    </Form>
  )
}

function Result() {
  const name = useWatch('name')

  return <Text>{name}</Text>
}
`

function Content() {
  return (
    <Form onSubmit={console.log} row flex center fullH>
      <View flex border br="md" padding="lg" fullH>
        <FormItem name="name" label="Name (watched)">
          <TextInput />
        </FormItem>
      </View>
      <Result />
    </Form>
  )
}

function Result() {
  const name = useWatch('name')

  return (
    <View flex border br="md" padding="lg" fullH gap={10}>
      <Text>Result:</Text>
      <Text text2>
        <Text strong>name:</Text> {name}
      </Text>
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="useWatch (inside <Form />)" code={CODE} content={<Content />} />
}
