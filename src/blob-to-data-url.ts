export function blobToDataURL(blob: Blob): Promise<string> {
  const reader = new FileReader()
  const promise = new Promise<string>(resolve => {
    reader.addEventListener('load', () => resolve(reader.result as string))
  })
  reader.readAsDataURL(blob)
  return promise
}
