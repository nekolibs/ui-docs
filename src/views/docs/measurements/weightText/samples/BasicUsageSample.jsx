import { MeasurementHandler, WeightText, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { WeightText } from '@neko-os/ui'

// Kilograms (default metric)
<WeightText value={80} />                              // "80 kg"

// Pounds (imperial)
<WeightText value={80} measurementSystem="imperial" /> // "176.37 lbs"

// Value in grams
<WeightText value={250} metricPrecision="g" />         // "250 g" or "8.82 oz"
`

function Content() {
  return (
    <View gap="sm">
      <MeasurementHandler measurementSystem="metric">
        <WeightText value={80} p />
        <WeightText value={250} metricPrecision="g" p />
      </MeasurementHandler>
      <MeasurementHandler measurementSystem="imperial">
        <WeightText value={80} p />
        <WeightText value={250} metricPrecision="g" p />
      </MeasurementHandler>
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={<Content />} />
}
