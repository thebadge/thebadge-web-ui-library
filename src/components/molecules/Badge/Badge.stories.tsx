import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import { Badge, BadgeProps } from './Badge'

export default {
  title: 'Components/Molecules/Badge',
  component: Badge,
} as Meta

const Template: Story<BadgeProps> = (args) => {
  return (
    <div style={{ background: 'gray', padding: '8px' }}>
      <Badge {...args} />
    </div>
  )
}

// Reuse that template for creating different stories
export const Badge1 = Template.bind({})
Badge1.args = {
  title: 'TITLE xxx',
  subline: 'SUBTITLE',
  description:
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
}
