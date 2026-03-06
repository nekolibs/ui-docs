import { Select, Text, View, useTranslation } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { Text, useTranslation } from '@neko-os/ui'

function MyComponent() {
  const { changeLanguage, language } = useTranslation()

  return (
    <Select
      options={[
        { label: 'EN', value: 'en' },
        { label: 'PT', value: 'pt' },
      ]}
      onChange={changeLanguage}
      value={language}
    />
  )
}
`

export default function Section() {
  const { t, changeLanguage, language } = useTranslation()

  return (
    <View gap="xs">
      <Text h3 marginB="sm">
        Change Language
      </Text>

      <CodeBlock code={CODE} />

      <Text text3>Result:</Text>

      <View padding="md" bg="mainBG" br="lg" row centerV gap="md">
        <View width={200}>
          <Select
            options={[
              { label: 'EN', value: 'en' },
              { label: 'PT', value: 'pt' },
            ]}
            onChange={changeLanguage}
            value={language}
          />
        </View>

        <Text>{t('save')}</Text>
      </View>
    </View>
  )
}
