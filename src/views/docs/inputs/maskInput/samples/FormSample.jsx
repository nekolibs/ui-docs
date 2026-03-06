import { Form, FormItem, SubmitButton, MaskInput } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Form, FormItem, MaskInput } from '@neko-os/ui'

return (
  <Form onSubmit={console.log}>
    <FormItem name="name" label="Name">
      <MaskInput placeholder="(99) 99999-9999" mask="(99) 99999-9999" />
    </FormItem>
  </Form>
)
`

function Content() {
  return (
    <Form onSubmit={console.log}>
      <FormItem name="name" label="Name">
        <MaskInput placeholder="(99) 99999-9999" mask="(99) 99999-9999" />
      </FormItem>

      <SubmitButton label="Submit" />
    </Form>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Form" code={CODE} content={<Content />} />
}
