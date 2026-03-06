import { Form, FormItem, SubmitButton, Text, TextInput, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Form, FormItem, TextInput } from '@neko-os/ui'

return (
  <Form onSubmit={console.log}>
    <FormItem name="name" label="Name">
      <TextInput />
    </FormItem>
  </Form>
)
`

function Content() {
  return (
    <Form onSubmit={console.log}>
      <FormItem name="name" label="Name">
        <TextInput />
      </FormItem>
    </Form>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={<Content />} />
}
