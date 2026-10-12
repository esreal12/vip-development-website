import React from 'react'
import { cleanup, render } from '@testing-library/react'
import { afterEach, expect, it } from 'vitest'
import VipStandard from '@/components/VipStandard'

afterEach(() => cleanup())

it('adds visual icons to every VIP Standard story and summary card', () => {
  const { container } = render(<VipStandard />)

  expect(container.querySelectorAll('[data-section-icon]')).toHaveLength(6)
  expect(container.querySelectorAll('[data-point-icon]')).toHaveLength(24)
  expect(container.querySelectorAll('[data-standard-card] svg')).toHaveLength(12)
})
