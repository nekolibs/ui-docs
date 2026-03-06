import { I18n, Storage } from '@neko-os/ui'

// Sample to the translations guides
const LOCALES = {
  pt: {
    common: { save: 'Salvar' },

    users: {
      entity: 'Usuário',
      presentation: '{{name}} tem {{age}} anos',
      records_zero: 'Sem usuários',
      records_one: '{{count}} usuário',
      records: '{{count}} usuários',
      editPage: {
        title: 'Editando Usuário',
        title_clone: 'Clonando Usuário',
      },
    },
  },
  en: {
    common: { save: 'Save' },

    users: {
      entity: 'User',
      presentation: '{{name}} has {{age}} years old',
      records_zero: 'No users found',
      records_one: '{{count}} user',
      records: '{{count}} users',
      editPage: {
        title: 'Editing User',
        title_clone: 'Cloning User',
      },
    },
  },
}

export const i18n = new I18n({
  language: Storage.get('language') || 'en',
  // onChangeLanguage: (lang) => Storage.set('language', lang),
  fallback: 'en',
  resources: LOCALES,
})
