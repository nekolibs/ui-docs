import { Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Text } from '@neko-os/ui'

<Text label="..." numberOfLines={2} />
`

const CONTENT = (
  <View row gap={15} flex center>
    <Text
      label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      numberOfLines={2}
      maxWidth={350}
    />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Number of lines" code={CODE} content={CONTENT} />
}
