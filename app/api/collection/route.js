// /**
//  * @param {import('next').NextApiRequest} req
//  * @param {import('next').NextApiResponse} res
// */

import connectMongo from '../../lib/mongo/mongodb';
import CardProduct from '../../models/CardProduct';
import { NextResponse } from 'next/server';
export default async function GET() {
  await connectMongo();
  const test = await CardProduct.find();
  return NextResponse.json({msg: test});

  // const products = CardProduct.findOne({_id: '64c9f4265b7dd8feb6b0e38a'});
  // const products = CardProduct.find();
  // res.status(200).json(products);
  // console.info(products);
  // res.status.json({name });
}