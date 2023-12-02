import CardProduct from '../../../../models/CardProduct';
import { NextResponse } from 'next/server';
import connectMongo from '@/lib/mongo/mongodb';
export async function GET(request, {params}) {
  try {
    const { category } = params;
    await connectMongo();
    const product = await CardProduct.find({
      occasion: {
        $in: [category]
      }
    });

    return new NextResponse(JSON.stringify(product), { status: 200 });
  } catch (e) {
    return new NextResponse('Error in response of DB', {status: 500});
  }
}