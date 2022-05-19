import {ProductRequests} from '../../../typings/common.types'
import {Request} from '../../../typings/common.types'
import { FeedbackCard } from './FeedbackCard'
interface FeedbackViewProps {
  requests: ProductRequests
}

export const FeedbackView = ({requests}: FeedbackViewProps)=> {
  return(
    <>
      {
        requests.productRequests.map((request: Request)=> (
          <FeedbackCard key={request.id} request={request}/>
        ))
      }
    </>
  )
}