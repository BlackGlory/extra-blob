import { textToBlob } from '@src/text-to-blob'
import 'blob-polyfill'

test('textToBlob', async () => {
  const text = 'text'
  const mimeType = 'text/plain'

  const result = textToBlob(text, mimeType)

  expect(result).toBeInstanceOf(Blob)
  expect(result.type).toBe(mimeType)
  expect(await result.text()).toBe(text)
})
