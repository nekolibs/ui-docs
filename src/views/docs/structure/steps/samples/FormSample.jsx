import {
  ActiveStepContent,
  Form,
  FormItem,
  PasswordInput,
  StepsHandler,
  StepsMenu,
  StepsNavigation,
  Text,
  TextInput,
  View,
  useNewForm,
} from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import {
  ActiveStepContent, Form, FormItem, PasswordInput, StepsHandler,
  StepsMenu, StepsNavigation, TextInput, useNewForm,
} from '@neko-os/ui'

const form = useNewForm()

const items = [
  {
    label: 'Account',
    renderContent: () => (
      <>
        <FormItem name="email" label="Email" rules={{ required: true, type: 'email' }}>
          <TextInput placeholder="you@example.com" />
        </FormItem>
        <FormItem name="password" label="Password" rules={{ required: true, min: 6 }}>
          <PasswordInput placeholder="Min 6 characters" />
        </FormItem>
      </>
    ),
  },
  {
    label: 'Profile',
    renderContent: () => (
      <>
        <FormItem name="name" label="Full Name" rules={{ required: true }}>
          <TextInput placeholder="John Doe" />
        </FormItem>
      </>
    ),
  },
]

<Form form={form}>
  <StepsHandler
    items={items}
    onValidateStep={form.validateFields}
    onSubmit={() => console.log(form.getFieldsValue())}
  >
    <StepsMenu borderB />
    <ActiveStepContent />
    <StepsNavigation sm />
  </StepsHandler>
</Form>
`

function Content() {
  const form = useNewForm()

  const items = [
    {
      label: 'Account',
      renderContent: () => (
        <View gap="md">
          <FormItem name="email" label="Email" rules={{ required: true, type: 'email' }}>
            <TextInput placeholder="you@example.com" />
          </FormItem>
          <FormItem name="password" label="Password" rules={{ required: true, min: 6 }}>
            <PasswordInput placeholder="Min 6 characters" />
          </FormItem>
        </View>
      ),
    },
    {
      label: 'Profile',
      renderContent: () => (
        <View gap="md">
          <FormItem name="name" label="Full Name" rules={{ required: true }}>
            <TextInput placeholder="John Doe" />
          </FormItem>
          <FormItem name="bio" label="Bio">
            <TextInput placeholder="Tell us about yourself" />
          </FormItem>
        </View>
      ),
    },
    {
      label: 'Review',
      renderContent: () => (
        <View bg="overlayBG" br="lg" padding="md" gap="sm">
          <Text h4>Review & submit</Text>
          <Text text3>Check your details and click Submit to finish.</Text>
        </View>
      ),
    },
  ]

  return (
    <View fullW>
      <Form form={form}>
        <StepsHandler
          items={items}
          onValidateStep={form.validateFields}
          onSubmit={() => alert(JSON.stringify(form.getFieldsValue()))}
        >
          <View row gap="md" centerV borderB>
            <StepsMenu flex />
            <StepsNavigation sm />
          </View>

          <ActiveStepContent />
        </StepsHandler>
      </Form>
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Form Integration" code={CODE} content={<Content />} />
}
