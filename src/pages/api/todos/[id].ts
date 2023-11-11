// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../../db'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = (req.query as any)
  switch(req.method) {
    case 'GET':
      console.log(id)
      res.status(200).json(await db.todo.findUnique({where: {id}}))
      break;
    case 'PUT':
      const {name, content, complete} = req.body
      res.status(200).json(await db.todo.update({
        where: {id},
        data: {
          name,
          content,
          complete
        }
      }))
      break;
    case 'DELETE':
      res.status(200).json(await db.todo.delete({where: {id}}))
      break;
  }
}