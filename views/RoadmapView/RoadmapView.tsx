import React, {Suspense, useContext} from "react"
import RoadmapViewTopBar from "./RoadmapViewTopbar"
import { RoadmapViewContainer } from "./RoadmapViewContainer"
import {Request} from '../../typings/common.types'
import appContext from '../../context/appContext'
interface RoadmapViewProps {
  requests: Request[]
}

const RoadmapMobileView = React.lazy(()=> import('./RoadmapMobileView'))
const RoadmapView = ({requests}: RoadmapViewProps) => {
  const {isMobile} = useContext(appContext)
  console.log(isMobile)
  return(
    <>
      <RoadmapViewTopBar />
      {!isMobile && <RoadmapViewContainer requests={requests}/>}
      {isMobile && <Suspense fallback={<h1>Loading...</h1>}>
        <RoadmapMobileView requests={requests}/>
      </Suspense>}
     
    </>
  )
}

export default RoadmapView