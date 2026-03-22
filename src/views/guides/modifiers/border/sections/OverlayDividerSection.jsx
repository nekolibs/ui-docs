import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
// border="overlayDivider" is a theme-aware border value.
// It only produces a border when the active theme has
// useOverlayDivider: true — otherwise it resolves to 0.

// How it works:
border="overlayDivider"
// → useOverlayDivider is true  → border: baseBorderWidth (default 1)
// → useOverlayDivider is false → border: 0

// You can use it on any border prop:
<View border="overlayDivider" />
<View borderB="overlayDivider" />
<View borderT="overlayDivider" />
`

const CODE_COMPONENTS = `
// Components that use overlayDivider by default:
// Card       → border="overlayDivider"
// Section    → border="overlayDivider"
// TopBar     → borderB="overlayDivider"
// Table      → border="overlayDivider"

// These components automatically get a subtle border in
// themes where mainBG and overlayBG are the same (e.g. Paper),
// and no border in themes where they already contrast (e.g. Dark).

// You can always override per-instance:
<Card border={true} />       // always show border
<Card border={5} />          // always show 5px border
<Card border={false} />      // never show border
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Overlay Divider</Text>
      <Text text3>
        When a theme uses the same color for mainBG and overlayBG, overlay components like Card and Section lose their
        visual separation. The "overlayDivider" border value solves this — it conditionally adds a border based on the
        active theme's useOverlayDivider setting.
      </Text>
      <CodeBlock code={CODE} />

      <Text text3>
        Several built-in components already use this pattern by default, so they adapt automatically across themes.
      </Text>
      <CodeBlock code={CODE_COMPONENTS} />
    </View>
  )
}
