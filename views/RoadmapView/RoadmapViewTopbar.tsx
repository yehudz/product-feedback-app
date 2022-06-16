import { Box, Typography } from "@mui/material"
import GoBackBtnDark from "../../components/buttons/GoBackBtnDark"
import { CaretLeft } from "phosphor-react"
import RoadmapViewStyles from '../../styles/RoadmapView.module.scss'

import Link from "next/link"
import PrimaryButton from "../../components/buttons/PrimaryButton"
const RoadmapViewTopBar = ()=> {
  return(
    <Box height={'100px'} bgcolor={'success.main'} pt={1.5} className={RoadmapViewStyles.topBarContainer}>
      <Link href="/">
        <GoBackBtnDark startIcon={<CaretLeft size={16}/>}>Go Back</GoBackBtnDark>
      </Link>
      <Typography variant="h2" color="white" pl={5} mt={-1}>Roadmap</Typography>
      <Link href='/createNewFeedback' passHref>
        <PrimaryButton className={RoadmapViewStyles.primaryButton}>+ Add Feedback</PrimaryButton>
      </Link>
    </Box>
    
  )
}

export default RoadmapViewTopBar