import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()
export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({message: "Method not allowed"})
  }
  await prisma.request.create({
    data: JSON.parse(req.body)
  })
  res.status(200).json({message: 'Request Created'})
  
}