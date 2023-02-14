import { Meta, Story } from '@storybook/react'
import { Grid, Typography } from '@mui/material'
import React from 'react'

export default {
  title: 'Components/Theming/Typography',
  component: Typography,
  parameters: {
    docs: {
      description: {
        component: 'All the available typography variants on TheBadge',
      },
    },
  },
} as Meta

type TypographyStoryProps = {
  gutter: boolean
}

const Template: Story<TypographyStoryProps> = (args) => (
  <Grid item container direction={'column'} spacing={2} sx={{ background: 'black' }}>
    <Grid item>
      <Typography variant="h1" component="h1" gutterBottom={args.gutter}>
        h1. Heading
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant="h2" gutterBottom={args.gutter} component="h2">
        h2. Heading
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant="h3" gutterBottom={args.gutter} component="h3">
        h3. Heading
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant="h4" gutterBottom={args.gutter} component="h4">
        h4. Heading
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant="h5" gutterBottom={args.gutter} component="h5">
        h5. Heading
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant="h6" gutterBottom={args.gutter} component="h6">
        h6. Heading
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant="title1" gutterBottom={args.gutter} component="p">
        title1. Title
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant="title2" gutterBottom={args.gutter} component="p">
        title2. Title
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant="title3" gutterBottom={args.gutter} component="p">
        title3. Title
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant="title4" gutterBottom={args.gutter} component="p">
        title4. Title
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant="title5" gutterBottom={args.gutter} component="p">
        title5. Title
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant="subtitle1" gutterBottom={args.gutter} component="p">
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant="subtitle2" gutterBottom={args.gutter} component="p">
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant="body1" gutterBottom={args.gutter}>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
        beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant="body2" gutterBottom={args.gutter}>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
        beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant="body3" gutterBottom={args.gutter}>
        body3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
        beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant="body4" gutterBottom={args.gutter}>
        body4. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
        beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant="button" display="block" gutterBottom={args.gutter}>
        button text
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant="caption" display="block" gutterBottom={args.gutter}>
        caption text
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant="overline" display="block" gutterBottom={args.gutter}>
        overline text
      </Typography>
    </Grid>
  </Grid>
)

export const Default = Template.bind({})
Default.args = {
  gutter: false,
}
