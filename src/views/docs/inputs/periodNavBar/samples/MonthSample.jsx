import { PeriodNavBar, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { PeriodNavBar } from '@neko-os/ui'

<PeriodNavBar type="month" />
`

function Content() {
  return (
    <View flex>
      <PeriodNavBar type="month" onChange={console.log} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Month" code={CODE} content={<Content />} />
}
