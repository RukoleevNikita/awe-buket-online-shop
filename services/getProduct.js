export default async id => {
  try {
    const res = await fetch(`http://localhost:3000/api/collection/${id}`);
    console.log(id);
    return res.json();
  } catch (e) {
    console.log(e);
  }
};
// async function getCollection(id) {
//   try {
//     const res = await fetch(`http://localhost:3001/api/collection/${id}`);
//     return res.json();
//   } catch (e) {
//     console.log(e);
//   }
// };