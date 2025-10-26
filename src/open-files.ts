import { assert, isntUndefined } from '@blackglory/prelude'

/**
 * It is impossible to handle open file dialog `cancel` event,
 * so `Promise<FileList>` may await forever.
 *
 * @param {string[]} [accept] https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept
 */
export function openFiles(
  { accept, multiple }: {
    accept?: string[]
    multiple?: boolean
  } = {}
): Promise<FileList> {
  return new Promise<FileList>((resolve, reject) => {
    const input = document.createElement('input')
    input.type = 'file'

    if (isntUndefined(multiple)) {
      input.multiple = multiple
    }

    if (accept) {
      input.accept = accept.join(', ')
    }

    input.addEventListener('change', () => {
      try {
        assert(input.files, 'No files')

        resolve(input.files)
      } catch (e) {
        reject(e)
      }
    })

    input.click() // It is non-blocked
  })
}
