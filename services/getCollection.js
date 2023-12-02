export default async category => {
  try {
    console.log(category);
    const res = await fetch(`http://localhost:3000/api/collection/${category[1]}`);
    return res.json();
  } catch (e) {
    console.log(e);
  }
};
// async function getCollection() {
//   try {
//     const res = await fetch('http://localhost:3001/api/collection');
//     return res.json();
//   } catch (e) {
//     console.log(e);
//   }
// };

