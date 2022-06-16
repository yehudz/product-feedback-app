import {Requests} from '../../../typings/common.types'
import {Request} from '../../../typings/common.types'
import { FeedbackCard } from './FeedbackCard'
import {appContext} from '../../context/appContext'
import { useContext, useState } from 'react'

import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
interface FeedbackViewProps {
  requests: Requests
}

const FeedbackView = ({requests}: FeedbackViewProps)=> {
  const {mainMenuFilterOption} = useContext(appContext)
  const [filterSelection, setFilterSelection] = useState()
  switch(mainMenuFilterOption) {
    case 'Most Upvotes':
      let filteredByMostUpvotes = requests.sort((a: Request, b: Request)=> {
        return b?.upvotes - a?.upvotes;
      })
      setTimeout(()=> {
        setFilterSelection(filteredByMostUpvotes)
      }, 2000)
      break;
    case 'Least Upvotes': 
      let filteredByLeastUpvotes = requests.sort((a: Request, b: Request)=> {
        return a?.upvotes - b?.upvotes;
      })
      setTimeout(()=> {
        setFilterSelection(filteredByLeastUpvotes)
      }, 2000)
      break;
    case 'Most Comments':
      let filteredByMostComments = requests.sort((a: Request, b: Request)=> {
        return b.comments.length - a.comments.length;
      })
      setTimeout(()=> {
        setFilterSelection(filteredByMostComments)
      }, 2000)
      break;
    case 'Least Comments':
      let filteredByLeastComments = requests.sort((a: Request, b: Request)=> {
        return a.comments.length - b.comments.length;
      })
      setTimeout(()=> {
        setFilterSelection(filteredByLeastComments)
      }, 2000)
      break;
    default: 
      let defaultFilter = requests.sort((a: Request, b: Request)=> {
        return b?.upvotes - a?.upvotes;
      })
      setTimeout(()=> {
        setFilterSelection(defaultFilter)
      }, 2000)
  }
  return(
    <>
      {filterSelection ? filterSelection?.map((request: Request)=> {
        return(<FeedbackCard key={request.id} request={request}/>)
      }): <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>}
    </>
  )
}
export default FeedbackView