import { NextResponse } from 'next/server';
import connectMongo from '@/lib/mongo/mongodb';
import AdditionalProduct from '@/models/AdditionalProductSchema';
export async function GET(request, { params }) {
  try {
    await connectMongo();
    console.log(params);
    const product = await AdditionalProduct.find();
    return new NextResponse(JSON.stringify(product), { status: 200 });
  } catch (e) {
    console.log(e);
  }
}
