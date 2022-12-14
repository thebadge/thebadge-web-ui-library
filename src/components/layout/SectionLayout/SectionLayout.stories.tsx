import { Colors } from '@assets/defaultTheme'
import { Stepper } from '@components/molecules/Stepper/Stepper'
import { Box, Typography } from '@mui/material'
import { Meta, Story } from '@storybook/react'
import React from 'react'
import { SectionLayout, SectionLayoutProps } from './SectionLayout'

export default {
  title: 'Components/Layout/SectionLayout',
  component: SectionLayout,
  argTypes: {
    topComponent: {
      name: 'Top component',
      description: 'Its a react component, that will be rendered at the top of the layout.',
      control: {
        type: null,
      },
    },
    middleComponent: {
      name: 'Middle component',
      description: 'Its a react component, that will be rendered on the middle of the layout.',
      control: {
        type: null,
      },
    },
    bottomComponent: {
      name: 'Bottom component',
      description: 'Its a react component, that will be rendered at the bottom of the layout.',
      control: {
        type: null,
      },
    },
    borderColor: {
      name: 'Border Color',
      description: 'The border color around the entire layout element.',
    },
  },
} as Meta

const Template: Story<SectionLayoutProps> = (args) => (
  <div
    style={{
      background: 'grey',
      padding: '32px',
      display: 'flex',
      justifyContent: 'center',
      height: '100vh',
    }}
  >
    <SectionLayout {...args} />
  </div>
)

const TemplateWithTwo: Story<SectionLayoutProps> = (args) => (
  <div
    style={{
      background: 'grey',
      padding: '32px',
      display: 'flex',
      columnGap: '16px',
      justifyContent: 'center',
      height: '100vh',
    }}
  >
    <SectionLayout {...args} />
    <SectionLayout {...args} />
  </div>
)

export const SectionExample = Template.bind({})
export const TwoSectionsExample = TemplateWithTwo.bind({})

const stepperArgs = {
  minHeight: 250,
  color: 'green' as Colors,
  title: 'off-chain HOW IT WORKS',
  elements: [
    <Typography key={0} fontWeight={500} fontSize={18} fontFamily="Mulish">
      Select the type of badge you are interested in. Each badge will require the submission of proof or evidence to
      certify you have the right to claim it. An example of this type of badge could be to claim a Twitter account.
    </Typography>,
    <Typography key={1} fontWeight={500} fontSize={18} fontFamily="Mulish">
      Prepare and submit the evidence. Each type of badge will request to accomplish some specific tasks. For example, a
      tweet containing your wallet address.
    </Typography>,
    <Typography key={2} fontWeight={500} fontSize={18} fontFamily="Mulish">
      Your submission will have to pass through Kleros&apos;s curation process. Where the community will have a few days
      to analyze the evidence you have submitted.
    </Typography>,
    <Box key={3} display="flex" flexDirection="row" alignContent="center">
      <Box
        width={90}
        height={120}
        sx={{
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundImage:
            'url(https://images.unsplash.com/photo-1668894787737-58a109e73c9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80)',
        }}
        borderRadius={1}
        marginRight={2}
      />
      <Typography fontWeight={500} fontSize={18} fontFamily="Mulish">
        Your submission will have to pass through Kleros&apos;s curation process. Where the community will have a few
        days to analyze the evidence you have submitted.
      </Typography>
    </Box>,
  ],
}

const topComponent = () => (
  <Box
    style={{
      display: 'flex',
      flex: 1,
      placeContent: 'center',
      alignItems: 'center',
      background:
        'url(https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)',
    }}
  >
    <Typography color="white">Some text or a second image</Typography>
  </Box>
)

const middleComponent = () => (
  <Box
    style={{
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      placeContent: 'center',
      textAlign: 'center',
    }}
  >
    <Typography color="white" variant="h4">
      Third-Party Badges
    </Typography>

    <Typography color="white">
      Also known as "Blockchain certifications as a service". They are badges generated and backed by a public or
      private entity. Entities that are willing to generate these badge have to be registered on the platform before
      they can start emitting them.
    </Typography>
  </Box>
)

TwoSectionsExample.args = {
  topComponent: topComponent(),
  middleComponent: middleComponent(),
  bottomComponent: <Stepper {...stepperArgs} />,
  borderColor: 'green',
}

SectionExample.args = {
  topComponent: topComponent(),
  middleComponent: middleComponent(),
  bottomComponent: <Stepper {...stepperArgs} />,
  borderColor: 'green',
}
