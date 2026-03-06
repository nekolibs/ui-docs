import { Button, View, useNotifier } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { useNotifier } from '@neko-os/ui'

const notifier = useNotifier()

notifier.info("2s message", {time: 2000})
notifier.info("5s message", {time: 5000})
notifier.info("10s message", {time: 10000})
`

function Content() {
  const { notify, info, success, warning, error } = useNotifier()

  return (
    <View gap={15} flex center row>
      <Button sm label="2s Message" onPress={() => info('2s message', { time: 2000 })} />
      <Button sm label="5s Message" onPress={() => info('5s message', { time: 5000 })} />
      <Button sm label="10s Message" onPress={() => info('10s message', { time: 10000 })} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Time" code={CODE} content={<Content />} />
}
