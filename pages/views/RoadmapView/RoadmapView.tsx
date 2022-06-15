import React from "react"
import { RoadmapViewTopBar } from "./RoadmapViewTopbar"
const RoadmapMobileView = React.lazy(()=> import('./RoadmapMobileView'))
const RoadmapView = ()=> {
  return(
    <>
      <RoadmapViewTopBar />
      <RoadmapMobileView />
    </>
  )
}

export default RoadmapView