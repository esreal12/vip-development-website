import React from 'react'
import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest'

vi.mock('next/image', () => ({
  default: ({ priority: _priority, fill: _fill, ...props }: Record<string, unknown>) => <img {...props} />,
}))
