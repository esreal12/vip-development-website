import React from 'react'
import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest'

class TestIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

Object.assign(globalThis, { React, IntersectionObserver: TestIntersectionObserver })

vi.mock('next/image', () => ({
  default: ({ priority: _priority, fill: _fill, ...props }: Record<string, unknown>) => <img {...props} />,
}))
