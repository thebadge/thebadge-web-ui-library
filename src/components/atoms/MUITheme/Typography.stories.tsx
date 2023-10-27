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

const TemplateNewFonts: Story<TypographyStoryProps> = (args) => (
  <Grid item container direction={'column'} spacing={2} sx={{ background: 'black' }}>
    <Grid item>
      <Typography variant="displayLarge" component="h1" gutterBottom={args.gutter}>
        displayLarge. Display
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant="displayMedium" gutterBottom={args.gutter} component="h2">
        displayMedium. Display
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant="displaySmall" gutterBottom={args.gutter} component="h3">
        displaySmall. Display
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant="headlineLarge" gutterBottom={args.gutter} component="h4">
        headlineLarge. Heading
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant="headlineMedium" gutterBottom={args.gutter} component="h5">
        headlineMedium. Heading
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant="headlineSmall" gutterBottom={args.gutter} component="h6">
        headlineSmall. Heading
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant="titleLarge" gutterBottom={args.gutter} component="p">
        titleLarge. Title
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant="titleMedium" gutterBottom={args.gutter} component="p">
        titleMedium. Title
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant="titleSmall" gutterBottom={args.gutter} component="p">
        titleSmall. Title
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant="labelLarge" gutterBottom={args.gutter} component="p">
        labelLarge. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant="labelMedium" gutterBottom={args.gutter} component="p">
        labelMedium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant="labelSmall" gutterBottom={args.gutter} component="p">
        labelSmall. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant="bodyLarge" gutterBottom={args.gutter} component="p">
        bodyLarge. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
        beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant="bodyMedium" gutterBottom={args.gutter}>
        bodyMedium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit,
        quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat
        deleniti? Eum quasi quidem quibusdam.
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant="bodySmall" gutterBottom={args.gutter}>
        bodySmall. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
        beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
    </Grid>
  </Grid>
)

export const Default = Template.bind({})
export const NewFonts = TemplateNewFonts.bind({})
Default.args = {
  gutter: false,
}
NewFonts.args = {
  gutter: false,
}
