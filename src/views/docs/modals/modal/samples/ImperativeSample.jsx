import { Button, Link, View, Text, useModalOpener } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { useModalOpener, Text, Link } from '@neko-os/ui'

const { open } = useModalOpener()

open(({ onClose }) => ({
  title: 'Imperative modal',
  content: <Text>Simple modal</Text>,
  footer: <Link label="Close" onPress={onClose} center />,
  // position: 'right'
}))

`

function Content() {
  const { open } = useModalOpener()

  return (
    <View gap={15} flex center row>
      <Button
        sm
        label="Open Imperative Modal"
        onPress={() =>
          open(({ onClose }) => ({
            title: 'Imperative modal',
            content: <Text>Simple modal</Text>,
            footer: <Link label="Close" onPress={onClose} center />,
          }))
        }
      />

      <Button
        sm
        label="Open Imperative Drawer"
        onPress={() =>
          open(({ onClose }) => ({
            title: 'Imperative modal',
            content: <Text>Simple modal</Text>,
            footer: <Link label="Close" onPress={onClose} center />,
            position: 'right',
          }))
        }
      />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Imerative Modal" code={CODE} content={<Content />} />
}
