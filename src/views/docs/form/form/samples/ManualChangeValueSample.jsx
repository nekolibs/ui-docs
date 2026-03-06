import { Button, Form, FormItem, TextInput, View, useNewForm } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Form, FormItem, TextInput, useNewForm, useWatch } from '@neko-os/ui'

function MyForm() {
  // If it is inside a <Form>, import with useFormInstance()
  const form = useNewForm({ onSubmit: console.log })

  return (
    <Form form={form} gap="lg">
      <FormItem name="name" label="Name">
        <TextInput />
      </FormItem>

      <View row gap="sm">
        <Button label="Change to 'Orange'" orange onPress={() => form.setFieldValue(['name'], 'Orange')} sm />
        <Button label="Change to 'Blue'" blue onPress={() => form.setFieldValue(['name'], 'Blue')} sm />
        <Button label="Clear" outline red onPress={() => form.setFieldValue(['name'], '')} sm />
      </View>
    </Form>
  )
}
`

function Content() {
  // If it is inside a <Form>, import with useFormInstance()
  const form = useNewForm({ onSubmit: console.log })

  return (
    <Form form={form}>
      <FormItem name="name" label="Name">
        <TextInput />
      </FormItem>

      <View row gap="sm">
        <Button label="Change to 'Orange'" orange onPress={() => form.setFieldValue(['name'], 'Orange')} sm />
        <Button label="Change to 'Blue'" blue onPress={() => form.setFieldValue(['name'], 'Blue')} sm />
        <Button label="Clear" outline red onPress={() => form.setFieldValue(['name'], '')} sm />
      </View>
    </Form>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Manually changing a value" code={CODE} content={<Content />} />
}
