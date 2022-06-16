import { Box, Typography, IconButton } from '@mui/material'
import MobileNavStyles from '../../styles/MobileNavStyles.module.scss'
import appContext from '../../context/appContext'
import { useContext } from 'react';
const MobileNav = ()=> {
  const {mobileMenuVisibility, setMobileMenuVisibility} = useContext(appContext)

  function handleMobileMenuVisibility() {
    if (mobileMenuVisibility) setMobileMenuVisibility(false)
    else setMobileMenuVisibility(true)
  }
  return <div className={MobileNavStyles.container}>
    <Box>
      <Typography variant="body2" fontWeight={'bold'} color="info.main">Frontend Mentor</Typography>
      <Typography variant="subtitle1" fontWeight={'regular'} color="info.dark">Feedback Board</Typography>
    </Box>
      <IconButton sx={{padding: 0}} onClick={handleMobileMenuVisibility}>
        {!mobileMenuVisibility ? 
          <img src="assets/shared/mobile/icon-hamburger.svg" alt="" /> :
          <img src="assets/shared/mobile/icon-close.svg" alt="" />
        }
        
      </IconButton>
  </div>
}

export default MobileNav