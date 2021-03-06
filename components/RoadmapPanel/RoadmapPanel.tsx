import { Box, Typography, Grid } from '@mui/material';
import PanelStyles from '../../styles/Panel.module.scss';
import GoBackBtnLight from '../buttons/GoBackBtnLight';
import appContext from '../../context/appContext';
import Link from 'next/link';
import { useContext } from 'react';
type RoadmapItem = {
  color: string;
  title: string;
  amount: number
}

const RoadmapPanel = ()=> {
  const {roadmapAmounts} = useContext(appContext)
  return(
    <Box className={PanelStyles.container}>
      <Grid 
        container 
        alignItems={'flex-start'} 
        justifyContent="space-between"
        mb={1}
      >
        <Typography variant='h3' color="success.main">Roadmap</Typography>
        <Link href={'/roadmap'}>
          <GoBackBtnLight 
            disableRipple
            sx={
                {
                  width: '8px', 
                  padding: 0, 
                  justifyContent: 'flex-end', 
                  alignItems: 'flex-start',
                  color: 'secondary.main',
                  fontWeight: '300',
                  textDecoration: 'underline'
                }
                }
              >
                View
          </GoBackBtnLight>
        </Link>
      </Grid>
      <Grid container>
        <div style={{width: '100%'}}>
          {roadmapAmounts?.map((item: RoadmapItem)=> {
            return(
              <div key={item.color} className={PanelStyles.roadmapList}>
                <div 
                  className={PanelStyles.dot} 
                  style={{backgroundColor: item.color}}
                ></div>
                <Typography 
                  variant='body1' 
                  color="success.light"
                >
                  {item.title}
                </Typography>
                <Typography 
                  variant='body1'
                  fontWeight={600} 
                  color='success.light'
                  textAlign={'right'}
                >
                  {item.amount}
                </Typography>
              </div>
            )
          })}
        </div>
      </Grid>
    </Box>
  )
}

export default RoadmapPanel