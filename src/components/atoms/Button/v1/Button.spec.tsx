import React from 'react'
import renderer from 'react-test-renderer'
import { Button } from './Button'

describe('Button', () => {
  it('should render Button component', () => {
    const component = renderer.create(<Button label="label" />)
    expect(component.toTree()?.rendered).toBeTruthy()
  })
})
