import { assert, isString } from '@blackglory/prelude'

export function blobToDataURL(blob: Blob): Promise<string> {
  const reader = new FileReader()

  const promise = new Promise<string>((resolve, reject) => {
    reader.addEventListener('load', () => {
      try {
        assert(isString(reader.result), 'The result is not a string')

        resolve(reader.result)
      } catch (e) {
        reject(e)
      }
    })

    reader.addEventListener('error', () => {
      throw new Error('Unknown FileReader error')
    })
  })

  reader.readAsDataURL(blob)

  return promise
}
