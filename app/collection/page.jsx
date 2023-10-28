// import { useDispatch, useSelector } from 'react-redux';
// import { useParams, useLocation } from 'react-router-dom';
//
// import axios from '../../axios';
//
// import { Categories } from '../../components/Categories/Categories';
// import { Container, ProductCard } from '../../components/index';
//
import { useSort } from '@/hooks/useSort';
// import { fetchProducts, fetchProductsCat } from '../../redux/slices/productsSlice';
//

import { Categories, Container, ProductCollection } from '@/components';
import { redirect } from 'next/navigation';
// import { getCollection } from '@/services';
// import { useSelector } from 'react-redux';

async function getCollection() {
  try {
    const res = await fetch('http://localhost:3001/api/collection');
    return res.json();
  } catch (e) {
    console.log(e);
  }
};
export default async function WrapperPageCollection() {
  // const collection = await getCollection();
  // console.log('collection', collection);
  // const { products } = useSelector(state => state.products);
  // console.log(products);
  // const { sortedProduct, setSelectedSort } = useSort(collection || []);
  // console.log(sortedProduct);
  return (
    // <div>as</div>
    <ProductCollection />
  );
}

// export const ProductCollection = () => {
//   const [activeIndex, setActiveIndex] = useState();
//   const [category, setCategory] = useState('Наборы клубники в шоколаде');
//   const dispatch = useDispatch();
//   const { products } = useSelector(state => state.products);
//   const { sortedProduct, setSelectedSort } = useSort(products.items || []);
//   const location = useLocation();
//
//   useEffect(() => {
//     dispatch(fetchProducts());
//     console.log('products ', products);
//     if (location.state != null) {
//       setCategory(location.state.category);
//       setActiveIndex(location.state.id);
//       setSelectedSort(location.state.category);
//     }
//   }, [dispatch]);
//
//   const eventHandler = (id, category) => {
//     setCategory(category);
//     setActiveIndex(id);
//     setSelectedSort(category);
//   };
//   return (
//     <main>
//       <Container>
//         <div className={styles.wrapper}>
//           <div className={styles.category}>
//             <nav>
//               <Categories activeIndex={activeIndex} eventHandler={eventHandler} />
//             </nav>
//           </div>
//           <div className={styles.products}>
//             {/* проверить есть ли товары в БД */}
//             {sortedProduct.length !== 0
//               ? sortedProduct.map(el => <ProductCard key={el._id} {...el} />)
//               : activeIndex
//                 ? 'Товары в катеогрии отсутствуют'
//                 : 'Необходимо выбрать категорию товара'}
//           </div>
//         </div>
//       </Container>
//     </main>
//   );
// };
//
// // add loading
// // loader
// /*
//     <div class="loader">
//       <span class="loader__element"></span>
//       <span class="loader__element"></span>
//       <span class="loader__element"></span>
//     </div>
//   */
//
// /*
//     :root {
//       --main-color: #ecf0f1;
//       --point-color: #555;
//       --size: 5px;
//     }
//
//     .loader {
//       background-color: var(--main-color);
//       overflow: hidden;
//       width: 100%;
//       height: 100%;
//       position: fixed;
//       top: 0; left: 0;
//       display: flex;
//       align-items: center;
//       align-content: center;
//       justify-content: center;
//       z-index: 100000;
//     }
//
//     .loader__element {
//       border-radius: 100%;
//       border: var(--size) solid var(--point-color);
//       margin: calc(var(--size)*2);
//     }
//
//     .loader__element:nth-child(1) {
//       animation: preloader .6s ease-in-out alternate infinite;
//     }
//     .loader__element:nth-child(2) {
//       animation: preloader .6s ease-in-out alternate .2s infinite;
//     }
//
//     .loader__element:nth-child(3) {
//       animation: preloader .6s ease-in-out alternate .4s infinite;
//     }
//
//     @keyframes preloader {
//       100% { transform: scale(2); }
//     }
//   */
//
// // products.items.length && products.items.map((el) => (
// //   <ProductCard key={el._id} {...el} />
// // ))
