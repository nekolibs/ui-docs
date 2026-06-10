import { LengthText, MeasurementHandler, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { LengthText } from '@neko-os/ui'

// Centimeters (default metric)
<LengthText value={175} />                              // "175 cm"

// Feet + inches (imperial default)
<LengthText value={175} measurementSystem="imperial" /> // "5'9\\""

// Inches only
<LengthText value={175} measurementSystem="imperial" imperialPrecision="in" />

// Value in meters
<LengthText value={1.75} metricPrecision="m" />         // "1.75 m" or "5.74 ft"

// Kilometers to miles
<LengthText value={42} metricPrecision="km" />           // "42 km" or "26.1 mi"
`

function Content() {
  return (
    <View gap="sm">
      <MeasurementHandler measurementSystem="metric">
        <LengthText value={175} p />
        <LengthText value={1.75} metricPrecision="m" p />
        <LengthText value={42} metricPrecision="km" p />
      </MeasurementHandler>
      <MeasurementHandler measurementSystem="imperial">
        <LengthText value={175} p />
        <LengthText value={175} imperialPrecision="in" p />
        <LengthText value={1.75} metricPrecision="m" p />
        <LengthText value={42} metricPrecision="km" p />
      </MeasurementHandler>
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={<Content />} />
}
