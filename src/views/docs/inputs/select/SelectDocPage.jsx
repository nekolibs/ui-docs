import { Text, View } from '@neko-os/ui'

import AsyncOptionsSample from './samples/AsyncOptionsSample'
import BasicUsageSample from './samples/BasicUsageSample'
import BottomDrawerSample from './samples/BottomDrawerSample'
import CustomKeysSample from './samples/CustomKeysSample'
import FormSample from './samples/FormSample'
import InfiniteScrollSample from './samples/InfiniteScrollSample'
import MultipleSample from './samples/MultipleSample'
import MultipleWithSearchSample from './samples/MultipleWithSearchSample'
import RawOptionSample from './samples/RawOptionSample'
import RenderOptionSample from './samples/RenderOptionSample'
import ScrollSample from './samples/ScrollSample'
import SearchSample from './samples/SearchSample'
import SizesSample from './samples/SizesSample'
import StateSample from './samples/StateSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>Select</Text>

      <BasicUsageSample />
      <RawOptionSample />
      <SearchSample />
      <MultipleSample />
      <MultipleWithSearchSample />
      <CustomKeysSample />
      <AsyncOptionsSample />
      <RenderOptionSample />
      <ScrollSample />
      <InfiniteScrollSample />
      <BottomDrawerSample />
      <FormSample />
      <SizesSample />
      <StateSample />
    </View>
  )
}
