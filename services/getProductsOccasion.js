export default async occasion => {
  try {
    const res = await fetch(`http://localhost:3000/api/occasion/${occasion[1]}`);
    return await res.json();
  } catch (e) {
    console.log(e);
  }
};
