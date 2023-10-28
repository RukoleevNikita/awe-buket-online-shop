import { Categories, Container, Product, ProductCollection } from '@/components';
import { redirect } from 'next/navigation';
// import { useSelector } from 'react-redux';

// async function getProduct(id) {
//   try {
//     const res = await fetch(`http://localhost:3001/api/collection/${id}`);
//     return res.json();
//   } catch (e) {
//     console.log(e);
//   }
// };
export default async function WrapperPageProduct({params}) {
  console.log('params', params);
  // const product = await getProduct(params.id);
  // const { products } = useSelector(state => state.products);
  // console.log(products);
  // const { sortedProduct, setSelectedSort } = useSort(collection || []);
  // console.log(sortedProduct);
  return (
    // <div>asds</div>
    <Product />
  );
}