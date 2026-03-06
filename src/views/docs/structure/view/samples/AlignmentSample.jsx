import { Col, Grid, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { View } from '@neko-os/ui'

// Top row
<View>...</View>              // default (top-left)
<View centerH>...</View>     // top-center
<View toRight>...</View>     // top-right

// Middle row
<View centerV>...</View>     // middle-left
<View center>...</View>      // middle-center
<View centerV toRight>...</View> // middle-right

// Bottom row
<View toBottom>...</View>           // bottom-left
<View centerH toBottom>...</View>   // bottom-center
<View toBottom toRight>...</View>   // bottom-right
`

const CELL = { height: 80, bg: 'overlayBG', border: true, padding: 'sm' }

const CONTENT = (
  <Grid gap="sm" colSpan={8}>
    <Col><View {...CELL}><Text sm>default</Text></View></Col>
    <Col><View {...CELL} centerH><Text sm>centerH</Text></View></Col>
    <Col><View {...CELL} toRight><Text sm>toRight</Text></View></Col>

    <Col><View {...CELL} centerV><Text sm>centerV</Text></View></Col>
    <Col><View {...CELL} center><Text sm>center</Text></View></Col>
    <Col><View {...CELL} centerV toRight><Text sm>centerV toRight</Text></View></Col>

    <Col><View {...CELL} toBottom><Text sm>toBottom</Text></View></Col>
    <Col><View {...CELL} centerH toBottom><Text sm>centerH toBottom</Text></View></Col>
    <Col><View {...CELL} toBottom toRight><Text sm>toBottom toRight</Text></View></Col>
  </Grid>
)

export default function AlignmentSample() {
  return (
    <SampleCodeBlock title="Alignment" code={CODE} content={CONTENT} bg="transparent" padding={0} border={0} br={0} />
  )
}
