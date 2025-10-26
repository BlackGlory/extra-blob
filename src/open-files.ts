import { assert } from '@blackglory/prelude'

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
  return new Promise<FileList>(resolve => {
    const input = document.createElement('input')
    input.type = 'file'

    if (typeof multiple !== 'undefined') {
      input.multiple = multiple
    }

    if (typeof accept !== 'undefined') {
      input.accept = accept.join(', ')
    }

    input.addEventListener('change', () => {
      assert(input.files)

      resolve(input.files)
    })

    input.click() // It is non-blocked
  })
}
