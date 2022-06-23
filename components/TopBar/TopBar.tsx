import NavStyles from '../../styles/NavStyles.module.scss'
import DropDownMenu from "../DropDownMenu"
import PrimaryButton from "../buttons/PrimaryButton"
import Link from 'next/link'
import { Box, Typography } from '@mui/material'

interface TopBarProps {
  suggestions: number
}

const TopBar = ({suggestions}: TopBarProps)=> {
  const menuItems = ['Most Upvotes', 'Least Upvotes', 'Most Comments', 'Least Comments']
  return (
    <div className={NavStyles.optionsMenuContainer}>
      <Box className={NavStyles.suggestions}>
        <img src="/assets/suggestions/icon-suggestions.svg" />
        <Typography variant='h3' color="white">{suggestions} Suggestions</Typography>
      </Box>
      <DropDownMenu menuItems={menuItems} sortDropdown={true} mobile={false}/>
      <Link href='/createNewFeedback' passHref>
        <PrimaryButton 
          variant="contained" 
          sx={{height: '44px', width: '158px !important', fontSize: '14px'}}
        >
          + Add Feedback
        </PrimaryButton>
      </Link>
    </div>
  )
}

export default TopBar