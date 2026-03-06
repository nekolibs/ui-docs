import { BlurView, FloatingMenu, ImageBackground, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { BlurView, FloatingMenu } from '@neko-os/ui'

const items = [
  { label: 'Home', icon: 'home-3-line' },
  { label: 'Search', icon: 'search-line' },
  { label: 'Profile', icon: 'user-line' },
]

<FloatingMenu items={items} WrapperView={BlurView} activeIndex={0}  intensity={60} />
`

const items = [{ icon: 'home-3-line' }, { icon: 'search-line' }, { icon: 'heart-line' }, { icon: 'user-line' }]

function Content() {
  const [index, setIndex] = React.useState(0)

  return (
    <ImageBackground src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d" height={200} fullW br="lg">
      <View height={200} fullW relative>
        <FloatingMenu
          items={items}
          onChange={(item, i) => setIndex(i)}
          activeIndex={index}
          WrapperView={BlurView}
          intensity={40}
        />
      </View>
    </ImageBackground>
  )
}

export default function BlurWrapperSample() {
  return (
    <SampleCodeBlock title="BlurView as WrapperView" code={CODE} content={<Content />} padding={0} bg="transparent" />
  )
}
