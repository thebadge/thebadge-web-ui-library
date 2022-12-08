import { Box, Typography } from '@mui/material'
import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Stepper, StepperProps } from './Stepper'

export default {
  title: 'Components/Molecules/Stepper',
  component: Stepper,
} as Meta

const Template: Story<StepperProps> = (args) => {
  return (
    <div style={{ background: 'gray', padding: '16px', display: 'flex', justifyContent: 'center', height: '100vh' }}>
      <Stepper {...args} />
    </div>
  )
}

export const StepperPreview = Template.bind({})
StepperPreview.args = {
  minHeight: 300,
  color: 'green',
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
      Your submission will have to pass through Kleros`&apos;`s curation process. Where the community will have a few
      days to analyze the evidence you have submitted.
    </Typography>,
    <Box key={3} display="flex" flexDirection="row" alignContent="center">
      <Box width={90} height={120} bgcolor="black" borderRadius={1} marginRight={2} />
      <Typography fontWeight={500} fontSize={18} fontFamily="Mulish">
        Your submission will have to pass through Kleros`&apos;`s curation process. Where the community will have a few
        days to analyze the evidence you have submitted.
      </Typography>
    </Box>,
  ],
}

export const StepperPreviewMoreConfigs = Template.bind({})
StepperPreviewMoreConfigs.args = {
  minHeight: 300,
  color: 'green',
  backgroundColor: 'black',
  glowTitle: false,
  border: false,
  title: 'off-chain HOW IT WORKS',
  elements: [
    <Typography key={0} fontWeight={500} fontSize={18} fontFamily="Mulish" color="white">
      Select the type of badge you are interested in. Each badge will require the submission of proof or evidence to
      certify you have the right to claim it. An example of this type of badge could be to claim a Twitter account.
    </Typography>,
    <Typography key={1} fontWeight={500} fontSize={18} fontFamily="Mulish" color="white">
      Prepare and submit the evidence. Each type of badge will request to accomplish some specific tasks. For example, a
      tweet containing your wallet address.
    </Typography>,
    <Typography key={2} fontWeight={500} fontSize={18} fontFamily="Mulish" color="white">
      Your submission will have to pass through Kleros`&apos;`s curation process. Where the community will have a few
      days to analyze the evidence you have submitted.
    </Typography>,
    <Box key={3} display="flex" flexDirection="row" alignContent="center">
      <Box width={90} height={120} bgcolor="black" borderRadius={1} marginRight={2} />
      <Typography fontWeight={500} fontSize={18} fontFamily="Mulish" color="white">
        Your submission will have to pass through Kleros`&apos;`s curation process. Where the community will have a few
        days to analyze the evidence you have submitted.
      </Typography>
    </Box>,
  ],
}
