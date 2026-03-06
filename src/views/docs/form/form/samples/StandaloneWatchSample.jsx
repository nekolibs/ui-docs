import { Form, FormItem, Text, TextInput, View, useNewForm, useWatch } from '@neko-os/ui'
import React from 'react'

import { name } from '../../../../../../package-lock.json'
import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Form, FormItem, TextInput, useNewForm, useWatch } from '@neko-os/ui'

function MyForm() {
  const form = useNewForm({ onSubmit: console.log })
  const name = useWatch('name', { form })

  return (
    <Form form={form}>
      <FormItem name="name" label="Name">
        <TextInput />
      </FormItem>

      <Text>{name}</Text>
    </Form>
  )
}
`

function Content() {
  const form = useNewForm({ onSubmit: console.log })
  const name = useWatch('name', { form })

  return (
    <Form form={form} row flex center fullH>
      <View flex border br="md" padding="lg" fullH>
        <FormItem name="name" label="Name (watched)">
          <TextInput />
        </FormItem>
      </View>
      <View flex border br="md" padding="lg" fullH gap={10}>
        <Text>Result:</Text>
        <Text text2>
          <Text strong>name:</Text> {name}
        </Text>
      </View>
    </Form>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="useWatch (outside <Form />)" code={CODE} content={<Content />} />
}
