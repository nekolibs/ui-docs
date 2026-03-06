import { ResultBar, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { ResultBar } from '@neko-os/ui'

<ResultBar 
  type="error"
  title="Error on Something"
  description="Lorem Ipsum Ispum Lorem Lorem Ipsum"
/>
`

const CONTENT = (
  <View row gap={10} flex center>
    <ResultBar type="error" title="Error on Something" description="Lorem Ipsum Ispum Lorem Lorem Ipsum" />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Error" code={CODE} content={CONTENT} bg="transparent" border />
}
