import { LayoutSider, Menu } from '@neko-os/ui'
import { useNavigate, useLocation } from 'react-router'

const SECTIONS = [
  { type: 'divider', label: 'Structure', line: false, marginT: 'xs' },
  { label: 'Accordion', key: 'accordion' },
  { label: 'BlurView', key: 'blurView' },
  { label: 'Card', key: 'card' },
  { label: 'GradientView', key: 'gradientView' },
  { label: 'Grid', key: 'grid' },
  { label: 'Layout', key: 'layout' },
  { label: 'Popover', key: 'popover' },
  { label: 'Section', key: 'section' },
  { label: 'Steps', key: 'steps' },
  { label: 'Tabs', key: 'tabs' },
  { label: 'TopBar', key: 'topBar' },
  { label: 'View', key: 'view' },

  { type: 'divider', label: 'Modals', marginT: 'xs' },
  { label: 'BottomDrawer (native)', key: 'bottomDrawer' },
  { label: 'Drawer (web)', key: 'drawer' },
  { label: 'Modal', key: 'modal' },
  { label: 'ModalsRouter', key: 'modalsRouter' },

  { type: 'divider', label: 'Actions', marginT: 'xs' },
  { label: 'ActionsDrawer', key: 'actionsDrawer' },
  { label: 'Breadcrumb', key: 'breadcrumb' },
  { label: 'Button', key: 'button' },
  { label: 'Dropdown', key: 'dropdown' },
  { label: 'FloatingButton', key: 'floatingButton' },
  { label: 'FloatingMenu', key: 'floatingMenu' },
  { label: 'Link', key: 'link' },
  { label: 'Menu', key: 'menu' },

  { type: 'divider', label: 'Typography', marginT: 'xs' },
  { label: 'Text', key: 'text' },
  { label: 'VerticalText', key: 'verticalText' },

  { type: 'divider', label: 'Form', marginT: 'xs' },
  { label: 'Form', key: 'form' },
  { label: 'FormGroup', key: 'formGroup' },
  { label: 'FormItem', key: 'formItem' },
  { label: 'FormList', key: 'formList' },
  { label: 'SubmitButton', key: 'submitButton' },
  { label: 'Validation Rules', key: 'validationRules' },

  { type: 'divider', label: 'Inputs', marginT: 'xs' },
  { label: 'Checkbox', key: 'checkbox' },
  { label: 'DateInput', key: 'dateInput' },
  { label: 'DatePicker', key: 'datePicker' },
  { label: 'Editable', key: 'editable' },
  { label: 'LinkInput', key: 'linkInput' },
  { label: 'MaskInput', key: 'maskInput' },
  { label: 'NumberInput', key: 'numberInput' },
  { label: 'NumberRangeInput', key: 'numberRangeInput' },
  { label: 'PasswordInput', key: 'passwordInput' },
  { label: 'Picker', key: 'picker' },
  { label: 'Radio', key: 'radio' },
  { label: 'RateInput', key: 'rateInput' },
  { label: 'SegmentedPicker', key: 'segmentedPicker' },
  { label: 'Select', key: 'select' },
  { label: 'Switch', key: 'switch' },
  { label: 'TextInput', key: 'textInput' },
  { label: 'Upload', key: 'upload' },
  { label: 'UploadInput', key: 'uploadInput' },

  { type: 'divider', label: 'Presentation', marginT: 'xs' },
  { label: 'Avatar', key: 'avatar' },
  { label: 'AvatarLabel', key: 'avatarLabel' },
  { label: 'AvatarsGroup', key: 'avatarsGroup' },
  { label: 'Badge', key: 'badge' },
  { label: 'Icon', key: 'icon' },
  { label: 'IconLabel', key: 'iconLabel' },
  { label: 'Image', key: 'image' },
  { label: 'ImageBackground', key: 'imageBackground' },
  { label: 'LabelValue', key: 'labelValue' },
  { label: 'Progress', key: 'progress' },
  { label: 'Rate', key: 'rate' },
  { label: 'RateTag', key: 'rateTag' },
  { label: 'Result', key: 'result' },
  { label: 'ResultBar', key: 'resultBar' },
  { label: 'Tag', key: 'tag' },
  { label: 'Tooltip', key: 'tooltip' },

  { type: 'divider', label: 'Filter', marginT: 'xs' },
  { label: 'FilterHandler', key: 'filterHandler' },
  { label: 'FilterItem', key: 'filterItem' },
  { label: 'PopoverFilterItem', key: 'popoverFilterItem' },
  { label: 'SearchInput', key: 'searchInput' },

  { type: 'divider', label: 'Table', marginT: 'xs' },
  { label: 'Pagination', key: 'pagination' },
  { label: 'Table', key: 'table' },

  { type: 'divider', label: 'List', marginT: 'xs' },
  { label: 'FlatList', key: 'flatList' },
  { label: 'ScrollView', key: 'scrollView' },

  { type: 'divider', label: 'Feedback', marginT: 'xs' },
  { label: 'Alert', key: 'alert' },
  { label: 'Confirm', key: 'confirm' },
  { label: 'Notifications', key: 'notifications' },

  { type: 'divider', label: 'Helpers', marginT: 'xs' },
  { label: 'Divider', key: 'divider' },
  { label: 'LazyRender', key: 'lazyRender' },
  { label: 'ResponsiveRender', key: 'responsiveRender' },
  { label: 'VerticalView', key: 'verticalView' },

  { type: 'divider', label: 'State', marginT: 'xs' },
  { label: 'Loading', key: 'loading' },
  { label: 'StatePresenter', key: 'statePresenter' },

  { type: 'divider', label: 'Animations', marginT: 'xs' },
  { label: 'AnimatedTopBar', key: 'animatedTopBar' },
  { label: 'AnimatedView', key: 'animatedView' },
  { label: 'ParallaxHeader', key: 'parallaxHeader' },
]

export default function DocsMenu() {
  const navigate = useNavigate()
  const location = useLocation()

  // Extract the current doc key from the path (e.g., /docs/card -> card)
  const activeKey = location.pathname.split('/docs/')[1] || ''

  return (
    <LayoutSider width={300} borderR scrollY sticky bg="overlayBG">
      <Menu
        vertical
        items={SECTIONS}
        onChange={({ key }) => navigate(`/docs/${key}`)}
        activeKey={activeKey}
        paddingB="xxxl"
      />
    </LayoutSider>
  )
}
