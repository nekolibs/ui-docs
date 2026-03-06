import { Loading, Select, View } from '@neko-os/ui'
import { range } from 'ramda'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Select } from '@neko-os/ui'

function useOptions() {
  const [options, setOptions] = React.useState([])
  const [page, setPage] = React.useState(1)
  const [loading, setLoading] = React.useState(false)

  const fetchMore = () => {
    if (loading) return
    setPage((page) => page + 1)
  }

  React.useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      const newData = range((page - 1) * 15, page * 15).map((i) => ({ label: "Option " + i, value: i }))
      setOptions((prev) => (page === 1 ? newData : [...prev, ...newData]))
      setLoading(false)
    }, 400)
  }, [page])

  return { options, fetchMore, loading  }
}

function Content() {
  const { options, fetchMore, loading } = useOptions()

  return (
    <Select
      options={options}
      loading={loading}
      onEndReached={fetchMore}
      renderFooter={() => (
        <View padding="md" center>
          <Loading sm />
        </View>
      )}
    />
  )
`

function useOptions() {
  const [options, setOptions] = React.useState([])
  const [page, setPage] = React.useState(1)
  const [loading, setLoading] = React.useState(false)

  const fetchMore = () => {
    if (loading) return
    setPage((page) => page + 1)
  }

  React.useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      const newData = range((page - 1) * 15, page * 15).map((i) => ({ label: `Option ${i}`, value: i }))
      setOptions((prev) => (page === 1 ? newData : [...prev, ...newData]))
      setLoading(false)
    }, 400)
  }, [page])

  return { options, fetchMore, loading }
}

function Item({ initValue, ...props }) {
  const { options, fetchMore, loading } = useOptions()

  return (
    <View flex maxWidth={300} gap={10}>
      <Select
        options={options}
        loading={loading}
        onEndReached={fetchMore}
        renderFooter={() => (
          <View padding="md" center>
            <Loading sm />
          </View>
        )}
        {...props}
      />
    </View>
  )
}

function Content() {
  return (
    <View gap={10} flex center row wrap>
      <Item placeholder="Infinite" />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Infinite Scroll" code={CODE} content={<Content />} />
}
