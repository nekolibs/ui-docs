import { Text, View } from '@neko-os/ui'

import ActionsSample from './samples/ActionsSample'
import BackgroundSample from './samples/BackgroundSample'
import BasicUsageSample from './samples/BasicUsageSample'
import BorderSample from './samples/BorderSample'
import ImageSample from './samples/ImageSample'
import ShadowSample from './samples/ShadowSample'

export default function InstallDocPage() {
  return (
    <View flex gap={45}>
      <Text h1>Card</Text>

      <BasicUsageSample />
      <ImageSample />
      <ActionsSample />
      <BackgroundSample />
      <BorderSample />
      <ShadowSample />
    </View>
  )
}
