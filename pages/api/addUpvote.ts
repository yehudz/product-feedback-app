import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../db'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({message: "Method not allowed"})
  }
  const {id, upvotes, liked} = req.body
  await prisma.request.update({
    where: {
      id: id
    },
    data: {
      upvotes: upvotes,
      liked: liked
    }
  })
  res.status(200).json({message: 'Request Created'})
  
}