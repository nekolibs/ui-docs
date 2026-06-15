import { RoutedStepsContent, StepsHandler, StepsMenu, StepsNavigation, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { StepsHandler, StepsMenu, StepsNavigation, RoutedStepsContent } from '@neko-os/ui'

const items = [
  { label: 'Welcome', renderContent: () => <Welcome /> },
  { label: 'Details', renderContent: () => <Details /> },
  { label: 'Done',    renderContent: () => <Done /> },
]

// Native: each step is its own native-stack screen (push/pop + swipe back).
// Plain web: falls back to in-place rendering (no native transitions).
// RoutedStepsContent adds no state — StepsHandler stays the source of truth,
// so StepsMenu / StepsNavigation / useSteps work exactly like with ActiveStepContent.
<StepsHandler items={items} onSubmit={() => console.log('done')}>
  <StepsMenu borderB />
  <RoutedStepsContent flex />
  <View padding="md" borderT>
    <StepsNavigation />
  </View>
</StepsHandler>
`

function Panel({ title, text }) {
  return (
    <View bg="mainBG" br="lg" padding="md" gap="sm">
      <Text h4>{title}</Text>
      <Text text3>{text}</Text>
    </View>
  )
}

const items = [
  { label: 'Welcome', renderContent: () => <Panel title="Welcome" text="On native, each step is its own screen with a real push/pop transition." /> },
  { label: 'Details', renderContent: () => <Panel title="Details" text="Use Next / Back (or the menu) to move between steps." /> },
  { label: 'Done', renderContent: () => <Panel title="All done" text="You reached the last step." /> },
]

function Content() {
  return (
    <View height={300} fullW>
      <StepsHandler items={items} onSubmit={() => {}}>
        <StepsMenu borderB />
        <RoutedStepsContent flex />
        <View padding="md" borderT>
          <StepsNavigation />
        </View>
      </StepsHandler>
    </View>
  )
}

export default function BasicUsageSample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={<Content />} fullW />
}
