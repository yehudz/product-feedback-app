import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../db'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const {content, user, requestId} = JSON.parse(req.body)
  if (req.method !== 'POST') {
    return res.status(405).json({message: "Method not allowed"})
  }
  await prisma.comment.create({
    data: {
      requestId: requestId,
      content: content,
      user: {
        create: user
      }
    }
  })
  res.status(200).json({message: 'Post Created'})
}