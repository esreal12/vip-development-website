import { existsSync } from 'node:fs'
import path from 'node:path'
import { galleryImages, primaryImages, standardSections, standards } from '@/lib/villasTresHermanas'
import { expect, it } from 'vitest'

it('defines the complete VIP Standard with available images', () => {
  expect(standardSections).toHaveLength(6)
  expect(standards).toHaveLength(12)
  for (const image of [...primaryImages, ...galleryImages]) expect(existsSync(path.join(process.cwd(), 'public', image.src))).toBe(true)
})
