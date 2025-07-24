import { createResolver } from '@nuxt/kit'
import { $fetch, setup } from '@nuxt/test-utils/e2e'
import { describe, expect, it } from 'vitest'

const { resolve } = createResolver(import.meta.url)

describe('ssr:prefix', async () => {
  await setup({
    rootDir: resolve('./fixtures/prefix'),
  })

  it('renders an icon using a prefixed component', async () => {
    const html = await $fetch('/')
    expect(html).toMatch('<svg')
  })
})
