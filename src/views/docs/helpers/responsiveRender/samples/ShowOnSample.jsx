import { Divider, ShowOn, Tag, Text, View, useResponsive } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { ShowOn } from '@neko-os/ui'

<ShowOn xl>...</ShowOn>
<ShowOn lgu>...</ShowOn>
<ShowOn lg>...</ShowOn>
<ShowOn lgd>...</ShowOn>
<ShowOn mdu>...</ShowOn>
<ShowOn md>...</ShowOn>
<ShowOn mdd>...</ShowOn>
<ShowOn sm>...</ShowOn>
<ShowOn md lg xl>...</ShowOn>
<ShowOn native>...</ShowOn>
<ShowOn web>...</ShowOn>
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
        <ShowOn xl>
          <Tag label="Show on xl" text2 fill />
        </ShowOn>

        <ShowOn lg>
          <Tag label="Show on lg" text2 fill />
        </ShowOn>

        <ShowOn mdu>
          <Tag label="Show on mdu" text2 fill />
        </ShowOn>

        <ShowOn md>
          <Tag label="Show on md" text2 fill />
        </ShowOn>

        <ShowOn mdd>
          <Tag label="Show on mdd" text2 fill />
        </ShowOn>

        <ShowOn sm>
          <Tag label="Show on sm" text2 fill />
        </ShowOn>

        <ShowOn native>
          <Tag label="Show on native" text2 fill />
        </ShowOn>

        <ShowOn web>
          <Tag label="Show on web" text2 fill />
        </ShowOn>
      </View>
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="ShowOn" code={CODE} content={<Content />} />
}
