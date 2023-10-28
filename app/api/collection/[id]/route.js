import connectMongo from '../../../../lib/mongo/mongodb';
import CardProduct from '../../../../models/CardProduct';
import { NextResponse } from 'next/server';
export async function GET(request, {params}) {
  try {
    // console.log('product____________________________________ ', params);
    const { id } = params;
    await connectMongo();
    // const product = await CardProduct.findById(id);
    // console.log('product ', product);
    const product = CardProduct.findOneAndUpdate(
      {
        _id: id,
      },
      {
        $inc:{ viewsCount: 1 }
      },
      {
        returnDocument: 'after'
      }
    );
    // ,
    // (err, product) => {
    // if (err) {
    //   console.error(err);
    // return res.status(500).json({
    //   error: 'Не удалось вернуть товар'
    // });
    // }
    // if (!product) new NextResponse('Товар не найден', {status: 404});

    return new NextResponse(JSON.stringify(product), {status: 200});
    // }
    // );
    // return new NextResponse(product);
  } catch (e) {
    return new NextResponse('Error in response of DB', {status: 500});
  }
}