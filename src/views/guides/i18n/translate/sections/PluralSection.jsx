import { Text, View, useTranslation } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { I18n, Text, useTranslation } from '@neko-os/ui'

export const i18n = new I18n({
  resources: {
    en: {
      users: {
        records_zero: 'No users found',
        records_one: '{{count}} user',
        records: '{{count}} users',
      },
    },
  },
})

function MyComponent() {
  const { t } = useTranslation('users')

  return (
    <View>
      <Text>{t('records', { count: 0 })}</Text>
      <Text>{t('records', { count: 1 })}</Text>
      <Text>{t('records', { count: 10 })}</Text>
    </View>
  )
}
`

export default function Section() {
  const { t } = useTranslation('users')

  return (
    <View gap="xs">
      <Text h3 marginB="sm">
        Plural
      </Text>

      <CodeBlock code={CODE} />

      <Text text3>Result:</Text>

      <View padding="md" bg="mainBG" br="lg">
        <Text>{t('records', { count: 0 })}</Text>
        <Text>{t('records', { count: 1 })}</Text>
        <Text>{t('records', { count: 10 })}</Text>
      </View>
    </View>
  )
}
