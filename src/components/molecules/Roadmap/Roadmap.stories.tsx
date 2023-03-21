import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Roadmap } from './Roadmap'
import { RoadmapProps } from './RoadmapProps'

// eslint-disable-next-line storybook/story-exports
export default {
  title: 'Components/Molecules/Roadmap',
  component: Roadmap,
} as Meta

const Template: Story<RoadmapProps> = () => (
  <div style={{ background: 'black', padding: '24px' }}>
    <Roadmap />
  </div>
)

export const Roadmap1 = Template.bind({})
