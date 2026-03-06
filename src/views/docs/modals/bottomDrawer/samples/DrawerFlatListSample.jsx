import { BottomDrawer, Button, DrawerFlatList, Text, View } from '@neko-os/ui'
import { range } from 'ramda'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { BottomDrawer, DrawerFlatList, Text } from '@neko-os/ui'

const data = range(0, 50).map((i) => ({ key: String(i), label: 'Item ' + i }))

<BottomDrawer open={open} onClose={() => setOpen(false)} snapPoints={[400, '90%']}>
  <DrawerFlatList
    data={data}
    renderItem={({ item }) => <Text padding="sm" center>{item.label}</Text>}
  />
</BottomDrawer>
`

const DATA = range(0, 50).map((i) => ({ key: String(i), label: 'Item ' + i }))

function Content() {
  const [open, setOpen] = React.useState(false)

  return (
    <View row gap={10} flex center>
      <BottomDrawer open={open} onClose={() => setOpen(false)} snapPoints={[400, '90%']} useSafeArea={false}>
        <DrawerFlatList
          data={DATA}
          renderItem={({ item }) => (
            <Text padding="sm" center>
              {item.label}
            </Text>
          )}
        />
      </BottomDrawer>

      <Button label="Open DrawerFlatList" onPress={() => setOpen(true)} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="DrawerFlatList (native only)" code={CODE} content={<Content />} />
}
