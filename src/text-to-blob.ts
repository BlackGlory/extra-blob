export function textToBlob(text: string, mimeType: string = 'text/plain'): Blob {
  return new Blob([text], { type: mimeType })
}
