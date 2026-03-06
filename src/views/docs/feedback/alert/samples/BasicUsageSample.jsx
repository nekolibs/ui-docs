import { Button, View, useAlerter } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { useAlerts } from '@neko-os/ui'

const alerter = useAlerter()

alerter.notify('Simple notification')
alerter.notify({ title: 'Title', description: "Custom message" })
alerter.info({ title: 'Title', description: "Custom message" })
alerter.error({ title: 'Title', description: "Custom message" })
alerter.warning({ title: 'Title', description: "Custom message" })
alerter.success({ title: 'Title', description: "Custom message" })
`

function Content() {
  const alerter = useAlerter()

  return (
    <View gap={15} flex center row>
      <Button
        sm
        label="Simple"
        onPress={() =>
          alerter.alert({
            title: 'Simple Alert',
            description: 'Custom Message',
          })
        }
      />

      <Button
        sm
        label="Info"
        blue
        onPress={() =>
          alerter.info({
            title: 'Info Alert',
            description: 'Custom Message',
          })
        }
      />

      <Button
        sm
        label="Error"
        red
        onPress={() =>
          alerter.error({
            title: 'Error Alert',
            description: 'Custom Message',
          })
        }
      />

      <Button
        sm
        label="Warning"
        yellow
        onPress={() =>
          alerter.warning({
            title: 'Warning Alert',
            description: 'Custom Message',
          })
        }
      />

      <Button
        sm
        label="Success"
        green
        onPress={() =>
          alerter.success({
            title: 'Success Alert',
            description: 'Custom Message',
          })
        }
      />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={<Content />} />
}
