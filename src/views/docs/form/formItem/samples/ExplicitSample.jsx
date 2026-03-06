import { Form, FormItem, TextInput } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Form, FormItem, TextInput } from '@neko-os/ui'

return (
  <Form fullW onSubmit={console.log}>
    <FormItem name="name" label="Name">
      {({ value, onChange }) => (
        <TextInput  value={value} onChange={onChange} />
      )}
    </FormItem>
  </Form>
)
`

function Content() {
  return (
    <Form fullW onSubmit={console.log}>
      <FormItem name="name" label="Name">
        {({ value, onChange }) => <TextInput value={value} onChange={onChange} />}
      </FormItem>
    </Form>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Explicit children" code={CODE} content={<Content />} />
}
