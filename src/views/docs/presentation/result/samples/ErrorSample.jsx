import { Result, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Result } from '@neko-os/ui'

<Result 
  type="error"
  title="Error on Something"
  description="Lorem Ipsum Ispum Lorem Lorem Ipsum"
/>
`

const CONTENT = (
  <View row gap={10} flex center>
    <Result type="error" title="Error on Something" description="Lorem Ipsum Ispum Lorem Lorem Ipsum" />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Error" code={CODE} content={CONTENT} />
}
