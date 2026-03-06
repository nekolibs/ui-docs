import { Form, FormItem, RateInput, SubmitButton, TextInput, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Form, FormItem, RateInput } from '@neko-os/ui'

return (
  <Form onSubmit={console.log}>
    <FormItem name="review" label="Review">
      <RateInput />
    </FormItem>
  </Form>
)
`

function Content() {
  return (
    <Form onSubmit={console.log}>
      <FormItem name="review" label="Review">
        <RateInput />
      </FormItem>

      <FormItem name="comment" label="Comment">
        <TextInput />
      </FormItem>

      <SubmitButton label="Submit" />
    </Form>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Form" code={CODE} content={<Content />} />
}
