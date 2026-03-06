import { Text, View, useTranslation } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { Text, useTranslation } from '@neko-os/ui'

function MyComponent() {
  // Uses 'common' namespace as default
  const { t } = useTranslation()

  return (
    <Text>{t("save")}</Text>
  )
}
`

export default function Section() {
  const { t } = useTranslation()

  return (
    <View gap="xs">
      <Text h3 marginB="sm">
        Use Translation
      </Text>

      <CodeBlock code={CODE} />

      <Text text3>Result:</Text>

      <View padding="md" bg="mainBG" br="lg">
        <Text>{t('save')}</Text>
      </View>
    </View>
  )
}
