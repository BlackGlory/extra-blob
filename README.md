# extra-blob
## Install
```sh
npm install --save extra-blob
# or
yarn add extra-blob
```

## API
### downloadBlob
```ts
function downloadBlob(blob: Blob, filename: string): void
```

### openFile
```ts
function openFile(
  options?: {
    accept?: string[]
    multiple?: boolean
  }
): Promise<FileList>
```

### textToBlob
```ts
function textToBlob(text: string, mimeType?: string): Blob
```

### blobToDataURL
```ts
function blobToDataURL(blob: Blob): Promise<string>
```
