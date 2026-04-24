import { Text, View } from '@neko-os/ui'

import AsyncValidationSample from './samples/AsyncValidationSample'
import BasicUsageSample from './samples/BasicUsageSample'
import FormSample from './samples/FormSample'
import ResetMaxIndexSample from './samples/ResetMaxIndexSample'
import UseStepsSample from './samples/UseStepsSample'
import ValidationSample from './samples/ValidationSample'
import VerticalSample from './samples/VerticalSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>Steps</Text>

      <BasicUsageSample />
      <VerticalSample />
      <ValidationSample />
      <AsyncValidationSample />
      <ResetMaxIndexSample />
      <UseStepsSample />
      <FormSample />
    </View>
  )
}
