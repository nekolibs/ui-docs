import { Text, View, useTranslation } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { I18n, Text, useTranslation } from '@neko-os/ui'

export const i18n = new I18n({
  resources: {
    en: {
      users: {
        editPage: { title: 'Editing User' },
      },
    },
  },
})

function MyComponent() {
  const { t } = useTranslation('users')

  return (
    <View>
      <Text>{t("editPage.title")}</Text>
    </View>
  )
}
`

export default function Section() {
  const { t } = useTranslation('users')

  return (
    <View gap="xs">
      <Text h3 marginB="sm">
        Nested Key
      </Text>

      <CodeBlock code={CODE} />

      <Text text3>Result:</Text>

      <View padding="md" bg="mainBG" br="lg">
        <Text>{t('editPage.title')}</Text>
      </View>
    </View>
  )
}
