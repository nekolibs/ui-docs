import { HideOn, Icon, LayoutHeader, Link, Menu, View, useThemeHandler, useTranslation } from '@neko-os/ui'
import { useLocation, useNavigate } from 'react-router'

const ITEMS = [
  { label: 'Home', icon: 'home-smile-line', key: '' },
  { label: 'Guides', icon: 'article-line', key: 'guides', path: 'guides/install' },
  { label: 'Components', icon: 'input-field', key: 'docs', path: 'docs/view' },
  { label: 'Examples', icon: 'layout-line', key: 'examples' },
]

export default function TopBarMenu() {
  const { openThemePicker } = useThemeHandler()
  const navigate = useNavigate()
  const location = useLocation()
  const { t, changeLanguage } = useTranslation()

  const activePath = location.pathname.split('/')[1] || ''

  return (
    <LayoutHeader height={65} borderB>
      <View flex row>
        <Link strong h5 onPress={() => navigate('/')}>
          NekoUI
        </Link>
      </View>

      <HideOn sm>
        <View center row gap={30} flex>
          <Menu
            items={ITEMS}
            activeKey={activePath}
            onChange={({ key, path }) => navigate(`/${path || key}`)}
            height={65}
            gap="xs"
          />
        </View>
      </HideOn>

      <View toRight centerV flex row>
        <Link href="https://github.com/nekolibs/ui" target="_blank" padding="sm">
          <Icon name="github-fill" />
        </Link>
        <Link onPress={openThemePicker} padding="sm">
          <Icon name="paint-fill" />
        </Link>
      </View>
    </LayoutHeader>
  )
}
