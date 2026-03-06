import { Form, FormItem, SubmitButton, Text, TextInput, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Form, FormItem, TextInput, SubmitButton } from '@neko-os/ui'

<Form onSubmit={console.log} loading>
  <FormItem name="name" label="Name">
    <TextInput />
  </FormItem>

  <SubmitButton label="Save" />
</Form>
`

function Content() {
  const [result, setResult] = React.useState()

  return (
    <Form onSubmit={setResult} loading>
      <FormItem name="name" label="Name">
        <TextInput />
      </FormItem>

      <FormItem name="role" label="Role" rules={{ required: true }}>
        <TextInput />
      </FormItem>

      <SubmitButton label="Save" />
    </Form>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Loading form" code={CODE} content={<Content />} />
}
