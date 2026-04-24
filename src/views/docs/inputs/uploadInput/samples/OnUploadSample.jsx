import { UploadInput, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { UploadInput } from '@neko-os/ui'

// onUpload receives a file and must return a Promise
// Shows "uploading" status while pending, "done" on resolve, "error" on reject
const handleUpload = (file) => {
  return fetch('/api/upload', {
    method: 'POST',
    body: file.file,
  })
    .then(res => res.json())
    .then(data => ({ url: data.url }))
}

// Success
<UploadInput placeholder="Succeeds after 2s" onUpload={handleUpload} />

// Error handling - the component shows an error state on rejection
<UploadInput placeholder="Fails after 2s" onUpload={failingUpload} />
`

const successUpload = (file) =>
  new Promise((resolve) => setTimeout(() => resolve({ url: 'https://example.com/' + file.name }), 2000))

const failUpload = () =>
  new Promise((_, reject) => setTimeout(() => reject(new Error('Upload failed')), 2000))

const CONTENT = (
  <View gap="md" flex centerV>
    <UploadInput placeholder="Succeeds after 2s" onUpload={successUpload} />
    <UploadInput placeholder="Fails after 2s" onUpload={failUpload} />
    <UploadInput area placeholder="Area with upload" onUpload={successUpload} />
    <UploadInput area placeholder="Multiple with upload" multiple maxCount={3} onUpload={successUpload} />
    <UploadInput grid accept="image/*" onUpload={successUpload} />
    <UploadInput grid accept="image/*" multiple maxCount={5} onUpload={successUpload} />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="onUpload" code={CODE} content={CONTENT} />
}
