import { RadioGroup, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { RadioGroup } from '@neko-os/ui'

const [value, setValue] = React.useState()

<RadioGroup
  value={value}
  onChange={setValue}
  options={[
    { label: 'Option A', value: 'A' },
    { label: 'Option B', value: 'B' },
    { label: 'Option C', value: 'C' },
  ]}
/>
`

const CONTENT = (
  <View gap={20} flex center>
    <RadioGroup
      options={[
        { label: 'Option A', value: 'A' },
        { label: 'Option B', value: 'B' },
        { label: 'Option C', value: 'C' },
      ]}
    />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Group" code={CODE} content={CONTENT} />
}
