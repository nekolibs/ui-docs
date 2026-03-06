import { Button, Form, FormItem, FormList, Icon, Link, SubmitButton, TextInput, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Form, FormItem, TextInput } from '@neko-os/ui'

<Form onSubmit={console.log}>
  <FormItem name="name" rules={[{ required: true }, {min: 2}]}>
    <TextInput />
  </FormItem>
</Form>
`

function Content() {
  return (
    <Form fullW initialValues={{ users: [] }} onSubmit={console.log}>
      <FormList name="users" rules={[{ required: true }, { min: 2 }]}>
        {(fields, actions) => (
          <View gap="sm">
            {fields.map((field, index) => (
              <FormItem name={[field.name, 'name']} key={field.key} rules={[{ required: true }]}>
                <TextInput
                  placeholder={`User #${index + 1}`}
                  suffix={
                    <Link onPress={() => actions.remove(index)}>
                      <Icon name="delete-bin-2-line" red size="xs" />
                    </Link>
                  }
                />
              </FormItem>
            ))}

            <Button small outline label="Add user" onPress={() => actions.add({})} />
          </View>
        )}
      </FormList>
      <SubmitButton label="Submit" />
    </Form>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Validations" code={CODE} content={<Content />} />
}
