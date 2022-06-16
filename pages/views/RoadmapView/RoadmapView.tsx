import React, {Suspense} from "react"
import { RoadmapViewTopBar } from "./RoadmapViewTopbar"
import {Request} from '../../../typings/common.types'
interface RoadmapViewProps {
  requests: Request[]
}

const RoadmapMobileView = React.lazy(()=> import('./RoadmapMobileView'))
const RoadmapView = ({requests}: RoadmapViewProps) => {
  return(
    <>
      <RoadmapViewTopBar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <RoadmapMobileView requests={requests}/>
      </Suspense>
    </>
  )
}

export default RoadmapView