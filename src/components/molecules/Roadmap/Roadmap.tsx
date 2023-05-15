import { Box, Grid, Typography, useMediaQuery } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import { BoxGradient } from '@components/layout/BoxGradient/BoxGradient'
import React from 'react'
import './roadmap.scss'

export type RoadmapItem = {
  numberTitle: string
  quarterNumber: string
  quarterTitle: string
  quarterDescription: string
  quarterDone?: boolean
}

export type RoadmapProps = {
  elements: RoadmapItem[]
}

const MobileRoadmap = ({ elements }: RoadmapProps): React.ReactElement => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          gap: 1,
        }}
      >
        <Grid container direction="column" width={'30%'} gap={14} padding={'16px 8px'}>
          {elements.map((element, index) => {
            const currentQuarter = `Q${index + 1}`
            const quarterAndYearSplit: string[] = element.quarterNumber.split(currentQuarter)
            return (
              <Grid item className={`roadmap__circle_mobile border-color--${index + 1}`} key={index}>
                <p>{element.numberTitle}</p>
                <p className="year_mobile">
                  {element.quarterDone && <CheckCircleOutlineIcon />}
                  {quarterAndYearSplit.length > 1 ? (
                    <>
                      <span>{currentQuarter}</span>
                      {quarterAndYearSplit[1]}
                    </>
                  ) : (
                    element.quarterNumber
                  )}
                </p>
              </Grid>
            )
          })}
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
          {elements.map((element, index) => {
            return (
              <Grid item className="roadmap__text" md={1} key={index}>
                <Typography component="h4" variant="h5" align="center" mb={1} color="white">
                  {element.quarterTitle}
                </Typography>
                <Typography variant="body2">{element.quarterDescription}</Typography>
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </>
  )
}

const DesktopRoadmap = ({ elements }: RoadmapProps): React.ReactElement => {
  return (
    <>
      <Box position="relative" zIndex={1}>
        <Grid container gap={4} justifyContent="space-around">
          {elements.map((element, index) => {
            return (
              <Grid item className={`roadmap__circle border-color--${index + 1}`} key={index}>
                <p>{element.numberTitle}</p>
              </Grid>
            )
          })}
        </Grid>
      </Box>
      <BoxGradient
        className="roadmap__timeline"
        gradient="linear-gradient(90deg, #008362 0%, #5BBCAD 21.48%, #002CBF 50.63%, #B74AD6 74.67%, #891CFB 98.2%);"
        shadowColor=""
      >
        <Grid container gap={0} justifyContent="space-around" flexWrap="nowrap">
          {elements.map((element, index) => {
            const currentQuarter = `Q${index + 1}`
            const quarterAndYearSplit: string[] = element.quarterNumber.split(currentQuarter)
            return (
              <Grid item className="roadmap__year" key={index}>
                <p>
                  {element.quarterDone && <CheckCircleOutlineIcon sx={{ marginRight: '4px' }} />}
                  {quarterAndYearSplit.length > 1 ? (
                    <>
                      <span>{currentQuarter}</span>
                      {quarterAndYearSplit[1]}
                    </>
                  ) : (
                    element.quarterNumber
                  )}
                </p>
              </Grid>
            )
          })}
        </Grid>
      </BoxGradient>
      <Grid container gap={0} justifyContent="space-around" flexWrap="nowrap" spacing={4} columns={5}>
        {elements.map((element, index) => {
          return (
            <Grid item className="roadmap__text" md={1} key={index}>
              <div className="line" />
              <Typography component="h5" variant="h5" align="center" mb={2} color="white">
                {element.quarterTitle}
              </Typography>
              <Typography variant="body2">{element.quarterDescription}</Typography>
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}

export const Roadmap = (props: RoadmapProps): React.ReactElement => {
  const showMobileView = useMediaQuery('(max-width:800px)')

  if (props.elements.length !== 5) {
    throw Error(`Unsupported amount of items: ${props.elements.length}, items should be 5.`)
  }

  return (
    <Box className="roadmap">
      {showMobileView ? <MobileRoadmap elements={props.elements} /> : <DesktopRoadmap elements={props.elements} />}
    </Box>
  )
}
