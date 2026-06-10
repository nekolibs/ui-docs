import { MeasurementHandler, Text, WeightInput, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { WeightInput } from '@neko-os/ui'

// Stores value in kg (default), displays in current system
<WeightInput value={value} onChange={onChange} />

// Force imperial
<WeightInput value={value} onChange={onChange} measurementSystem="imperial" />

// Value in grams, displays g or oz
<WeightInput value={value} onChange={onChange} metricPrecision="g" />
`

function Content() {
  const [value, setValue] = React.useState(80)
  const [valueG, setValueG] = React.useState(250)

  return (
    <View gap="md">
      <Text xs text3>Raw value (kg): {value}</Text>
      <MeasurementHandler measurementSystem="metric">
        <WeightInput value={value} onChange={setValue} label="Metric (kg)" />
        <WeightInput value={valueG} onChange={setValueG} metricPrecision="g" label="Metric (g)" />
      </MeasurementHandler>
      <MeasurementHandler measurementSystem="imperial">
        <WeightInput value={value} onChange={setValue} label="Imperial (lbs)" />
        <WeightInput value={valueG} onChange={setValueG} metricPrecision="g" label="Imperial (oz)" />
      </MeasurementHandler>
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={<Content />} />
}
