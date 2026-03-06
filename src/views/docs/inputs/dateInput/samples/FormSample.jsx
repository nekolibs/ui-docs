import { Form, FormItem, SubmitButton, DateInput } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Form, FormItem, DateInput } from '@neko-os/ui'

return (
  <Form onSubmit={console.log}>
    <FormItem name="date" label="Date">
      <DateInput />
    </FormItem>
  </Form>
)
`

function Content() {
  return (
    <Form onSubmit={console.log}>
      <FormItem name="date" label="Date">
        <DateInput />
      </FormItem>

      <SubmitButton label="Submit" />
    </Form>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Form" code={CODE} content={<Content />} />
}
