import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
// When mainBG and overlayBG are very similar or identical,
// overlay components (Card, Section, TopBar, etc.) can blend
// into the background. useOverlayDivider solves this by
// enabling conditional borders on those components.

const paperTheme = {
  label: 'Paper',
  base: 'light',
  useOverlayDivider: true,  // ← enables overlay divider borders

  colors: {
    mainBG: '#F8F1E3',
    overlayBG: '#F8F1E3',  // same as mainBG — no contrast
    // ...
  },
}
`

const CODE2 = `
// Components use border="overlayDivider" in their defaults.
// This border only renders when the active theme has
// useOverlayDivider: true — otherwise it resolves to 0.

// How it works internally:
border="overlayDivider"
// → useOverlayDivider is true  → border: 1
// → useOverlayDivider is false → border: 0

// You can also use it on any border prop:
<View borderB="overlayDivider" />
<View borderT="overlayDivider" />
`

const CODE3 = `
// Components that use overlayDivider by default:
// Card       → border="overlayDivider"
// Section    → border="overlayDivider"
// TopBar     → borderB="overlayDivider"
// Table      → border="overlayDivider"

// These components automatically get a subtle border in
// themes like Paper or Hacker where backgrounds match,
// and no border in themes like Light or Dark where
// mainBG and overlayBG already have enough contrast.

// You can always override per-instance:
<Card border={true} />       // always show border
<Card border={5} />          // always show 5px border
<Card border={false} />      // never show border
`

const CODE_BASE_BORDER = `
// baseBorderWidth controls the default width used by
// border={true} and border="overlayDivider"

const thickBorderTheme = {
  label: 'Thick Borders',
  base: 'light',
  baseBorderWidth: 2,  // default is 1

  // ...
}

// How it affects border values:
border={true}             // → uses baseBorderWidth (2px)
border="overlayDivider"   // → uses baseBorderWidth (2px) when active
border={5}                // → explicit number, ignores baseBorderWidth
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Overlay Divider</Text>
      <Text text3>
        Some themes use the same or very similar colors for mainBG and overlayBG. In these cases, overlay components
        like Card and Section lose their visual separation from the background. The useOverlayDivider theme property
        enables conditional borders to restore that distinction.
      </Text>
      <CodeBlock code={CODE} />

      <Text text3>
        Components can set their border prop to "overlayDivider" instead of true or a number. This value is
        theme-aware — it only produces a border when the active theme has useOverlayDivider enabled.
      </Text>
      <CodeBlock code={CODE2} />

      <Text text3>
        Several built-in components already use this pattern by default, so they adapt automatically across themes.
      </Text>
      <CodeBlock code={CODE3} />

      <View gap="md">
        <Text h3>Base Border Width</Text>
        <Text text3>
          By default, border={'{true}'} and border="overlayDivider" resolve to a width of 1px. You can change this
          globally for a theme using the baseBorderWidth property.
        </Text>
        <CodeBlock code={CODE_BASE_BORDER} />
      </View>

      <Text text3 color="text3">
        For full details on border modifiers, overlayDivider usage, and baseBorderWidth, see the Border guide.
      </Text>
    </View>
  )
}
