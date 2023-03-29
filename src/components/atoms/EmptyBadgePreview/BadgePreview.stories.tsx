import { Story } from '@storybook/react'
import { Meta } from '@storybook/react/types-6-0'
import React from 'react'
import { EmptyBadgePreview } from './EmptyBadgePreview'

export type BadgeSize = 'small' | 'medium' | 'large' | 'x-large'

export type EmptyBadgePreviewProps = {
  size: BadgeSize
}

export default {
  title: 'Components/Atoms/EmptyBadgePreviewItem',
  component: EmptyBadgePreview,
} as Meta

const Template: Story<EmptyBadgePreviewProps> = (args) => {
  return (
    <div style={{ background: 'gray', padding: '32px', display: 'flex', justifyContent: 'center', height: '80vh' }}>
      <EmptyBadgePreview {...args} />
    </div>
  )
}

// Reuse that template for creating different stories
export const EmptyBadgePreviewItem = Template.bind({})
