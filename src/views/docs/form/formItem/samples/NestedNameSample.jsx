import { Form, FormItem, SubmitButton, Text, TextInput, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Form, FormItem, TextInput, SubmitButton } from '@neko-os/ui'

<Form onSubmit={console.log}>
  <FormItem name={['user', 'name']} label="Name">
    <TextInput />
  </FormItem>
</Form>
`

function Content() {
  const [result, setResult] = React.useState()

  return (
    <View row gap={10} flex center>
      <View flex border br="md" padding="lg" fullH>
        <Form onSubmit={setResult} initialValues={{ user: { name: 'Initial name' } }} gap="lg">
          <FormItem name={['user', 'name']} label="Name">
            <TextInput />
          </FormItem>

          <SubmitButton label="Save" />
        </Form>
      </View>
      <View flex border br="md" padding="lg" fullH gap={10}>
        <Text>Result:</Text>
        <Text text2>
          <Text strong>user.name:</Text> {result?.user?.name}
        </Text>
      </View>
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Nested name path" code={CODE} content={<Content />} />
}
