import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import { BadgePreview, BadgePreviewProps } from './BadgePreview'
import { BadgeType } from '@businessLogic/badgeType'

export default {
  title: 'Components/Molecules/BadgePreview',
  component: BadgePreview,
} as Meta

const Template: Story<BadgePreviewProps> = (args) => {
  return (
    <div style={{ background: 'gray', padding: '8px' }}>
      <BadgePreview {...args} />
    </div>
  )
}

// Reuse that template for creating different stories
export const BadgePreview1 = Template.bind({})
BadgePreview1.args = {
  size: 320,
  type: BadgeType.OFFCHAIN,
  title: 'TITLE xxx',
  subline: 'Subline',
  description:
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  badgeUrl: 'https://www.thebadge.xyz',
}
