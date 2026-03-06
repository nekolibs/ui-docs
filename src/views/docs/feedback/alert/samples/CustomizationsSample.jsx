import { Button, View, useAlerter } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { useAlerts } from '@neko-os/ui'

const alerter = useAlerter()

// Receives the same props as Result
alerter.alert({
  icon: 'bear-smile-line',
  iconColor: 'purple',
  title: 'Simple notification',
  description: 'Second line',
  hideClose: true,
  // closeLabel: "Custom",
  // width: 400,
})
`

function Content() {
  const alerter = useAlerter()

  return (
    <View gap={15} flex center row>
      <Button
        sm
        label="Custom Alert"
        onPress={() =>
          alerter.alert({
            icon: 'bear-smile-line',
            iconColor: 'purple',
            title: 'Simple notification',
            description: 'Second line',
            hideClose: true,
          })
        }
      />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Customizations" code={CODE} content={<Content />} />
}
