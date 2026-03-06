import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { I18n, NekoUI, Storage } from '@neko-os/ui'
import * as Localization from 'expo-localization'

const getLanguage = () => {
  const stored = Storage.get('language')
  if (stored) return stored

  return Localization.getLocales()[0]?.languageCode || 'en'
}

export const i18n = new I18n({
  language: getLanguage(),
  onChangeLanguage: (lang) => Storage.set('language', lang),
  fallback: 'en',
  resources: {
    pt: { common: { save: 'Salvar' } },
    en: { common: { save: 'Save' } },
  },
})

function App() {
  return (
    <NekoUI i18n={i18n}>
      ...
    </NekoUI>
  )
}
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Expo Device Language</Text>
      <Text text3>
        Use the device language from Expo as the default, but prioritize the user's stored preference from Storage if
        available.
      </Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
