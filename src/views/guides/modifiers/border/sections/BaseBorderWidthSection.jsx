import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
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
      <Text h3>Base Border Width</Text>
      <Text text3>
        By default, border={'{true}'} and border="overlayDivider" resolve to a width of 1px. You can change this
        globally for a theme using the baseBorderWidth property.
      </Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
