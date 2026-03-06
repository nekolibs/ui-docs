import { Form, FormItem, RadioGroup, SubmitButton, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Form, FormItem, RadioGroup } from '@neko-os/ui'

<Form onSubmit={console.log}>
  <FormItem name="color" label="Color">
    <RadioGroup options={...} />
  </FormItem>
</Form>
`

function Content() {
  const [result, setResult] = React.useState()

  return (
    <View row gap={10} flex center>
      <View flex border br="md" padding="lg" fullH>
        <Form onSubmit={setResult} gap="lg">
          <FormItem name="color" label="Color">
            <RadioGroup
              options={[
                { label: 'Green', value: 'green' },
                { label: 'Blue', value: 'blue' },
                { label: 'Red', value: 'red' },
              ]}
            />
          </FormItem>

          <SubmitButton label="Submit" />
        </Form>
      </View>

      <View flex border br="md" padding="lg" fullH gap={10}>
        <Text h5>Result</Text>
        <Text text2>
          <Text strong>color:</Text> {result?.color}
        </Text>
      </View>
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Form" code={CODE} content={<Content />} />
}
