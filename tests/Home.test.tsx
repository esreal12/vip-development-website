import React from 'react'
import { cleanup, render } from '@testing-library/react'
import { afterEach, expect, it } from 'vitest'
import Home from '@/app/page'

afterEach(() => cleanup())

it('places the featured project directly after the hero', () => {
  const { container } = render(<Home />)
  const hero = container.querySelector('#hero')
  const projects = container.querySelector('#projects')
  const about = container.querySelector('#about')

  expect(hero?.compareDocumentPosition(projects as Node) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
  expect(projects?.compareDocumentPosition(about as Node) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
})
