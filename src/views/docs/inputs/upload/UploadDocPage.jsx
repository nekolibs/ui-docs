import { Text, View } from '@neko-os/ui'

import AcceptSample from './samples/AcceptSample'
import BasicUsageSample from './samples/BasicUsageSample'
import DragDropSample from './samples/DragDropSample'
import MultipleSample from './samples/MultipleSample'
import OnUploadSample from './samples/OnUploadSample'
import StateSample from './samples/StateSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>Upload</Text>

      <BasicUsageSample />
      <OnUploadSample />
      <AcceptSample />
      <MultipleSample />
      <DragDropSample />
      <StateSample />
    </View>
  )
}
