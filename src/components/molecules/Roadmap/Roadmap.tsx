import { Box, Grid, Typography, useMediaQuery } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import { BoxGradient } from '@components/layout/BoxGradient/BoxGradient'
import React from 'react'

import './roadmap.scss'
export const Roadmap = () => {
  const shoMobileView = useMediaQuery('(max-width:800px)')

  return (
    <Box className="roadmap">
      {/* Roadmap for MOBILE */}
      {shoMobileView && (
        <>
          <Typography component="h3" variant="h3" align="center" mb={3} color="white">
            ROADMAP
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 1,
            }}
          >
            <Grid container direction="column" width={'30%'} gap={15}>
              <Grid item className="roadmap__circle_mobile">
                <p>01</p>
                <p className="year_mobile">
                  <CheckCircleOutlineIcon />
                  2022
                </p>
              </Grid>
              <Grid item className="roadmap__circle_mobile">
                <p>02</p>
                <p className="year_mobile">
                  <span>Q1 & Q2</span>2023
                </p>
              </Grid>
              <Grid item className="roadmap__circle_mobile">
                <p>03</p>
                <p className="year_mobile">
                  <span>Q3</span>2023
                </p>
              </Grid>
              <Grid item className="roadmap__circle_mobile">
                <p>04</p>
                <p className="year_mobile">
                  <span>Q4</span>2023
                </p>
              </Grid>
              <Grid item className="roadmap__circle_mobile">
                <p>05</p>
                <p className="year_mobile">
                  <span>Q1</span>2024
                </p>
              </Grid>
            </Grid>
            <BoxGradient
              className="roadmap__timeline_mobile"
              gradient="linear-gradient(180deg, #008362 0%, #5BBCAD 21.48%, #002CBF 50.63%, #B74AD6 74.67%, #891CFB 98.2%);"
              shadowColor=""
              sx={{
                flex: 'auto',
              }}
            />
            <Grid container gap={0} justifyContent="space-around" direction="column" spacing={4} columns={5}>
              <Grid item className="roadmap__text">
                <Typography component="h5" variant="h5" align="center" mb={1} color="white">
                  The Badge fundamentals
                </Typography>
                <Typography variant="body2">
                  Defining the fundamentals of the project and finding real necessities where this platform could be
                  used and how.
                </Typography>
              </Grid>
              <Grid item className="roadmap__text" md={1}>
                <Typography component="h4" variant="h5" align="center" mb={1} color="white">
                  Certification platform development
                </Typography>
                <Typography variant="body2">
                  Creating the first badges that will help us to better understand the best way to make our platform
                  adaptable to different scenarios.
                </Typography>
              </Grid>
              <Grid item className="roadmap__text" md={1}>
                <Typography component="h4" variant="h5" align="center" mb={1} color="white">
                  Security layer development
                </Typography>
                <Typography variant="body2">
                  Develop the functionality that will allow our community to create badges with private evidence.
                </Typography>
              </Grid>
              <Grid item className="roadmap__text" md={1}>
                <Typography component="h4" variant="h5" align="center" mb={1} color="white">
                  Pre-launch campaign{' '}
                </Typography>
                <Typography variant="body2">
                  Marketing pre-launch campaign, incentives for early adopters. Audit and testing of the platform.{' '}
                </Typography>
              </Grid>
              <Grid item className="roadmap__text" md={1}>
                <Typography component="h4" variant="h5" align="center" mb={1} color="white">
                  Going live
                </Typography>
                <Typography variant="body2">We will be releasing our platform.</Typography>
              </Grid>
            </Grid>
          </Box>
        </>
      )}

      {/* Roadmap for desktop */}
      {!shoMobileView && (
        <>
          <Typography component="h3" variant="h3" align="center" mb={3} color="white">
            ROADMAP
          </Typography>
          <Box position="relative" zIndex={1}>
            <Grid container gap={4} justifyContent="space-around">
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
          </Box>
          <BoxGradient
            className="roadmap__timeline"
            gradient="linear-gradient(90deg, #008362 0%, #5BBCAD 21.48%, #002CBF 50.63%, #B74AD6 74.67%, #891CFB 98.2%);"
            shadowColor=""
          >
            <Grid container gap={0} justifyContent="space-around" flexWrap="nowrap">
              <Grid item className="roadmap__year">
                <p>
                  <CheckCircleOutlineIcon /> 2022
                </p>
              </Grid>
              <Grid item className="roadmap__year">
                <p>
                  <span>Q1 & Q2</span>2023
                </p>
              </Grid>
              <Grid item className="roadmap__year">
                <p>
                  <span>Q3</span>2023
                </p>
              </Grid>
              <Grid item className="roadmap__year">
                <p>
                  <span>Q4</span>2023
                </p>
              </Grid>
              <Grid item className="roadmap__year">
                <p>
                  <span>Q1</span>2024
                </p>
              </Grid>
            </Grid>
          </BoxGradient>
          <Grid container gap={0} justifyContent="space-around" flexWrap="nowrap" spacing={4} columns={5}>
            <Grid item className="roadmap__text" md={1}>
              <div className="line" />
              <Typography component="h5" variant="h5" align="center" mb={2} color="white">
                The Badge fundamentals
              </Typography>
              <Typography variant="body2">
                Defining the fundamentals of the project and finding real necessities where this platform could be used
                and how.
              </Typography>
            </Grid>
            <Grid item className="roadmap__text" md={1}>
              <div className="line" />
              <Typography component="h5" variant="h5" align="center" mb={2} color="white">
                Certification platform development
              </Typography>
              <Typography variant="body2">
                Creating the first badges that will help us to better understand the best way to make our platform
                adaptable to different scenarios.
              </Typography>
            </Grid>
            <Grid item className="roadmap__text" md={1}>
              <div className="line" />
              <Typography component="h5" variant="h5" align="center" mb={2} color="white">
                Security layer development
              </Typography>
              <Typography variant="body2">
                Develop the functionality that will allow our community to create badges with private evidence.
              </Typography>
            </Grid>
            <Grid item className="roadmap__text" md={1}>
              <div className="line" />
              <Typography component="h5" variant="h5" align="center" mb={2} color="white">
                Pre-launch campaign
              </Typography>
              <Typography variant="body2">
                Marketing pre-launch campaign, incentives for early adopters. Audit and testing of the platform.
              </Typography>
            </Grid>
            <Grid item className="roadmap__text" md={1}>
              <div className="line" />
              <Typography component="h5" variant="h5" align="center" mb={2} color="white">
                Going live
              </Typography>
              <Typography variant="body2">We will be releasing our platform.</Typography>
            </Grid>
          </Grid>
        </>
      )}
    </Box>
  )
}
