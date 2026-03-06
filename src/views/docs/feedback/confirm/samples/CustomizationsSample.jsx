import { Button, View, useConfirmer, useNotifier } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { useAlerts } from '@neko-os/ui'

const alerter = useAlerter()

// Receives the same props as Result
confirmer.confirm({
  icon: 'bear-smile-line',
  iconColor: 'purple',
  title: 'Simple notification',
  description: 'Second line',
  cancelLabel: 'No',
  confirmLabel: 'Yes',
  onConfirm: () => {},
  // width: 400,
})
`

function Content() {
  const confirmer = useConfirmer()
  const notifier = useNotifier()

  return (
    <View gap={15} flex center row>
      <Button
        sm
        label="Custom Alert"
        onPress={() =>
          confirmer.confirm({
            icon: 'bear-smile-line',
            iconColor: 'purple',
            title: 'Simple notification',
            description: 'Second line',
            cancelLabel: 'No',
            confirmLabel: 'Yes',
            onConfirm: () => notifier.info('Confirmed'),
          })
        }
      />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Customizations" code={CODE} content={<Content />} />
}
