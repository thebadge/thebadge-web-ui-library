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
      <Typography component="h3" variant="h3" align="center" mb={3}>
        ROADMAP
      </Typography>
      <Grid container gap={2} justifyContent="space-between">
        <div className="roadmap__circle">
          <p>01</p>
        </div>
        <div className="roadmap__circle">
          <p>02</p>
        </div>
        <div className="roadmap__circle">
          <p>03</p>
        </div>
        <div className="roadmap__circle">
          <p>04</p>
        </div>
        <div className="roadmap__circle">
          <p>05</p>
        </div>
      </Grid>
      <BoxGradient
        className="roadmap__timeline"
        gradient="linear-gradient(90deg, #008362 0%, #5BBCAD 21.48%, #002CBF 50.63%, #B74AD6 74.67%, #891CFB 98.2%);"
        shadowColor=""
      />
    </Box>
  )
}
