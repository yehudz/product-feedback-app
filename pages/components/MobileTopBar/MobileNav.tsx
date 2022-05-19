import { Box, Typography, IconButton } from '@mui/material'
import MobileNavStyles from '../../../styles/MobileNavStyles.module.scss'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
export const MobileNav = ()=> {
  return <div className={MobileNavStyles.container}>
    <Box>
      <Typography variant="body2" fontWeight={'bold'} color="info.main">Frontend Mentor</Typography>
      <Typography variant="subtitle1" fontWeight={'regular'} color="info.dark">Feedback Board</Typography>
    </Box>
    <IconButton disableRipple sx={{padding: 0}}>
      <MenuOutlinedIcon color="info" sx={{fontSize: '28px'}}/>
    </IconButton>
  </div>
}