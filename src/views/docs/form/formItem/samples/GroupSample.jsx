import { Form, FormGroup, FormItem, SubmitButton, Text, TextInput, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Form, FormItem, TextInput, SubmitButton } from '@neko-os/ui'

<Form gap="md" onSubmit={console.log}>
  <FormGroup name="user">
    <FormItem name="name" label="Name (Relative path)">
      <TextInput />
    </FormItem>

    <FormItem name={['user', 'name']} label="Name (Full path)" isAbsolutePath>
      <TextInput />
    </FormItem>
  </FormGroup>
</Form>
`

function Content() {
  const [result, setResult] = React.useState()

  return (
    <View row gap={10} flex center>
      <View flex border br="md" padding="lg" fullH>
        <Form onSubmit={setResult} gap="lg">
          <FormGroup name="user">
            <FormItem name="name" label="Name (Relative path)">
              <TextInput />
            </FormItem>

            <FormItem name={['user', 'name']} label="Name (Full path)" isAbsolutePath>
              <TextInput />
            </FormItem>
          </FormGroup>

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
  return <SampleCodeBlock title="Group inputs" code={CODE} content={<Content />} />
}
