import { ActiveStepContent, StepsNavigation, StepsHandler, StepsMenu, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { ActiveStepContent, StepsHandler, StepsMenu, StepsNavigation } from '@neko-os/ui'

const items = [
  {
    label: 'Step 1',
    renderContent: () => <Text>This step simulates an async validation.</Text>,
    onValidate: () => new Promise((resolve) => setTimeout(resolve, 2000)),
  },
  {
    label: 'Step 2',
    renderContent: () => <Text>Async validation passed!</Text>,
  },
]

<StepsHandler items={items}>
  ...
</StepsHandler>
`

const items = [
  {
    label: 'Upload',
    renderContent: () => (
      <View bg="overlayBG" br="lg" padding="md" gap="sm">
        <Text h4>Upload files</Text>
        <Text text3>Click Next to simulate an async validation (2s delay). The button will show a loading state.</Text>
      </View>
    ),
    onValidate: () => new Promise((resolve) => setTimeout(resolve, 2000)),
  },
  {
    label: 'Process',
    renderContent: () => (
      <View bg="overlayBG" br="lg" padding="md" gap="sm">
        <Text h4>Processing</Text>
        <Text text3>This step also has a 2s async validation before finishing.</Text>
      </View>
    ),
    onValidate: () => new Promise((resolve) => setTimeout(resolve, 2000)),
  },
  {
    label: 'Complete',
    renderContent: () => (
      <View bg="overlayBG" br="lg" padding="md" gap="sm">
        <Text h4>Complete</Text>
        <Text text3>All steps passed async validation.</Text>
      </View>
    ),
  },
]

const CONTENT = (
  <View fullW gap="md">
    <StepsHandler items={items}>
      <View row gap="md" centerV borderB>
        <StepsMenu flex />
        <StepsNavigation sm />
      </View>

      <ActiveStepContent />
    </StepsHandler>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Async Validation" code={CODE} content={CONTENT} />
}
