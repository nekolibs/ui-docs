import { Button, Form, FormItem, Text, TextInput, View, useNewForm } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Form, FormItem, TextInput, useNewForm } from '@neko-os/ui'

function MyForm() {
  const form = useNewForm({ initialValues: { name: '', email: '' } })

  // Field-level checks
  form.isTouched('name')              // true after the field is blurred
  form.isDirty('name')                // true when value differs from initial

  // Multiple fields (true if any match)
  form.isTouched(['name', 'email'])   // true if name OR email touched
  form.isDirty(['name', 'email'])     // true if name OR email dirty

  // Form-level checks (no args)
  form.isTouched()                    // true if any field was touched
  form.isDirty()                      // true if any field is dirty

  // Get all touched/dirty field keys
  form.getTouchedFields()             // ['name', 'email']
  form.getDirtyFields()               // ['name']

  return (
    <Form form={form}>
      <FormItem name="name" label="Name">
        <TextInput />
      </FormItem>
      <FormItem name="email" label="Email">
        <TextInput />
      </FormItem>
    </Form>
  )
}
`

function Content() {
  const form = useNewForm({ initialValues: { name: '', email: '' } })
  const [state, setState] = React.useState({})

  const updateState = () => {
    setState({
      touched: form.getTouchedFields(),
      dirty: form.getDirtyFields(),
      isTouched: form.isTouched(),
      isDirty: form.isDirty(),
    })
  }

  return (
    <View row gap="lg" flex>
      <View flex border br="md" padding="lg" gap="md">
        <Form form={form} onValuesChange={updateState}>
          <FormItem name="name" label="Name">
            <TextInput onBlur={updateState} />
          </FormItem>
          <FormItem name="email" label="Email">
            <TextInput onBlur={updateState} />
          </FormItem>
        </Form>
      </View>
      <View flex border br="md" padding="lg" gap="xs">
        <Text sm bold>
          Form State
        </Text>
        <Text sm text2>
          isTouched: <Text bold>{String(state.isTouched ?? false)}</Text>
        </Text>
        <Text sm text2>
          isDirty: <Text bold>{String(state.isDirty ?? false)}</Text>
        </Text>
        <Text sm text2>
          Touched fields: <Text bold>{state.touched?.join(', ') || 'none'}</Text>
        </Text>
        <Text sm text2>
          Dirty fields: <Text bold>{state.dirty?.join(', ') || 'none'}</Text>
        </Text>
      </View>
    </View>
  )
}

export default function TouchedDirtySection() {
  return <SampleCodeBlock title="Touched & Dirty" code={CODE} content={<Content />} fullW />
}
