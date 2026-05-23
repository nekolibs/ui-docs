import { PeriodNavBar, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { PeriodNavBar } from '@neko-os/ui'

<PeriodNavBar type="quarter" />
`

function Content() {
  return (
    <View flex>
      <PeriodNavBar type="quarter" onChange={console.log} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Quarter" code={CODE} content={<Content />} />
}
