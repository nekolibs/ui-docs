import { PeriodNavBar, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { PeriodNavBar } from '@neko-os/ui'

<PeriodNavBar type="year" />
`

function Content() {
  return (
    <View flex>
      <PeriodNavBar type="year" onChange={console.log} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Year" code={CODE} content={<Content />} />
}
