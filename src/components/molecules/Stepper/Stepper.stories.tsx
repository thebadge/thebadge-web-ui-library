import { Box, Typography } from '@mui/material'
import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Stepper, StepperProps } from './Stepper'
import { TBColor } from '@assets/defaultTheme'

export default {
  title: 'Components/Molecules/Stepper',
  component: Stepper,
  argTypes: {
    title: {
      name: 'Title',
      description:
        'It could be a component or just a string. If its a string, the stepper will use his own StepperTittle as shown in the example',
    },
    elements: {
      name: 'Steps / Elements',
      description:
        'An array of reach elements that represents each step. Based on this array the drops and the navigation will be generated',
      control: {
        type: null,
      },
    },
  },
} as Meta

const Template: Story<StepperProps> = (args) => {
  return (
    <div style={{ background: 'gray', padding: '16px', display: 'flex', justifyContent: 'center', height: '50vh' }}>
      <Stepper {...args} />
    </div>
  )
}

const STEPPER_EXAMPLE_ELEMENTS = [
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
      borderRadius={1}
      marginRight={2}
      sx={{
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage:
          'url(https://images.unsplash.com/photo-1668894787737-58a109e73c9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80)',
      }}
    />
    <Typography fontWeight={500} fontSize={18} fontFamily="Mulish">
      Your submission will have to pass through Kleros&apos;s curation process. Where the community will have a few days
      to analyze the evidence you have submitted.
    </Typography>
  </Box>,
]

export const StepperPreview = Template.bind({})
StepperPreview.args = {
  minHeight: 300,
  color: 'green' as TBColor,
  title: 'off-chain HOW IT WORKS',
  elements: STEPPER_EXAMPLE_ELEMENTS,
}

export const StepperPreviewMoreConfigs = Template.bind({})
StepperPreviewMoreConfigs.args = {
  minHeight: 300,
  color: 'green',
  backgroundColor: 'black' as TBColor,
  glowTitle: false,
  border: false,
  title: 'off-chain HOW IT WORKS',
  elements: STEPPER_EXAMPLE_ELEMENTS,
}
