import { Table, TableCol, TableHeader, TableHeaderRow, TableRow, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Table, TableCol, TableHeader, TableHeaderRow, TableRow } from '@neko-os/ui'

<Table border>
  <TableHeaderRow sticky>
    <TableHeader label="Header 1" />
    <TableHeader label="Header 2" />
  </TableHeaderRow>

  <TableRow>
    <TableCol label="L1H1" />
    <TableCol label="L1H2" />
  </TableRow>

  <TableRow>
    <TableCol label="L2H1" />
    <TableCol label="L2H2" />
  </TableRow>

  <TableRow>
    <TableCol label="L2H1+H2" align="center" colSpan={2} />
  </TableRow>
</Table>
`

const CONTENT = (
  <View>
    <Table border>
      <TableHeaderRow sticky>
        <TableHeader label="Header 1" />
        <TableHeader label="Header 2" />
      </TableHeaderRow>

      <TableRow>
        <TableCol label="L1H1" />
        <TableCol label="L1H2" />
      </TableRow>

      <TableRow>
        <TableCol label="L2H1" />
        <TableCol label="L2H2" />
      </TableRow>

      <TableRow>
        <TableCol label="L2H1+H2" align="center" colSpan={2} />
      </TableRow>
    </Table>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Raw Table" code={CODE} content={CONTENT} bg="transparent" padding={0} fullW />
}
