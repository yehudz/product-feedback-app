import { Grid } from '@mui/material'
import {Request} from '../../typings/common.types'
import FeedbackCard from '../../views/FeedbackView/FeedbackCard'
import FeedbackCardStyles from '../../styles/FeedbackCard.module.scss'
interface RoadmapViewContainerProps {
  requests: Request[]
}

export const RoadmapViewContainer = ({requests}: RoadmapViewContainerProps)=> {
  const planned = requests.filter(request=> {
    if (request.status === 'Planned') return request
  })

  const inProgress = requests.filter(request=> {
    if (request.status === 'In-Progress') return request
  })

  const live = requests.filter(request=> {
    if (request.status === 'Live') return request
  })
  return(
    <Grid 
      container 
      flexDirection={'row'} 
      flexWrap="nowrap" 
      className={FeedbackCardStyles.desktopView}
      m={4}
      boxSizing="border-box"
    >
       <Grid item>
        {planned.map(item=> {
          let statusParams = {
            title: 'Planned',
            color: '#F49F85'
          }
          return(
            <FeedbackCard key={item.id} request={item} isRoadmap={true} status={statusParams}/>
          )
        })}
      </Grid>
      <Grid item>
        {inProgress.map(item=> {
            let statusParams = {
              title: 'In-Progress',
              color: '#AD1FEA'
            }
            return(
              <FeedbackCard key={item.id} request={item} isRoadmap={true} status={statusParams}/>
            )
          })}
      </Grid>
      <Grid item>
        {live.map(item=> {
          let statusParams = {
            title: 'Live',
            color: '#62BCFA'
          }
          return(
            <FeedbackCard key={item.id} request={item} isRoadmap={true} status={statusParams}/>
          )
        })}
      </Grid>
    </Grid>
  )
}