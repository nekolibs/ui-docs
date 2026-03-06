import { Avatar, Col, Grid } from '@neko-os/ui'
import { range } from 'ramda'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Avatar } from '@neko-os/ui'

<Avatar initials="CS" dynamicColor={1} />
<Avatar initials="CS" dynamicColor={5} />
<Avatar initials="CS" dynamicColor={1200} />
<Avatar initials="CS" dynamicColor="custom-id" />
`

const CONTENT = (
  <Grid center gap={10}>
    {range(0, 42).map((i) => (
      <Col key={i}>
        <Avatar initials={`${i}`} dynamicColor={i} key={i} />
      </Col>
    ))}
  </Grid>
)

export default function Sample() {
  return <SampleCodeBlock title="Dynamic colors" code={CODE} content={CONTENT} />
}
