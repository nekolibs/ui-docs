import { GradientView, View, Text } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { GradientView } from '@neko-os/ui'

<GradientView bg={['green', 'blue']} angle={45}>...</GradientView>
<GradientView bg={['green', 'blue']} angle={180}>...</GradientView>
<GradientView bg={['primary_op60', 'primary', 'primary_op40']} angle={45}>...</GradientView>
<GradientView bg={['#000', '#fff']} angle={300}>...</GradientView>
`

const CONTENT = (
  <View flex centerV row gap="xs" wrap>
    <GradientView width="21%" ratio={1} border bg={['green', 'blue']} br="md" angle={45} />
    <GradientView width="21%" ratio={1} border bg={['green', 'blue']} br="md" angle={180} />
    <GradientView width="21%" ratio={1} border bg={['primary_op60', 'primary', 'primary_op40']} br="md" angle={45} />
    <GradientView width="21%" ratio={1} border bg={['#000', '#fff']} br="md" angle={300} />
  </View>
)

export default function BasicUsageSample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} />
}
