import { FloatingMenu, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { FloatingMenu } from '@neko-os/ui'

<FloatingMenu items={items} size="sm" />
<FloatingMenu items={items} size="md" />
<FloatingMenu items={items} size="lg" />
`

const items = [{ icon: 'home-3-line' }, { icon: 'search-line' }, { icon: 'user-line' }]

function Content() {
  const [index, setIndex] = React.useState(0)

  return (
    <View gap="xl" fullW relative>
      <View height={80} fullW relative>
        <FloatingMenu items={items} onChange={(item, i) => setIndex(i)} activeIndex={index} size="sm" />
      </View>
      <View height={80} fullW relative>
        <FloatingMenu items={items} onChange={(item, i) => setIndex(i)} activeIndex={index} size="md" />
      </View>
      <View height={80} fullW relative>
        <FloatingMenu items={items} onChange={(item, i) => setIndex(i)} activeIndex={index} size="lg" />
      </View>
    </View>
  )
}

export default function SizeSample() {
  return <SampleCodeBlock title="Sizes" code={CODE} content={<Content />} />
}
