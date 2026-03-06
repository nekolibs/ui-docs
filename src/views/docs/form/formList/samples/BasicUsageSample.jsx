import { Button, Form, FormItem, FormList, Icon, Link, TextInput, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Button, Form, FormItem, FormList, Icon, Link, TextInput, View } from '@neko-os/ui'

function MyForm() {
  return (
    <Form onSubmit={console.log}>
      <FormList name="users">
        {(fields, actions) => (
          <View gap="sm">
            {fields.map((field, index) => (
              <FormItem name={[field.name, 'name']} key={field.key}>
                <TextInput
                  placeholder={\`User #\${index + 1}\`}
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
    </Form>
  )
}
`

function Content() {
  return (
    <Form fullW initialValues={{ users: [{ name: 'First user' }, { name: 'Second user' }] }} onSubmit={console.log}>
      <FormList name="users">
        {(fields, actions) => (
          <View gap="sm">
            {fields.map((field, index) => (
              <FormItem name={[field.name, 'name']} key={field.key}>
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
    </Form>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={<Content />} />
}
