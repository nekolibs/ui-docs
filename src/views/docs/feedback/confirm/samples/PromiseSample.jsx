import { Button, View, useConfirmer, useNotifier } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { useAlerts } from '@neko-os/ui'

const confirmer = useConfirmer()

confirmer.notify({ 
  title: 'Title', 
  description: "Custom message", 
  onConfirm: () => new Promise(() => {})
})
`

function Content() {
  const confirmer = useConfirmer()
  const notifier = useNotifier()

  return (
    <View gap={15} flex center row>
      <Button
        sm
        label="With Success Promise"
        onPress={() =>
          confirmer.error({
            title: 'Delete item',
            description: 'Are you sure?',
            onConfirm: () =>
              new Promise((resolve) => {
                setTimeout(() => {
                  notifier.info('Confirmed')
                  resolve()
                }, 2000)
              }),
          })
        }
      />

      <Button
        sm
        label="With Error Promise"
        onPress={() =>
          confirmer.error({
            title: 'Delete item',
            description: 'Are you sure?',
            onConfirm: () =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  notifier.error('Error')
                  reject()
                }, 2000)
              }),
          })
        }
      />

      <Button
        sm
        label="Confirm Returning false"
        onPress={() =>
          confirmer.error({
            title: 'Delete item',
            description: 'Are you sure?',
            onConfirm: () =>
              new Promise((resolve) => {
                setTimeout(() => {
                  notifier.error('Error')
                  resolve(false)
                }, 2000)
              }),
          })
        }
      />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="With Promise" code={CODE} content={<Content />} />
}
