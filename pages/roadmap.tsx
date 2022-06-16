import React from "react"
import prisma from '../db'
import { GetStaticProps } from 'next'
const RoadmapView = React.lazy(()=> import("../views/RoadmapView/RoadmapView")) 

const Roadmap = ({requests}: any) => {
  return(
    <RoadmapView requests={requests}/>
  )
}

export const getStaticProps: GetStaticProps = async ()=> {
  
  const requests = await prisma.request.findMany({
    include: {
      comments: true
    }
  })
  return {
    props: {
      requests
    }
  }
}

export default Roadmap