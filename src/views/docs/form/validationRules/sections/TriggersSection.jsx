import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const FIELD_TRIGGER_CODE = `
import { Form, FormItem, TextInput } from '@neko-os/ui'

// Default: validates only on form submit
<FormItem name="name" rules={{ required: true }}>
  <TextInput />
</FormItem>

// validateTrigger sets the default trigger for all rules in the field
<FormItem name="email" rules={{ required: true, type: 'email' }} validateTrigger="onChange">
  <TextInput />
</FormItem>

// Available triggers: 'onSubmit' (default), 'onChange', 'onBlur'
<FormItem name="phone" rules={{ required: true }} validateTrigger="onBlur">
  <TextInput />
</FormItem>
`

const RULE_TRIGGER_CODE = `
// Per-rule trigger overrides the field-level validateTrigger
<FormItem
  name="email"
  label="Email"
  rules={[
    { required: true },                                  // Uses field trigger (onSubmit)
    { type: 'email', trigger: 'onChange' },               // Runs on change
    {
      validator: async (rule, value) => {
        const taken = await checkEmail(value)
        if (taken) throw new Error('Email taken')
      },
      trigger: 'onBlur'                                  // Runs on blur
    }
  ]}
>
  <TextInput />
</FormItem>

// A rule can have multiple triggers
<FormItem
  name="code"
  rules={[
    { pattern: /^[A-Z0-9]+$/, trigger: ['onChange', 'onBlur'] }
  ]}
>
  <TextInput />
</FormItem>
`

const SUBMIT_CODE = `
// All rules always run on form submit, regardless of their trigger setting.
// This ensures the form is fully validated before submission.
<Form onSubmit={(values) => console.log(values)}>
  <FormItem name="email" rules={[{ type: 'email', trigger: 'onChange' }]}>
    <TextInput />
  </FormItem>
  <SubmitButton label="Submit" />
</Form>
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Validation Triggers</Text>
      <Text text3>
        By default, rules only run when the form is submitted. Use validateTrigger on the field or trigger on individual
        rules to validate earlier.
      </Text>

      <Text h4>Field-Level Trigger</Text>
      <Text text3>
        The validateTrigger prop sets when all rules in the field should run. It applies to any rule that doesn't have
        its own trigger.
      </Text>
      <CodeBlock code={FIELD_TRIGGER_CODE} />

      <Text h4>Per-Rule Trigger</Text>
      <Text text3>
        Individual rules can specify their own trigger, overriding the field-level default. A rule can also accept an
        array of triggers.
      </Text>
      <CodeBlock code={RULE_TRIGGER_CODE} />

      <Text h4>Submit Always Validates</Text>
      <Text text3>
        All rules always run on form submit regardless of their trigger setting.
      </Text>
      <CodeBlock code={SUBMIT_CODE} />
    </View>
  )
}
