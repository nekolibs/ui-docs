import { View, Rate } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Rate } from '@neko-os/ui'

const customIcons = {
  1: 'emotion-unhappy-fill',
  2: 'emotion-sad-fill',
  3: 'emotion-normal-fill',
  4: 'emotion-happy-fill',
  5: 'emotion-laugh-fill',
}

<Rate icon="heart-fill" />
<Rate icon={({ optionValue }) => customIcons[optionValue]} />
<Rate icon={({ active }) => (active ? 'star-fill' : 'star-line')} />
`

const customIcons = {
  1: 'emotion-unhappy-fill',
  2: 'emotion-sad-fill',
  3: 'emotion-normal-fill',
  4: 'emotion-happy-fill',
  5: 'emotion-laugh-fill',
}

function Content() {
  return (
    <View gap={10} flex centerV>
      <Rate value={4} icon="heart-fill" />
      <Rate value={3} icon={({ optionValue }) => customIcons[optionValue]} />
      <Rate value={2} icon={({ active }) => (active ? 'star-fill' : 'star-line')} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Icons" code={CODE} content={<Content />} />
}
