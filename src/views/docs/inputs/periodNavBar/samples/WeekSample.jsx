import { PeriodNavBar, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { PeriodNavBar } from '@neko-os/ui'

<PeriodNavBar type="week" />
`

function Content() {
  return (
    <View flex>
      <PeriodNavBar type="week" onChange={console.log} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Week" code={CODE} content={<Content />} />
}
