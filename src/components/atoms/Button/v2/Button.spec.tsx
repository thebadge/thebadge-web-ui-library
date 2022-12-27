import React from 'react'
import renderer from 'react-test-renderer'
import { ButtonV2 } from './Button'

describe('Button', () => {
  it('should render Button component', () => {
    const component = renderer.create(<ButtonV2> label </ButtonV2>)
    expect(component.toTree()?.rendered).toBeTruthy()
  })
})
