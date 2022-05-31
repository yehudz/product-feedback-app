import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../db'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const feedbackId = req.query.id

  if (req.method !== 'UPDATE') {
    return res.status(405).json({message: "Method not allowed"})
  }

  await prisma.request.update({
    where: {id: Number(feedbackId)},
    data: {
      
      comments: {
        create: JSON.parse(JSON.stringify(req.body))
      } 
    }
  })
  res.status(200).json({message: 'Request Created'})
}