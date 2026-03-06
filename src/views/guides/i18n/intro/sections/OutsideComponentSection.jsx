import { Text, View, useTranslation } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { I18n } from '@neko-os/ui'

export const i18n = new I18n(...)

const translatedValue = i18n.t("save")
`

export default function Section() {
  const { t, changeLanguage, language } = useTranslation()

  return (
    <View gap="xs">
      <Text h3 marginB="sm">
        Outside Component
      </Text>

      <CodeBlock code={CODE} />

      <Text orange>Note that this won't update when the the language changes</Text>
    </View>
  )
}
