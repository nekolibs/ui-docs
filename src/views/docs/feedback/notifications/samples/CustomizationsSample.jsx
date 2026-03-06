import { Button, View, useNotifier } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { useNotifier } from '@neko-os/ui'

const notifier = useNotifier()

// Receives the same props as ResultBar
notifier.notify({
  icon: 'bear-smile-line',
  iconColor: 'purple',
  title: 'Simple notification',
  description: 'Second line',
})
`

function Content() {
  const { notify, info, success, warning, error } = useNotifier()

  return (
    <View gap={15} flex center row>
      <Button
        sm
        label="Custom Message"
        onPress={() =>
          notify({
            icon: 'bear-smile-line',
            iconColor: 'purple',
            title: 'Simple notification',
            description: 'Second line',
          })
        }
      />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Customizations" code={CODE} content={<Content />} />
}
