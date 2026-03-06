import { Text, View } from '@neko-os/ui'

import BackgroundSample from './samples/BackgroundSample'
import BasicUsageSample from './samples/BasicUsageSample'
import BorderSample from './samples/BorderSample'
import FixedSample from './samples/FixedSample'
import MultipleSidersSample from './samples/MultipleSidersSample'
import SiderOverHeaderSample from './samples/SiderOverHeaderSample'
import SiderSample from './samples/SiderSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>Layout</Text>

      <BasicUsageSample />
      <SiderSample />
      <MultipleSidersSample />
      <SiderOverHeaderSample />
      <FixedSample />
      <BorderSample />
      <BackgroundSample />
    </View>
  )
}
