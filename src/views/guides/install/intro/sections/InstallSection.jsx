import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
# NPM
npm install @neko-os/ui
# YARN
yarn add @neko-os/ui
`

export default function InstallSection() {
  return (
    <View gap="md">
      <Text h3>Installation</Text>
      <Text text3>Install the library using your preferred package manager.</Text>
      <CodeBlock code={CODE} language="bash" />
    </View>
  )
}
