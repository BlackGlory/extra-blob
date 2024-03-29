import { blobToDataURL } from '@src/blob-to-data-url'
import { textToBlob } from '@src/text-to-blob'
import * as Base64 from 'js-base64'

test('blobToDataURL', async () => {
  const blob = textToBlob('text', 'text/plain')

  const result = await blobToDataURL(blob)

  expect(result).toBe(`data:text/plain;base64,${Base64.encode('text')}`)
})
