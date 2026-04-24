import { Form, FormItem, SubmitButton, Text, UploadInput, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Form, FormItem, SubmitButton, UploadInput } from '@neko-os/ui'

<Form onSubmit={console.log}>
  <FormItem name="avatar" label="Avatar">
    <UploadInput accept="image/*" />
  </FormItem>

  <FormItem name="documents" label="Documents">
    <UploadInput multiple maxCount={3} />
  </FormItem>

  <SubmitButton label="Submit" />
</Form>
`

function Content() {
  const [result, setResult] = React.useState(null)

  return (
    <View row gap="md" flex>
      <View flex border br="md" padding="lg" fullH>
        <Form onSubmit={setResult} gap="lg">
          <FormItem name="avatar" label="Avatar">
            <UploadInput accept="image/*" />
          </FormItem>

          <FormItem name="documents" label="Documents">
            <UploadInput multiple maxCount={3} />
          </FormItem>

          <SubmitButton label="Submit" />
        </Form>
      </View>

      <View flex border br="md" padding="lg" fullH gap="sm" scrollY>
        <Text h5>Result</Text>
        <Text text3 style={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace' }}>
          {result ? JSON.stringify(result, null, 2) : '—'}
        </Text>
      </View>
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Form" code={CODE} content={<Content />} />
}
