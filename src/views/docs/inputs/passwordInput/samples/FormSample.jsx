import { Form, FormItem, PasswordInput, SubmitButton } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Form, FormItem, PasswordInput } from '@neko-os/ui'

return (
  <Form onSubmit={console.log}>
    <FormItem name="password" label="Password">
      <PasswordInput />
    </FormItem>
  </Form>
)
`

function Content() {
  return (
    <Form onSubmit={console.log}>
      <FormItem name="password" label="Password">
        <PasswordInput />
      </FormItem>

      <SubmitButton label="Submit" />
    </Form>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Form" code={CODE} content={<Content />} />
}
