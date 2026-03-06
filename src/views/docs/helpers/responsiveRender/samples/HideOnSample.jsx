import { Divider, HideOn, Tag, Text, View, useResponsive } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { HideOn } from '@neko-os/ui'

<HideOn xl>...</HideOn>
<HideOn lgu>...</HideOn>
<HideOn lg>...</HideOn>
<HideOn lgd>...</HideOn>
<HideOn mdu>...</HideOn>
<HideOn md>...</HideOn>
<HideOn mdd>...</HideOn>
<HideOn sm>...</HideOn>
<HideOn md lg xl>...</HideOn>
<HideOn native>...</HideOn>
<HideOn web>...</HideOn>
`

function Content() {
  const { screen } = useResponsive()

  return (
    <View flex center>
      <Text marginB="sm">
        Current screen size:{' '}
        <Text strong primary>
          {screen}
        </Text>
      </Text>
      <Divider maxWidth={20} line text4 />
      <View row center gap="md" wrap>
        <HideOn xl>
          <Tag label="Hide on xl" text2 fill />
        </HideOn>

        <HideOn lg>
          <Tag label="Hide on lg" text2 fill />
        </HideOn>

        <HideOn mdu>
          <Tag label="Hide on mdu" text2 fill />
        </HideOn>

        <HideOn md>
          <Tag label="Hide on md" text2 fill />
        </HideOn>

        <HideOn mdd>
          <Tag label="Hide on mdd" text2 fill />
        </HideOn>

        <HideOn sm>
          <Tag label="Hide on sm" text2 fill />
        </HideOn>

        <HideOn native>
          <Tag label="Hide on native" text2 fill />
        </HideOn>

        <HideOn web>
          <Tag label="Hide on web" text2 fill />
        </HideOn>
      </View>
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="HideOn" code={CODE} content={<Content />} />
}
