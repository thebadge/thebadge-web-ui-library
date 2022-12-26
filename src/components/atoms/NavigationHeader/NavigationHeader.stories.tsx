import badgeBackground from '@assets/svgs/badgeBackground.svg'
import { Story } from '@storybook/react'
import { Meta } from '@storybook/react/types-6-0'
import React from 'react'
import { NavigationHeader, NavigationHeaderProps } from './NavigationHeader'

export default {
  title: 'Components/Atoms/NavigationHeader',
  component: NavigationHeader,
} as Meta

// Create a master template for mapping args to render the Button component
const Template: Story<NavigationHeaderProps> = (args) => (
  <div style={{ background: 'black' }}>
    <NavigationHeader {...args} />
  </div>
)

// Reuse that template for creating different stories
export const SampleNavigationHeader = Template.bind({})
SampleNavigationHeader.args = {
  items: [
    {
      label: 'sample-icon',
      onClick: () => {
        console.log('sample click')
      },
      icon: <img src={badgeBackground} alt={'Menu item icon'} className={'width-pc-100 height-pc-100'} />,
    },
    {
      label: 'sample2',
      onClick: () => {
        console.log('sample click')
      },
    },
    {
      label: 'sample3',
      onClick: () => {
        console.log('sample click')
      },
      icon: <img src={badgeBackground} alt={'Menu item icon'} className={'width-pc-100 height-pc-100'} />,
    },
    {
      label: 'sample-disabled',
      disabled: true,
    },
    {
      label: 'sample',
      onClick: () => {
        console.log('sample click')
      },
    },
  ],
  callToActionItem: {
    label: 'Open app',
    onClick: () => {
      console.log('sample click')
    },
  },
}
