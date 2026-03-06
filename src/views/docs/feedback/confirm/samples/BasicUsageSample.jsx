import { Button, View, useConfirmer, useNotifier } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { useAlerts } from '@neko-os/ui'

const confirmer = useConfirmer()

confirmer.notify({ title: 'Title', description: "Custom message", onConfirm: () => {} })
confirmer.info({ title: 'Title', description: "Custom message" })
confirmer.error({ title: 'Title', description: "Custom message" })
confirmer.warning({ title: 'Title', description: "Custom message" })
confirmer.success({ title: 'Title', description: "Custom message" })
`

function Content() {
  const confirmer = useConfirmer()
  const notifier = useNotifier()

  return (
    <View gap={15} flex center row>
      <Button
        sm
        label="Simple"
        onPress={() =>
          confirmer.confirm({
            title: 'Simple Alert',
            description: 'Custom Message',
            onConfirm: () => notifier.info('Confirmed'),
          })
        }
      />

      <Button
        sm
        label="Info"
        blue
        onPress={() =>
          confirmer.info({
            title: 'Info Alert',
            description: 'Custom Message',
            onConfirm: () => notifier.info('Confirmed'),
          })
        }
      />

      <Button
        sm
        label="Error"
        red
        onPress={() =>
          confirmer.error({
            title: 'Error Alert',
            description: 'Custom Message',
            onConfirm: () => notifier.info('Confirmed'),
          })
        }
      />

      <Button
        sm
        label="Warning"
        yellow
        onPress={() =>
          confirmer.warning({
            title: 'Warning Alert',
            description: 'Custom Message',
            onConfirm: () => notifier.info('Confirmed'),
          })
        }
      />

      <Button
        sm
        label="Success"
        green
        onPress={() =>
          confirmer.success({
            title: 'Success Alert',
            description: 'Custom Message',
            onConfirm: () => notifier.info('Confirmed'),
          })
        }
      />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={<Content />} />
}
