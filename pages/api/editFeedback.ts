import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../db'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({message: "Method not allowed"})
  }
  const {id, description, status, category, title} = req.body
  await prisma.request.update({
    where: {
      id: id
    },
    data: {
      title: title,
      description: description,
      status: status,
      category: category
    }
  })
  res.status(200).json({message: 'Request Created'})
  
}