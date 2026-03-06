import { Form, FormItem, SubmitButton, NumberInput } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Form, FormItem, NumberInput } from '@neko-os/ui'

return (
  <Form onSubmit={console.log}>
    <FormItem name="price" label="Price">
      <NumberInput />
    </FormItem>
  </Form>
)
`

function Content() {
  return (
    <Form onSubmit={console.log}>
      <FormItem name="price" label="Price">
        <NumberInput />
      </FormItem>

      <SubmitButton label="Submit" />
    </Form>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Form" code={CODE} content={<Content />} />
}
