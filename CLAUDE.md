# NekoUI Documentation App

This is the documentation website for the @neko-os/ui library.

## Library Overview

@neko-os/ui is a cross-platform UI library for web and React Native. Key features:

- **Modifier-based styling**: Props like `padding="md"`, `bg="primary"`, `br="lg"` instead of inline styles
- **Theme system**: Colors, spacing, radius scales with auto-generated color variants
- **Cross-platform**: Same code works on web and mobile
- **Responsive**: Built-in breakpoints and responsive value support

## Library Location

The library source code is located at:
```
front/node_modules/@neko-os/ui/src/
```

Key folders:
- `components/` - All UI components (View, Text, Button, etc.)
- `modifiers/` - Modifier hooks (padding, margin, size, background, etc.)
- `theme/` - Theme handler, default themes, color variations
- `responsive/` - Responsive hooks and breakpoint handling
- `helpers/` - Utilities like Storage
- `abstractions/` - Platform-specific implementations (.js for web, .native.js for mobile)

## Styling Conventions

- **Always use theme scale values** (`xxxs`, `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`, `xxxl`) for padding, margin, gap, and border radius — never absolute numbers
- Theme scales apply to: `spaces`, `radius`, `icons`, `elementHeights`, `texts`

## Documentation Structure

### Home Page (`src/views/home/`)

Landing page split into section components:
- `HomePage.jsx` - Main wrapper composing sections
- `HeroSection.jsx` - Title, tagline, CTA buttons
- `FeaturesSection.jsx` - Feature cards grid
- `CodeComparisonSection.jsx` - Traditional vs NekoUI code comparison
- `ThemeSection.jsx` - Theme structure showcase

### Component Docs (`src/views/docs/`)

Component documentation with interactive samples:

```
src/views/docs/[category]/[component]/
├── [Component]DocPage.jsx      # Main page importing samples
└── samples/
    ├── BasicUsageSample.jsx    # Each sample is a separate file
    └── OtherSample.jsx
```

**Categories:**
- `structure/` - View, Card, Tabs, TopBar, etc.
- `modals/` - Modal, Drawer, BottomDrawer, ModalsRouter
- `actions/` - Button, Link, Menu, FloatingMenu, etc.
- `text/` - Text, VerticalText
- `form/` - Form, FormItem, FormList, FormGroup, SubmitButton
- `inputs/` - TextInput, Checkbox, Select, etc.
- `presentation/` - Icon, Avatar, Badge, Tag, etc.
- `table/` - Table, Pagination
- `list/` - ScrollView, FlatList
- `feedback/` - Notifications, Alert, Confirm
- `helpers/` - Divider, LazyRender, ResponsiveRender, VerticalView
- `state/` - Loading, StatePresenter
- `animations/` - AnimatedView, AnimatedTopBar, ParallaxHeader

**Sample file pattern:**
```jsx
import { SomeComponent, View } from '@neko-os/ui'
import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
// Code shown to user
<SomeComponent prop="value" />
`

const CONTENT = (
  <View>
    <SomeComponent prop="value" />
  </View>
)

export default function BasicUsageSample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} bg="transparent" padding={0} border={0} br={0} />
}
```

### Guide Docs (`src/views/guides/`)

Traditional documentation with code blocks (no interactive samples):

```
src/views/guides/[topic]/[subtopic]/
├── [Topic]GuidePage.jsx        # Main page importing sections
└── sections/
    ├── Section1.jsx
    └── Section2.jsx
```

**Topics:**
- `install/` - Installation and setup
- `theme/` - Theme setup, colors, custom themes, ThemePicker
- `modifiers/` - Spacing, Layout, Size, Styling
- `responsive/` - Breakpoints, responsive values, ShowOn/HideOn
- `storage/` - Cross-platform storage API
- `i18n/` - Internationalization

**Section file pattern:**
```jsx
import { Text, View } from '@neko-os/ui'
import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
// Code example
`

export default function Section() {
  return (
    <View gap="md">
      <View>
        <Text h3>Section Title</Text>
        <Text text3>Description text.</Text>
      </View>
      <CodeBlock code={CODE} />
    </View>
  )
}
```

## Routing

Routes are defined in `src/views/AppRoutes.jsx`:
- `/` - Home page
- `/examples` - Examples (coming soon)
- `/guides/[topic]` - Guide documentation
- `/docs/[component]` - Component documentation

## Layout

- `src/containers/layouts/BaseLayout.jsx` - Outer layout (TopBar + Outlet)
- `src/containers/layouts/DocsLayout.jsx` - Docs pages (sidebar + content)
- `src/containers/layouts/GuidesLayout.jsx` - Guide pages (sidebar + content)
- `src/containers/menus/TopBarMenu.jsx` - Top navigation bar
- `src/containers/menus/Footer.jsx` - Site footer
- `src/containers/menus/DocsMenu.jsx` - Component docs sidebar
- `src/containers/menus/GuidesMenu.jsx` - Guides sidebar

## Quick Reference

### Adding a new component doc:
1. Create folder: `src/views/docs/[category]/[component]/`
2. Create `[Component]DocPage.jsx` and `samples/` folder
3. Add route in `AppRoutes.jsx`
4. Add menu item in `DocsMenu.jsx` (keep alphabetical order within section)

### Adding a new guide:
1. Create folder: `src/views/guides/[topic]/[subtopic]/`
2. Create `[Topic]GuidePage.jsx` and `sections/` folder
3. Add route in `AppRoutes.jsx`
4. Add menu item in `GuidesMenu.jsx`

### Sidebar ordering:
- Items within each section in `DocsMenu.jsx` must be sorted alphabetically
