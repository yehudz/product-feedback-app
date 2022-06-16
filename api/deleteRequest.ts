import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../db'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({message: "Method not allowed"})
  }
  const {id} = req.body
  await prisma.request.delete({
    where: {
      id: id
    }
  })
  res.status(200).json({message: 'Request Created'})
  
}