import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Roadmap, RoadmapItem } from './Roadmap'

// eslint-disable-next-line storybook/story-exports
export default {
  title: 'Components/Molecules/Roadmap',
  component: Roadmap,
} as Meta

const elements: RoadmapItem[] = [
  {
    numberTitle: '01',
    quarterNumber: 'Q1 2023',
    quarterTitle: 'Certification Platform Development',
    quarterDescription:
      'Develop core functionalities of the platform, including creation, minting, and curation processes.',
    quarterDone: true,
  },
  {
    numberTitle: '02',
    quarterNumber: 'Q2 2023',
    quarterTitle: 'Beta Launch and Marketing Campaign',
    quarterDescription:
      'Start the beta testing program and marketing pre-launch campaign, with incentives for early adopters.',
  },
  {
    numberTitle: '03',
    quarterNumber: 'Q3 2023',
    quarterTitle: 'Going Live',
    quarterDescription: 'We will be releasing our platform.',
  },
  {
    numberTitle: '04',
    quarterNumber: 'Q4 2023',
    quarterTitle: 'Third-Party',
    quarterDescription: 'Develop and release the third-party creators functionality for B2B partners.',
  },
  {
    numberTitle: '05',
    quarterNumber: '2024',
    quarterTitle: 'Security Layer and More',
    quarterDescription: 'Integrate private evidence and ZKBadges.',
  },
]

const Template: Story = () => (
  <div style={{ background: 'black', padding: '24px' }}>
    <Roadmap elements={elements} />
  </div>
)

export const Roadmap1 = Template.bind({})
