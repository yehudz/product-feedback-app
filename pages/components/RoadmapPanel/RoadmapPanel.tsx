import { Box, Typography, Grid } from '@mui/material';
import PanelStyles from '../../../styles/Panel.module.scss';
import GoBackBtnLight from '../buttons/GoBackBtnLight';
import Link from 'next/link';
export const RoadmapPanel = ()=> {

  // Dummy data
  const roadmapList = [
    {
      color: '#F49F85',
      title: 'Planned',
      amount: 2
    },
    {
      color: '#AD1FEA',
      title: 'In-Progress',
      amount: 3
    },
    {
      color: '#62BCFA',
      title: 'Live',
      amount: 1
    }
  ]

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
        <div className={PanelStyles.roadmapList}>
          {roadmapList.map(item=> {
            return(
              <>
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
              </>
            )
          })}
        </div>
      </Grid>
    </Box>
  )
}