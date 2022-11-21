import { Box, Typography } from '@mui/material'
import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Steper, SteperProps, SteperTitle } from './Steper'

export default {
  title: 'Components/Molecules/Steper',
  component: Steper,
} as Meta

const Template: Story<SteperProps> = (args) => {
  return (
    <div style={{ background: 'gray', padding: '16px', display: 'flex', justifyContent: 'center', height: '100vh' }}>
      <Steper {...args} />
    </div>
  )
}

export const SteperPreview = Template.bind({})
SteperPreview.args = {
  minHeight: 300,
  title: <SteperTitle color="purple">off-chain HOW IT WORKS</SteperTitle>,
  elements: [
    <Typography fontWeight={500} fontSize={18} fontFamily="Mulish">
      Select the type of badge you are interested in. Each badge will require the submission of proof or evidence to
      certify you have the right to claim it. An example of this type of badge could be to claim a Twitter account.
    </Typography>,
    <Typography fontWeight={500} fontSize={18} fontFamily="Mulish">
      Prepare and submit the evidence. Each type of badge will request to accomplish some specific tasks. For example, a
      tweet containing your wallet address.
    </Typography>,
    <Typography fontWeight={500} fontSize={18} fontFamily="Mulish">
      Your submission will have to pass through Kleros's curation process. Where the community will have a few days to
      analyze the evidence you have submitted.
    </Typography>,
    <Box display="flex" flexDirection="row" alignContent="center">
      <Box width={90} height={120} bgcolor="black" borderRadius={1} marginRight={2} />
      <Typography fontWeight={500} fontSize={18} fontFamily="Mulish">
        Your submission will have to pass through Kleros's curation process. Where the community will have a few days to
        analyze the evidence you have submitted.
      </Typography>
    </Box>,
  ],
}
