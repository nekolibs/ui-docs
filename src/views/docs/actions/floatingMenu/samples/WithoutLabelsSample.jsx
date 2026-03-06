import { FloatingMenu, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { FloatingMenu } from '@neko-os/ui'

const items = [
  { icon: 'home-3-line' },
  { icon: 'search-line' },
  { icon: 'heart-line' },
  { icon: 'user-line' },
]

<FloatingMenu items={items} activeIndex={0} />
`

const items = [{ icon: 'home-3-line' }, { icon: 'search-line' }, { icon: 'heart-line' }, { icon: 'user-line' }]

function Content() {
  const [index, setIndex] = React.useState(0)

  return (
    <View height={120} fullW relative>
      <FloatingMenu items={items} onChange={(item, i) => setIndex(i)} activeIndex={index} />
    </View>
  )
}

export default function WithoutLabelsSample() {
  return <SampleCodeBlock title="Without Labels" code={CODE} content={<Content />} />
}
