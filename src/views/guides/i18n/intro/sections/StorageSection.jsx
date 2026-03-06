import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { I18n, NekoUI, Storage } from '@neko-os/ui'

export const i18n = new I18n({
  language: Storage.get('language') || 'en',
  onChangeLanguage: (lang) => Storage.set('language', lang),
  fallback: 'en',
  resources: {
    pt: { common: { save:  'Salvar' } },
    en: { common: { save:  'Save'  } },
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
      <Text h3>Storage Setup</Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
