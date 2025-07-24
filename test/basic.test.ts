import { createResolver } from '@nuxt/kit'
import { $fetch, setup, useTestContext } from '@nuxt/test-utils/e2e'
import { describe, expect, it } from 'vitest'

const { resolve } = createResolver(import.meta.url)

describe('ssr:basic', async () => {
  await setup({
    rootDir: resolve('./fixtures/basic'),
  })

  it('renders an icon using a component', async () => {
    const html = await $fetch('/')
    expect(html).toMatch('<svg')
  })

  it('checks whether showList option works', async () => {
    const { nuxt } = useTestContext()

    expect(nuxt?.options.alias['#phosphor-icons']).contains('nuxt-phosphor-icons.json')
  })
})
