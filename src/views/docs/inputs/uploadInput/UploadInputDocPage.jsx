import { Text, View } from '@neko-os/ui'

import AreaSample from './samples/AreaSample'
import BasicUsageSample from './samples/BasicUsageSample'
import CompressSample from './samples/CompressSample'
import FormSample from './samples/FormSample'
import GridSample from './samples/GridSample'
import MultipleSample from './samples/MultipleSample'
import OnUploadSample from './samples/OnUploadSample'
import PersistToSample from './samples/PersistToSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>UploadInput</Text>

      <BasicUsageSample />
      <AreaSample />
      <GridSample />
      <CompressSample />
      <MultipleSample />
      <OnUploadSample />
      <PersistToSample />
      <FormSample />
    </View>
  )
}
