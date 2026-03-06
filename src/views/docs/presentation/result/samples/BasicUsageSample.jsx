import { Button, Result, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Result, Button } from '@neko-os/ui'

<Result 
  icon="bank-line" 
  title="Successfully Saved" 
  description="Lorem Ipsum Ispum Lorem Lorem Ipsum"
  footer={<Button sm label="Custom Footer" outline />}
/>
`

const CONTENT = (
  <View row gap={10} flex center>
    <Result
      icon="bank-line"
      title="Successfully Saved"
      description="Lorem Ipsum Ispum Lorem Lorem Ipsum"
      footer={<Button sm label="Custom Footer" outline />}
    />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} />
}
