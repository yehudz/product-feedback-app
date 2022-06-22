import React from "react"
import prisma from '../db'
import { GetServerSideProps } from 'next'
const RoadmapView = React.lazy(()=> import("../views/RoadmapView/RoadmapView")) 

const Roadmap = ({requests}: any) => {
  return(
    <RoadmapView requests={requests}/>
  )
}

export const getServerSideProps: GetServerSideProps = async ()=> {
  
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