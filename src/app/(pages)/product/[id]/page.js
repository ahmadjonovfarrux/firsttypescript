const fetchData = async (url) => {
  const req = await fetch(url);
  const data = await req.json();
  return data;
};

async function Product({ params }) {
  const { id } = await params;
  const product = await fetchData("https://dummyjson.com/product/" + id);
  console.log(product);
  return <div>Product</div>;
}

export default Product;
