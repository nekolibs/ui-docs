import { ActiveStepContent, StepsNavigation, StepsHandler, StepsMenu, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { ActiveStepContent, StepsHandler, StepsMenu, StepsNavigation } from '@neko-os/ui'

<StepsHandler items={items}>
  <View row gap="md">
    <View width="25%" borderR fullH>
      <StepsMenu vertical borderR />
    </View>

    <View flex gap="md">
      <ActiveStepContent />
      <StepsNavigation sm />
    </View>
  </View>
</StepsHandler>
`

const items = [
  {
    label: 'Account',
    renderContent: () => (
      <View bg="overlayBG" br="lg" padding="md" gap="sm" flex>
        <Text h4>Create your account</Text>
        <Text text3>Enter your email address and choose a password to get started.</Text>
      </View>
    ),
  },
  {
    label: 'Profile',
    renderContent: () => (
      <View bg="overlayBG" br="lg" padding="md" gap="sm" flex>
        <Text h4>Complete your profile</Text>
        <Text text3>Add your name, photo, and a short bio so others can find you.</Text>
      </View>
    ),
  },
  {
    label: 'Review',
    renderContent: () => (
      <View bg="overlayBG" br="lg" padding="md" gap="sm" flex>
        <Text h4>Review & submit</Text>
        <Text text3>Double-check your details before creating your account.</Text>
      </View>
    ),
  },
]

const CONTENT = (
  <View fullW>
    <StepsHandler items={items} onSubmit={() => console.log('Done!')}>
      <View row gap="md">
        <View width="25%" borderR fullH>
          <StepsMenu vertical borderR />
        </View>

        <View flex gap="md">
          <ActiveStepContent />
          <StepsNavigation sm />
        </View>
      </View>
    </StepsHandler>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Vertical" code={CODE} content={CONTENT} />
}
