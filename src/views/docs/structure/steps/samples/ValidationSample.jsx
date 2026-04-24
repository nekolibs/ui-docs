import { ActiveStepContent, StepsNavigation, StepsHandler, StepsMenu, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { ActiveStepContent, StepsHandler, StepsMenu, StepsNavigation } from '@neko-os/ui'

const items = [
  {
    label: 'Step 1',
    renderContent: () => <Text>This step validates before advancing.</Text>,
    onValidate: () => {
      // Return false to block navigation
      const isValid = window.confirm('Proceed?')
      return isValid
    },
  },
  {
    label: 'Step 2',
    renderContent: () => <Text>You passed validation!</Text>,
  },
]

<StepsHandler items={items}>
  ...
</StepsHandler>
`

const items = [
  {
    label: 'Details',
    renderContent: () => (
      <View bg="overlayBG" br="lg" padding="md" gap="sm">
        <Text h4>Enter details</Text>
        <Text text3>Click Next — a confirm dialog will ask if you want to proceed. Cancel to stay on this step.</Text>
      </View>
    ),
    onValidate: () => window.confirm('All fields filled? Proceed to next step?'),
  },
  {
    label: 'Confirm',
    renderContent: () => (
      <View bg="overlayBG" br="lg" padding="md" gap="sm">
        <Text h4>Confirmed</Text>
        <Text text3>You passed the validation step.</Text>
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
  return <SampleCodeBlock title="Step Validation" code={CODE} content={CONTENT} />
}
