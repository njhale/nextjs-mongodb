// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../../db'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch(req.method) {
    case 'GET':
      res.status(200).json(await db.todo.findMany({orderBy: {createdAt: 'asc'}}))
      break;
    case 'POST':
      const {name, content} = req.body
      res.status(200).json(await db.todo.create({
        data: {
          name,
          content,
        }
      }))
      break;
  }
}
