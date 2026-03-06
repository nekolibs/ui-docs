import { Card, Col, Grid, Image, Text, View } from '@neko-os/ui'
import { range } from 'ramda'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Card, Image, View } from '@neko-os/ui'

<Card flex padding={0}>
  <Image src="..." height={200} br={0} />
  <View padding="lg">
    ...
  </View>
</Card>

`

const CONTENT = (
  <Grid gap="lg" colSpan={{ sm: 24, df: 12 }}>
    {range(1, 3).map((i) => (
      <Col key={i}>
        <Card flex padding={0}>
          <Image src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d" height={200} br={0} />
          <View padding="lg">
            <Text h4 marginB={10} red>
              TODO
            </Text>
            <Text>Card content</Text>
            <Text>Card content</Text>
          </View>
        </Card>
      </Col>
    ))}
  </Grid>
)

export default function Sample() {
  return <SampleCodeBlock title="With actions" code={CODE} content={CONTENT} bg="transparent" padding={0} border={0} />
}
