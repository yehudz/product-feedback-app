import { Grid } from '@mui/material'
import TopSectionStyles from '../../styles/TopSection.module.scss'
import { TopFilterSection } from './TopFilterSection'
import { TopMainSection } from './TopMainSection'
import { TopRoadmapPanel } from './TopRoadmapPanel'

export const TopSection = ()=> {
  return(
    <Grid container className={TopSectionStyles.container} gap={2}>
      <Grid item flex={1}>
        <TopMainSection />
      </Grid>
      <Grid item flex={1}>
        <TopFilterSection /> 
      </Grid>
      <Grid item flex={1}>
        <TopRoadmapPanel />
      </Grid>
    </Grid>
  )
}