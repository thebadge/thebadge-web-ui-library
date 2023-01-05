import { Story } from '@storybook/react'
import { Meta } from '@storybook/react/types-6-0'
import React from 'react'
import { SpininArrow, SpininArrowProps } from './SpininArrow'

export default {
  title: 'Components/Atoms/SpininArrow',
  component: SpininArrow,
  argTypes: {
    spin: {
      name: 'spin',
      description:
        'Spin is a flag used to determine when you want to start the animation and ends it. SpininTime will be ignored if this value is used',
    },
    spininTime: {
      name: 'SpininTime',
      description: 'The time during that the spin effect will be active',
    },
  },
} as Meta

// Create a master template for mapping args to render the Button component
const Template: Story<SpininArrowProps> = (args) => (
  <div
    style={{
      background: 'grey',
      padding: '32px 0 32px 0',
      display: 'flex',
      justifyContent: 'center',
      height: '10vh',
    }}
  >
    <SpininArrow {...args} />
  </div>
)

// Reuse that template for creating different stories
export const SampleActive = Template.bind({})
SampleActive.args = { direction: 'right', color: '#2da26a', animated: true, spininTime: 2000 }
