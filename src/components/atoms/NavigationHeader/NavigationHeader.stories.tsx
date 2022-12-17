import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import { NavigationHeader, NavigationHeaderProps } from './NavigationHeader'

export default {
  title: 'Components/Atoms/NavigationHeader',
  component: NavigationHeader,
} as Meta

// Create a master template for mapping args to render the Button component
const Template: Story<NavigationHeaderProps> = (args) => <div style={{background: 'black'}}><NavigationHeader {...args} /></div>

// Reuse that template for creating different stories
export const SampleNavigationHeader = Template.bind({})
SampleNavigationHeader.args = { items: [
  {
    label: 'sample',
    onClick: () => {}
  },
  {
    label: 'sample2',
    onClick: () => {}
  },
  {
    label: 'sample3',
    onClick: () => {}
  },
  {
    label: 'sample4',
    onClick: () => {}
  },
  {
    label: 'sample5',
    onClick: () => {}
  },
]}

