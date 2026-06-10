import { LengthInput, MeasurementHandler, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { LengthInput } from '@neko-os/ui'

// Stores value in cm (default), displays in current system
<LengthInput value={value} onChange={onChange} />

// Force imperial with feet+inches
<LengthInput value={value} onChange={onChange} measurementSystem="imperial" />

// Force imperial with inches only
<LengthInput value={value} onChange={onChange} imperialPrecision="in" />

// Value in meters, displays m or ft
<LengthInput value={value} onChange={onChange} metricPrecision="m" />
`

function Content() {
  const [value, setValue] = React.useState(175)
  const [valueM, setValueM] = React.useState(1.75)

  return (
    <View gap="md">
      <Text xs text3>Raw value (cm): {value}</Text>
      <MeasurementHandler measurementSystem="metric">
        <LengthInput value={value} onChange={setValue} label="Metric (cm)" />
        <LengthInput value={valueM} onChange={setValueM} metricPrecision="m" label="Metric (m)" />
      </MeasurementHandler>
      <MeasurementHandler measurementSystem="imperial">
        <LengthInput value={value} onChange={setValue} label="Imperial (ft+in)" />
        <LengthInput value={value} onChange={setValue} imperialPrecision="in" label="Imperial (in)" />
      </MeasurementHandler>
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={<Content />} />
}
