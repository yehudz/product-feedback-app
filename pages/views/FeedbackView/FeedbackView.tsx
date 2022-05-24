import {Requests} from '../../../typings/common.types'
import {Request} from '../../../typings/common.types'
import { FeedbackCard } from './FeedbackCard'
interface FeedbackViewProps {
  requests: Requests
}

export const FeedbackView = ({requests}: FeedbackViewProps)=> {
  return(
    <>
      {
        requests.reverse().map((request: Request)=> (
          <FeedbackCard key={request.id} request={request}/>
        ))
      }
    </>
  )
}