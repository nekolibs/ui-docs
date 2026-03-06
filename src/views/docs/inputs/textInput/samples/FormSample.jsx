import { Form, FormItem, SubmitButton, TextInput } from '@neko-os/ui'

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

      <SubmitButton label="Submit" />
    </Form>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Form" code={CODE} content={<Content />} />
}
