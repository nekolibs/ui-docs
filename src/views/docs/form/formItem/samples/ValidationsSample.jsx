import { Col, Form, FormGroup, FormItem, Grid, NumberInput, SubmitButton, TextInput } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Form, FormItem, TextInput } from '@neko-os/ui'

<Form onSubmit={console.log}>
  <FormItem
    name="email"
    label="Email"
    rules={[
      { required: true },
      { type: "email", message: "Invalid email" },
      {
        validator: async (rule, value) => {
          const exists = await checkEmail(value)
          if (exists) throw new Error("Email taken")
        },
        trigger: "onChange"  // Only this rule runs on change
      }
    ]}
    validateTrigger="onBlur"  // Default trigger for all rules
  >
     <TextInput />
  </FormItem>
</Form>
`

function Content() {
  return (
    <Form onSubmit={console.log}>
      <Grid colSpan={12} gap="md">
        <Col>
          <FormItem name="name" label="Required" rules={{ required: true, min: 2 }}>
            <TextInput />
          </FormItem>
        </Col>

        <Col>
          <FormItem name="number" label="Number (onChange)" rules={{ min: 2, max: 10 }} validateTrigger="onChange">
            <NumberInput />
          </FormItem>
        </Col>

        <Col>
          <FormGroup name="group">
            <FormItem
              name={['nested', 'path']}
              label="Custom required message (onBlur)"
              rules={[{ required: true, message: 'Custom message validation' }]}
              validateTrigger="onBlur"
            >
              <TextInput />
            </FormItem>
          </FormGroup>
        </Col>

        <Col>
          <FormItem
            name={['nested', 'email']}
            label="Email (onChange)"
            rules={[{ required: true }, { type: 'email' }]}
            validateTrigger="onChange"
          >
            <TextInput />
          </FormItem>
        </Col>
      </Grid>

      <SubmitButton label="Submit" marginT="sm" />
    </Form>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Validations" code={CODE} content={<Content />} />
}
