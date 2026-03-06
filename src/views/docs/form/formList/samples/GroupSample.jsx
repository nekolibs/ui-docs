import { Button, Form, FormGroup, FormItem, FormList, Icon, Link, TextInput, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Button, Form, FormGroup, FormItem, FormList, Icon, Link, TextInput, View } from '@neko-os/ui'

function MyForm() {
  return (
    <Form fullW initialValues={{ users: [{}, {}] }} onSubmit={console.log}>
      <FormList name="users">
        {(fields, actions) => (
          <View gap="sm">
            {fields.map((field, index) => (
              <FormGroup key={field.key} name={[field.name]}>
                <ListItem actions={actions} index={index} />
              </FormGroup>
            ))}

            <Button small outline label="Add user" onPress={() => actions.add({})} />
          </View>
        )}
      </FormList>
    </Form>
  )
}

function ListItem({ actions, index }) {
  return (
    <View row gap={10} centerV>
      <FormItem name="name" flex>
        <TextInput placeholder="Name" />
      </FormItem>

      <FormItem name="email" flex>
        <TextInput placeholder="Email" />
      </FormItem>

      <Link onPress={() => actions.duplicate(index)}>
        <Icon name="file-copy-line" primary size="xs" />
      </Link>

      <Link onPress={() => actions.remove(index)}>
        <Icon name="delete-bin-2-line" red size="xs" />
      </Link>
    </View>
  )
}
`

function Content() {
  return (
    <Form fullW initialValues={{ users: [{}, {}] }} onSubmit={console.log}>
      <FormList name="users">
        {(fields, actions) => (
          <View gap="sm">
            {fields.map((field, index) => (
              <FormGroup key={field.key} name={[field.name]}>
                <ListItem actions={actions} index={index} />
              </FormGroup>
            ))}

            <Button small outline label="Add user" onPress={() => actions.add({})} />
          </View>
        )}
      </FormList>
    </Form>
  )
}

function ListItem({ actions, index }) {
  return (
    <View row gap={10} centerV>
      <FormItem name="name" flex>
        <TextInput placeholder="Name" />
      </FormItem>

      <FormItem name="email" flex>
        <TextInput placeholder="Email" />
      </FormItem>

      <Link onPress={() => actions.duplicate(index)}>
        <Icon name="file-copy-line" primary size="xs" />
      </Link>

      <Link onPress={() => actions.remove(index)}>
        <Icon name="delete-bin-2-line" red size="xs" />
      </Link>
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Group each row" code={CODE} content={<Content />} />
}
