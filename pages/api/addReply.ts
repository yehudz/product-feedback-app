import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../db'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const {content, user, commentId, replyingTo} = JSON.parse(req.body)
  if (req.method !== 'POST') {
    return res.status(405).json({message: "Method not allowed"})
  }
  await prisma.reply.create({
    data: {
      commentId: commentId,
      content: content,
      replyingTo,
      user: {
        create: user
      }
    }
  })
  res.status(200).json({message: 'Reply Created'})
}