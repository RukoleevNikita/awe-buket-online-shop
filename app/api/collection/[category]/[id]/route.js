import { NextResponse } from 'next/server';
import connectMongo from '@/lib/mongo/mongodb';
import CardProduct from '@/models/CardProduct';
export async function GET(request, {params}) {
  try {
    // console.log('params ', params);
    const { id } = params;
    await connectMongo();
    // const product = {};
    // console.log('api ', id);
    const product = await CardProduct.find({
      _id: id
    });
    return new NextResponse(JSON.stringify(product), { status: 200 });
  } catch (e) {
    console.log(e);
  }
}