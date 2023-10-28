import connectMongo from '../../../lib/mongo/mongodb';
import CardProduct from '../../../models/CardProduct';
import { NextResponse } from 'next/server';
export async function GET(request) {
  await connectMongo();
  const collection = await CardProduct.find();
  return new NextResponse(JSON.stringify(collection), {status: 200});
}