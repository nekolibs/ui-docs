import { Form, FormItem, SubmitButton, Text, TextInput, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Form, FormItem, TextInput, SubmitButton } from '@neko-os/ui'

return (
  <Form onSubmit={console.log}>
    <FormItem name="name">
      <TextInput />
    </FormItem>

    <SubmitButton label="Save" />
  </Form>
)
`

function Content() {
  const [result, setResult] = React.useState()

  return (
    <View row gap={10} flex center>
      <View flex border br="md" padding="lg">
        <Form onSubmit={setResult} gap="md">
          <FormItem name="name" label="Name">
            <TextInput />
          </FormItem>

          <SubmitButton label="Save" />
        </Form>
      </View>
      <View flex border br="md" padding="lg" fullH gap={10}>
        <Text>Result:</Text>
        <Text text2>
          <Text strong>name:</Text> {result?.name}
        </Text>
      </View>
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={<Content />} />
}
