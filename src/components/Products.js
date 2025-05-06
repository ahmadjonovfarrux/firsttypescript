import Link from "next/link";
import Image from "next/image";
import { showToast } from "nextjs-toast-notify";

const fetchData = async (url) => {
  const req = await fetch(url);
  const data = await req.json();
  return data;
};

async function Products() {
  const { products } = await fetchData("https://dummyjson.com/product");
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
      {products.map((product) => {
        return (
          <div key={product.id} className="">
            <Link href={`/product/${product.id}`}>
              <Image
                src={product.thumbnail}
                alt="image of the product"
                width={300}
                height={200}
              />
              <h3>{product.title}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
