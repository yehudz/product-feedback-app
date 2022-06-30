import {Request} from '../../typings/common.types'
import FeedbackCard from './FeedbackCard'
import appContext from '../../context/appContext'
import { useContext, useEffect, useState } from 'react'

import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { Grid, Typography } from '@mui/material';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import Link from 'next/link';
interface FeedbackViewProps {
  requests: Request[]
}

const FeedbackView = ({requests}: FeedbackViewProps)=> {
  const {mainMenuFilterOption, categoryFilterSelected} = useContext(appContext)
  const [filterSelection, setFilterSelection] = useState()
  const [feedbackRequestsList, setFeedbackRequestsLists] = useState(requests);

  useEffect(()=> {
    if (categoryFilterSelected === 'All' || !categoryFilterSelected) {
      setFeedbackRequestsLists(requests)  
      return 
    }
    const filtered = requests.filter((item)=> {
      return item.category === categoryFilterSelected
    });
    setFeedbackRequestsLists(filtered)
  }, [categoryFilterSelected])
  switch(mainMenuFilterOption) {
    case 'Most Upvotes':
      let filteredByMostUpvotes: any = feedbackRequestsList.sort((a: Request, b: Request)=> {
        return b?.upvotes - a?.upvotes;
      })
      setTimeout(()=> {
        setFilterSelection(filteredByMostUpvotes)
      }, 2000)
      break;
    case 'Least Upvotes': 
      let filteredByLeastUpvotes: any = feedbackRequestsList.sort((a: Request, b: Request)=> {
        return a?.upvotes - b?.upvotes;
      })
      setTimeout(()=> {
        setFilterSelection(filteredByLeastUpvotes)
      }, 2000)
      break;
    case 'Most Comments':
      let filteredByMostComments: any = feedbackRequestsList.sort((a: Request, b: Request)=> {
        return b.comments.length - a.comments.length;
      })
      setTimeout(()=> {
        setFilterSelection(filteredByMostComments)
      }, 2000)
      break;
    case 'Least Comments':
      let filteredByLeastComments: any = feedbackRequestsList.sort((a: Request, b: Request)=> {
        return a.comments.length - b.comments.length;
      })
      setTimeout(()=> {
        setFilterSelection(filteredByLeastComments)
      }, 2000)
      break;
    default: 
      let defaultFilter: any = feedbackRequestsList.sort((a: Request, b: Request)=> {
        return b?.upvotes - a?.upvotes;
      })
      setTimeout(()=> {
        setFilterSelection(defaultFilter)
      }, 2000)
  }

  const EmptyScreen = ()=> {
    return(
        <Grid 
          container 
          flexDirection={'column'} 
          alignItems="center" 
          justifyContent={'center'}
          mt={3}
          maxWidth={'410px'}
          sx={{margin: '90px auto'}}
        >
          <Grid item>
            <img src="assets/suggestions/illustration-empty.svg" alt="" />
          </Grid>
          <Typography variant="h1" color="success.main" mt={5} mb={3} gutterBottom>There is no feedback yet.</Typography>
          <Typography variant="body1" color="success.main" textAlign={'center'} mb={6}>Got a suggestion? Found a bug that you need squashed? We love hearing about new ideas to improve our app.</Typography>
          <Link href={'/createNewFeedback'}>
            <PrimaryButton>+ Add Feedback</PrimaryButton>
          </Link>
        </Grid>
    )
  }

  return(
    <>
      {!feedbackRequestsList.length && <EmptyScreen />}
      {filterSelection ? (filterSelection as Request[]).map((request: Request)=> {
        return(<FeedbackCard key={request.id} request={request}/>)
      }): <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>}
    </>
  )
}
export default FeedbackView