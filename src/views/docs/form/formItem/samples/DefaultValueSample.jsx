import { Form, FormItem, SubmitButton, Text, TextInput, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Form, FormItem, TextInput } from '@neko-os/ui'

// useDefaultValue: makes the FormItem send the defaultValue to the input instead of the value.
// This makes the input faster but its not the best for dynamic changes on the form

return (
  <Form onSubmit={console.log}>
    <FormItem name="name" label="Name" useDefaultValue>
      <TextInput />
    </FormItem>
  </Form>
)
`

function Content() {
  return (
    <Form onSubmit={console.log}>
      <FormItem name="name" label="Name" useDefaultValue>
        <TextInput />
      </FormItem>
    </Form>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Use default value" code={CODE} content={<Content />} />
}
