import { ActiveStepContent, StepsNavigation, StepsHandler, StepsMenu, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { ActiveStepContent, StepsHandler, StepsMenu, StepsNavigation } from '@neko-os/ui'

// When navigating back, previously unlocked steps become locked again
<StepsHandler items={items} resetMaxIndexOnNavigate>
  ...
</StepsHandler>
`

const items = [
  {
    label: 'Step 1',
    renderContent: () => (
      <View bg="overlayBG" br="lg" padding="md" gap="sm">
        <Text h4>Step 1</Text>
        <Text text3>Advance to step 2, then go back. Step 2 will be locked again.</Text>
      </View>
    ),
  },
  {
    label: 'Step 2',
    renderContent: () => (
      <View bg="overlayBG" br="lg" padding="md" gap="sm">
        <Text h4>Step 2</Text>
        <Text text3>Go back to step 1 — this step will lock and you must advance again.</Text>
      </View>
    ),
  },
  {
    label: 'Step 3',
    renderContent: () => (
      <View bg="overlayBG" br="lg" padding="md" gap="sm">
        <Text h4>Step 3</Text>
        <Text text3>Final step.</Text>
      </View>
    ),
  },
]

const CONTENT = (
  <View fullW gap="md">
    <StepsHandler items={items} resetMaxIndexOnNavigate>
      <View row gap="md" centerV borderB>
        <StepsMenu flex />
        <StepsNavigation sm />
      </View>

      <ActiveStepContent />
    </StepsHandler>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Reset on Navigate" code={CODE} content={CONTENT} />
}
