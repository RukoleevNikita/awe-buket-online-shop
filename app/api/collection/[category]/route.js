import { NextResponse } from 'next/server';
import connectMongo from '@/lib/mongo/mongodb';
import CardProduct from '@/models/ProductSchema';
export async function GET(request, {params}) {
  try {

    const { category } = params;
    await connectMongo();
    const product = await CardProduct.find({
      category: category
    });
    return new NextResponse(JSON.stringify(product), { status: 200 });
  } catch (e) {
    console.log(e);
  }
}