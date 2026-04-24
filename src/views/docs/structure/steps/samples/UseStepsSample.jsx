import { ActiveStepContent, StepsHandler, StepsMenu, Button, Text, View, useSteps } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { StepsHandler, useSteps, Button } from '@neko-os/ui'

function StepInfo() {
  const { activeIndex, items, isLastStep, moveToNextStep, moveToPrevStep } = useSteps()

  return (
    <View row gap="sm">
      <Text text3>Step {activeIndex + 1} of {items.length}</Text>
      <Button label="Prev" onPress={moveToPrevStep} xs outline disabled={activeIndex === 0} />
      <Button label={isLastStep ? 'Finish' : 'Next'} onPress={moveToNextStep} xs />
    </View>
  )
}

<StepsHandler items={items}>
  <StepsMenu />
  <ActiveStepContent />
  <StepInfo />
</StepsHandler>
`

function StepInfo() {
  const { activeIndex, items, isLastStep, moveToNextStep, moveToPrevStep } = useSteps()

  return (
    <View row gap="sm" centerV>
      <Text text3>Step {activeIndex + 1} of {items.length}</Text>
      <Button label="Prev" onPress={moveToPrevStep} xs outline disabled={activeIndex === 0} />
      <Button label={isLastStep ? 'Finish' : 'Next'} onPress={moveToNextStep} xs />
    </View>
  )
}

const items = [
  {
    label: 'Info',
    renderContent: () => (
      <View bg="overlayBG" br="lg" padding="md" gap="sm">
        <Text h4>Your info</Text>
        <Text text3>Custom navigation built with the useSteps hook.</Text>
      </View>
    ),
  },
  {
    label: 'Preferences',
    renderContent: () => (
      <View bg="overlayBG" br="lg" padding="md" gap="sm">
        <Text h4>Preferences</Text>
        <Text text3>Configure your settings.</Text>
      </View>
    ),
  },
  {
    label: 'Done',
    renderContent: () => (
      <View bg="overlayBG" br="lg" padding="md" gap="sm">
        <Text h4>All done</Text>
        <Text text3>You reached the last step.</Text>
      </View>
    ),
  },
]

function Content() {
  return (
    <View fullW gap="md">
      <StepsHandler items={items}>
        <StepsMenu borderB />

        <ActiveStepContent />
        <StepInfo />
      </StepsHandler>
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="useSteps Hook" code={CODE} content={<Content />} />
}
