// import { Colors } from '@assets/defaultTheme'
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { Box, Grid, Typography } from '@mui/material'
import { BoxGradient } from '@components/layout/BoxGradient/BoxGradient'
import React from 'react'

import './roadmap.scss'
// import { RoadmapProps } from './RoadmapProps'
//export const Roadmap = (props: RoadmapProps) => {
export const Roadmap = () => {
  return (
    <Box className="roadmap">
      <Typography component="h3" variant="h3" align="center" mb={3} color="white">
        ROADMAP
      </Typography>
      <Grid container gap={2} justifyContent="space-around">
        <Grid item className="roadmap__circle">
          <p>01</p>
        </Grid>
        <Grid item className="roadmap__circle">
          <p>02</p>
        </Grid>
        <Grid item className="roadmap__circle">
          <p>03</p>
        </Grid>
        <Grid item className="roadmap__circle">
          <p>04</p>
        </Grid>
        <Grid item className="roadmap__circle">
          <p>05</p>
        </Grid>
      </Grid>
      <BoxGradient
        className="roadmap__timeline"
        gradient="linear-gradient(90deg, #008362 0%, #5BBCAD 21.48%, #002CBF 50.63%, #B74AD6 74.67%, #891CFB 98.2%);"
        shadowColor=""
      >
        <Grid container gap={2} justifyContent="space-around" flexWrap="nowrap">
          <Grid item className="roadmap__year">
            <p>2022 (C)</p>
          </Grid>
          <Grid item className="roadmap__year">
            <p>2023 Q1</p>
          </Grid>
          <Grid item className="roadmap__year">
            <p>2023 Q2 & Q3</p>
          </Grid>
          <Grid item className="roadmap__year">
            <p>2023 Q4</p>
          </Grid>
          <Grid item className="roadmap__year">
            <p>2024 Q1</p>
          </Grid>
        </Grid>
      </BoxGradient>
      <Grid container gap={2} justifyContent="space-around" flexWrap="nowrap" spacing={4} columns={5}>
        <Grid item className="roadmap__text" md={1}>
          <Typography component="h5" variant="h5" align="center" mb={2} color="white">
            The Badge fundamentals
          </Typography>
          <Typography variant="body2">
            Defining the fundamentals of the project and finding real necessities where this platform could be used and
            how.
          </Typography>
        </Grid>
        <Grid item className="roadmap__text" md={1}>
          <Typography component="h5" variant="h5" align="center" mb={2} color="white">
            The Badge Labs foundation
          </Typography>
          <Typography variant="body2">
            Creating the first badges that will help us to better understand the best way to make our platform adaptable
            to different scenarios.
          </Typography>
        </Grid>
        <Grid item className="roadmap__text" md={1}>
          <Typography component="h5" variant="h5" align="center" mb={2} color="white">
            Certification platform DEVELOPMENT
          </Typography>
          <Typography variant="body2">This period will be used to build the v1 of our platform.</Typography>
        </Grid>
        <Grid item className="roadmap__text" md={1}>
          <Typography component="h5" variant="h5" align="center" mb={2} color="white">
            Courts & curator platform development
          </Typography>
          <Typography variant="body2">
            Develop the functionality that will allow our community to create different types of badges and to validate
            the veracity our our certifications.
          </Typography>
        </Grid>
        <Grid item className="roadmap__text" md={1}>
          <Typography component="h5" variant="h5" align="center" mb={2} color="white">
            Going live
          </Typography>
          <Typography variant="body2">We will be releasing our platform.</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}
