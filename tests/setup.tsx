import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest'

vi.mock('next/image', () => ({
  default: (props: Record<string, unknown>) => <img {...props} />,
}))
