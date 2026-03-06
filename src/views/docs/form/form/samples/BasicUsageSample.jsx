import { Form, FormItem, SubmitButton, Text, TextInput, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Form, FormItem, TextInput, SubmitButton } from '@neko-os/ui'

<Form onSubmit={console.log} initialValues={{name: "Initial name"}}>
  <FormItem name="name" label="Name">
    <TextInput />
  </FormItem>

  <SubmitButton label="Save" />
</Form>
`

function Content() {
  const [result, setResult] = React.useState()

  return (
    <View row gap={10} flex center>
      <View flex border br="md" padding="lg" fullH>
        <Form onSubmit={setResult} initialValues={{ name: 'Initial name' }}>
          <FormItem name="name" label="Name">
            <TextInput />
          </FormItem>

          <FormItem name="role" label="Role" rules={{ required: true }}>
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
        <Text text2>
          <Text strong>role:</Text> {result?.role}
        </Text>
      </View>
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={<Content />} />
}
