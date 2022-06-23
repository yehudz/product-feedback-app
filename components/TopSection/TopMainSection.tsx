import { Box, Typography } from "@mui/material"
import TopSectionStyles from '../../styles/TopSection.module.scss'
export const TopMainSection = ()=> {
  return(
    <Box className={TopSectionStyles.mainSection}>
      <Typography variant="h2" color='white' className={TopSectionStyles.mainTitle}>Frontend Mentor</Typography>
      <Typography variant="body2" color='white' className={TopSectionStyles.subtitle}>Feedback Board</Typography>
    </Box>    
  )
}