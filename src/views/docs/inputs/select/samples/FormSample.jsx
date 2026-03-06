import { Form, FormItem, Select, SubmitButton, Text, TextInput, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Form, FormItem, Picker, Switch } from '@neko-os/ui'

<Form onSubmit={console.log}>
  <FormItem name="color" label="Color">
    <Select options={...} />
  </FormItem>
</Form>
`

function Content() {
  const [result, setResult] = React.useState()

  return (
    <View row gap={10} flex center>
      <View flex border br="md" padding="lg" fullH>
        <Form onSubmit={setResult} gap="lg">
          <FormItem name="name" label="Name">
            <TextInput />
          </FormItem>

          <FormItem name="color" label="Color">
            <Select
              options={[
                { label: 'Green', value: 'green' },
                { label: 'Blue', value: 'blue' },
                { label: 'Red', value: 'red' },
              ]}
            />
          </FormItem>

          <SubmitButton label="Submit" />
        </Form>
      </View>

      <View flex border br="md" padding="lg" fullH gap={10}>
        <Text h5>Result</Text>
        <Text text2>
          <Text strong>name:</Text> {result?.name}
        </Text>
        <Text text2>
          <Text strong>color:</Text> {result?.color}
        </Text>
      </View>
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Form" code={CODE} content={<Content />} />
}
