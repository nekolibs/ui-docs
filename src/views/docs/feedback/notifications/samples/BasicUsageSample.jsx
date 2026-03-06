import { Button, View, useNotifier } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { useNotifier } from '@neko-os/ui'

const notifier = useNotifier()

notifier.notify('Simple notification')
notifier.info('Info notification')
notifier.error('Error notification')
notifier.warning('Warning notification')
notifier.success('Success notification')
`

function Content() {
  const { notify, info, success, warning, error } = useNotifier()

  return (
    <View gap={15} flex center row>
      <Button sm label="Simple" onPress={() => notify('Simple notification')} />
      <Button sm label="Info" blue onPress={() => info('Info notification')} color="blue" />
      <Button sm label="Error" red onPress={() => error('Error notification')} color="red" />
      <Button sm label="Warning" yellow onPress={() => warning('Warning notification')} color="yellow" />
      <Button sm label="Success" green onPress={() => success('Success notification')} color="green" />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={<Content />} />
}
