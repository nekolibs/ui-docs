import { Button, ResultBar, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { ResultBar, Button } from '@neko-os/ui'

<ResultBar 
  icon="bank-line" 
  title="Successfully Saved" 
  description="Lorem Ipsum Ispum Lorem Lorem Ipsum"
  rightContent={<Button xs label="Custom Content" outline />}
/>
`

const CONTENT = (
  <View row gap={10} flex center>
    <ResultBar
      icon="bank-line"
      title="Successfully Saved"
      description="Lorem Ipsum Ispum Lorem Lorem Ipsum"
      rightContent={<Button xs label="Custom Content" outline />}
    />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} bg="transparent" border />
}
