import { Story } from '@storybook/react'
import { Meta } from '@storybook/react/types-6-0'
import React from 'react'
import { SpinninArrow, SpinninArrowProps } from './SpinninArrow'

export default {
  title: 'Components/Atoms/SpinninArrow',
  component: SpinninArrow,
  argTypes: {
    spin: {
      name: 'spin',
      description:
        'Spin is a flag used to determine when you want to start the animation and ends it. SpinninTime will be ignored if this value is used',
    },
    spinninTime: {
      name: 'SpinninTime',
      description: 'The time during that the spin effect will be active',
    },
  },
} as Meta

// Create a master template for mapping args to render the Button component
const Template: Story<SpinninArrowProps> = (args) => (
  <div
    style={{
      background: 'grey',
      padding: '32px 0 32px 0',
      display: 'flex',
      justifyContent: 'center',
      height: '10vh',
    }}
  >
    <SpinninArrow {...args} />
  </div>
)

// Reuse that template for creating different stories
export const SampleActive = Template.bind({})
SampleActive.args = { direction: 'right', color: '#2da26a', animated: true, spinninTime: 2000 }
