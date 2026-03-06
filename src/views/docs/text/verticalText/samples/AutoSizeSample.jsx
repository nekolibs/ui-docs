import { VerticalText, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { VerticalText } from '@neko-os/ui'

<View height={200} width={30} >
  <VerticalText label="Simple text" center fullW fullH strong />
</View>
`

const CONTENT = (
  <View gap={15} flex center>
    <View height={200} width={30} center>
      <VerticalText label="Simple text" center fullW fullH strong />
    </View>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="AutoSize" code={CODE} content={CONTENT} />
}
