import { FloatingMenu, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { FloatingMenu } from '@neko-os/ui'

const items = [
  { label: 'Home', icon: 'home-3-line' },
  { label: 'Search', icon: 'search-line' },
  { label: 'Profile', icon: 'user-line' },
]

<FloatingMenu items={items} onChange={(item) => console.log(item)} activeIndex={0} />
`

const items = [
  { label: 'Home', icon: 'home-3-line' },
  { label: 'Search', icon: 'search-line' },
  { label: 'Profile', icon: 'user-line' },
]

function Content() {
  const [index, setIndex] = React.useState(0)

  return (
    <View height={120} fullW relative>
      <FloatingMenu items={items} onChange={(item, i) => setIndex(i)} activeIndex={index} />
    </View>
  )
}

export default function BasicUsageSample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={<Content />} />
}
