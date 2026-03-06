# @neko-os/ui Usage Guide

Quick reference for building apps with @neko-os/ui.

## Setup

```jsx
import { NekoUI, DEFAULT_THEMES } from '@neko-os/ui'

function App() {
  return (
    <NekoUI themes={DEFAULT_THEMES} initTheme="light">
      {/* Your app */}
    </NekoUI>
  )
}
```

## Core Components

```jsx
import { View, Text, Button, Icon, Card, ScrollView } from '@neko-os/ui'
```

## Modifiers

Props that translate to styles. Use theme keys or direct values.

### Spacing
```jsx
padding="md"              // All sides
paddingH="lg"             // Horizontal
paddingV="sm"             // Vertical
paddingT, paddingB        // Top, Bottom
paddingL, paddingR        // Left, Right
margin="md"               // Same pattern as padding
gap="md"                  // Space between children

// Sizes: xxxs, xxs, xs, sm, md, lg, xl, xxl, xxxl
```

### Layout
```jsx
row                       // Horizontal layout
center                    // Center both axes
centerV                   // Center vertically
centerH                   // Center horizontally
toRight, toLeft           // Horizontal alignment
toTop, toBottom           // Vertical alignment
flex                      // Fill available space
flex={2}                  // Proportional
wrap                      // Allow wrapping
```

### Size
```jsx
width={200}               // Fixed width
height={100}              // Fixed height
width="50%"               // Percentage
fullW                     // width: 100%
fullH                     // height: 100% (web only)
minW, maxW                // Min/max width
minH, maxH                // Min/max height
ratio={16/9}              // Aspect ratio
square                    // ratio={1}
span={12}                 // Grid: 12/24 = 50%
```

### Background
```jsx
bg="primary"              // Theme color
bg="overlayBG"            // Background
bg="mainBG"               // Main background
bg="#FF5733"              // Custom color
bg="primary-20"           // Lighter
bg="primary+20"           // Darker
bg="primary_op50"         // 50% opacity
bg={['red', 'blue']}      // Gradient
```

### Border
```jsx
br="md"                   // Border radius
brT="lg"                  // Top corners
brB="md"                  // Bottom corners
round                     // Fully round
border                    // 1px border
borderColor="primary"     // Border color
```

### Position
```jsx
absolute                  // position: absolute
relative                  // position: relative
absoluteFill              // Fill parent
top={0}, bottom, left, right
zIndex={10}
```

### Other
```jsx
shadow                    // Drop shadow
shadow="primary"          // Custom shadow color
hiddenOverflow            // Clip content
scrollY, scrollX          // Enable scroll
```

## Colors

### Semantic
```
primary       - Brand color
text          - Primary text
text2         - Secondary text
text3         - Muted text
text4         - Disabled text
mainBG        - App background
overlayBG     - Cards/modals background
divider       - Borders
backdrop      - Modal overlay
```

### Accent
```
blue, yellow, green, purple, orange, cyan, red
navy, indigo, gray, brown, lylac, pink
```

### Variants (auto-generated)
```jsx
"primary-10"   // Lighter (10, 20, 30, 40, 50, 60)
"primary+10"   // Darker (10, 20, 30, 40, 50, 60)
"primary_op50" // Opacity (10, 20, 30, 40, 50, 60, 70, 80, 90)
```

## Text

```jsx
<Text h1>Heading 1</Text>
<Text h2>Heading 2</Text>
<Text h3>Heading 3</Text>
<Text h4>Heading 4</Text>
<Text h5>Heading 5</Text>
<Text h6>Heading 6</Text>
<Text p>Paragraph (default)</Text>
<Text sm>Small</Text>
<Text xs>Extra small</Text>

<Text strong>Bold</Text>
<Text italic>Italic</Text>
<Text underline>Underlined</Text>
<Text center>Centered</Text>
<Text color="primary">Colored</Text>
```

## Button

```jsx
<Button>Label</Button>
<Button onPress={fn}>Click me</Button>
<Button icon="star-fill">With Icon</Button>
<Button icon="menu" ratio={1} />        // Square icon button
<Button icon="back" ratio={1} mainBG /> // With background
<Button disabled>Disabled</Button>
```

## Icon

Uses Remix Icons (https://remixicon.com/).

```jsx
<Icon name="home-3-line" />
<Icon name="home-3-fill" />
<Icon name="star-fill" size="lg" color="primary" />
```

## Common Patterns

### Card Layout
```jsx
<Card padding="md" gap="sm">
  <Text h4>Title</Text>
  <Text text3>Description</Text>
  <Button>Action</Button>
</Card>
```

### Header with Actions
```jsx
<TopBar
  title="Page Title"
  subtitle="Optional"
  left={<Button icon="arrow-left-s-line" ratio={1} mainBG />}
  right={<Button icon="more-2-fill" ratio={1} mainBG />}
/>
```

### Bottom Navigation
```jsx
const items = [
  { label: 'Home', icon: 'home-3-line' },
  { label: 'Search', icon: 'search-line' },
  { label: 'Profile', icon: 'user-line' },
]

<FloatingMenu
  items={items}
  activeIndex={index}
  onChange={(item, i) => setIndex(i)}
/>
```

### Loading States
```jsx
<StatePresenter loading={isLoading} error={error} empty={!data.length}>
  <Content data={data} />
</StatePresenter>
```

### Centered Content
```jsx
<View flex center>
  <Text>Centered in parent</Text>
</View>
```

### Row Layout
```jsx
<View row gap="md" centerV>
  <Icon name="star-fill" />
  <Text>Side by side</Text>
</View>
```

### Sidebar Layout
```jsx
<View row flex>
  <View width={250} bg="overlayBG">Sidebar</View>
  <View flex>Main content</View>
</View>
```

## Responsive

```jsx
// Responsive props
<View padding={{ sm: 'sm', md: 'md', lg: 'lg' }} />
<Grid cols={{ sm: 1, md: 2, lg: 4 }} />

// Show/hide based on breakpoint
<ShowOn mdu={true}><DesktopOnly /></ShowOn>
<HideOn smd={true}><HiddenOnMobile /></HideOn>

// Hook
const isMobile = useResponsiveValue({ mdd: true, mdu: false })

// Breakpoints: sm (<768), md (<1024), lg (<1440), xl (>=1440)
// Modifiers: smu (sm up), mdd (md down), etc.
```

## Storage

```jsx
import { Storage } from '@neko-os/ui'

// Set/Get (auto JSON serialized)
Storage.set('user', { name: 'John' })
const user = Storage.get('user')
const theme = Storage.get('theme', 'light')  // default value if not set
Storage.remove('user')

// React hook with persistence
const [theme, setTheme] = Storage.useState('theme', 'light')
```

## Theme

### Change Theme
```jsx
const { activeThemeKey, onChangeTheme, toggleTheme } = useThemeHandler()

<Button onPress={toggleTheme}>Toggle Dark Mode</Button>
<Button onPress={() => onChangeTheme('dark')}>Dark</Button>
```

### Theme Picker
```jsx
<ThemePicker />
<ThemePicker onlyKeys={['light', 'dark']} />
```

### Access Theme Values
```jsx
const colors = useColors()
const theme = useTheme()

<View bg={colors.primary} />
```

### Custom Theme
```jsx
const myTheme = {
  label: 'My Theme',
  base: 'light',  // Extends light theme
  colors: {
    primary: '#FF6B35',
    // Only override what you need
  },
}

const themes = { ...DEFAULT_THEMES, custom: myTheme }

<NekoUI themes={themes} initTheme="custom">
```

### Global Overrides
```jsx
const themes = {
  ...DEFAULT_THEMES,
  _all: {
    colors: { primary: '#FF6B35' }  // Applied to ALL themes
  }
}
```

## Mobile-Only (React Native)

### Animated TopBar
```jsx
<ReanimatedScrollHandler>
  <AnimatedTopBar title="Title" showAfter={90} fade />
  <AnimatedFlatList onScroll={scrollHandler} ... />
</ReanimatedScrollHandler>
```

### Parallax Header
```jsx
<ParallaxHeader height={250}>
  <ImageBackground src="..." height={250} />
</ParallaxHeader>
```

### Status Bar
```jsx
<ThemeStatusBar />  // Auto light/dark based on theme
```
