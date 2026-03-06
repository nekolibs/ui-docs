import {
  Button,
  ModalRoute,
  ModalsRouter,
  StatePresenter,
  Text,
  View,
  useModalParams,
  useModalsNavigation,
  useUpdateModalContainer,
} from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { useUpdateModalContainer, useModalParams } from '@neko-os/ui'

function BookDetail() {
  const { id } = useModalParams()
  const updateContainer = useUpdateModalContainer()

  useEffect(() => {
    fetchBook(id).then((book) => {
      updateContainer({ title: book.name })
    })
  }, [id])

  return <Text>Book #{id}</Text>
}

<ModalsRouter>
  <ModalRoute name="bookDetail" component={BookDetail} title="Loading..." />
  <App />
</ModalsRouter>
`

function BookDetail() {
  const [loading, setLoading] = React.useState(true)
  const { id, name } = useModalParams()
  const updateContainer = useUpdateModalContainer()

  React.useEffect(() => {
    // Simulate fetching book data
    const timer = setTimeout(() => {
      updateContainer({ title: name })
      setLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [id])

  return (
    <View center minHeight={200}>
      <StatePresenter loading={loading}>
        <Text>Book #{id}</Text>
      </StatePresenter>
    </View>
  )
}

function App() {
  const { push } = useModalsNavigation()

  return (
    <View row gap={10} flex center>
      <Button label="Open Book" onPress={() => push('bookDetail', { id: 42, name: 'The Great Gatsby' })} />
    </View>
  )
}

function Content() {
  return (
    <ModalsRouter>
      <ModalRoute name="bookDetail" component={BookDetail} title="Loading..." />
      <App />
    </ModalsRouter>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Changing title after open" code={CODE} content={<Content />} />
}
