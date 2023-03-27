import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Roadmap } from './Roadmap'

// eslint-disable-next-line storybook/story-exports
export default {
  title: 'Components/Molecules/Roadmap',
  component: Roadmap,
} as Meta

const Template: Story = () => (
  <div style={{ background: 'black', padding: '24px' }}>
    <Roadmap />
  </div>
)

export const Roadmap1 = Template.bind({})
