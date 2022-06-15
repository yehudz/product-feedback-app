import React from "react"

const RoadmapView = React.lazy(()=> import("./views/RoadmapView/RoadmapView")) 

const Roadmap = () => {
  return(
    <RoadmapView />
  )
}

export default Roadmap