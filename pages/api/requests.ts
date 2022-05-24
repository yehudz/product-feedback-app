import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

export default async (req: any, res: any)=> {
 if (req.method !== 'POST') {
   return res.status(405).json({message: "Method not allowed"})
 }

 const requestData = JSON.parse(req.body)

 const savedRequest = await prisma.request.create({
   data: requestData
 })

 res.json(savedRequest)
}