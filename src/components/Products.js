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
  console.log(products);
  // description price discountpercentage
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
      {products.map((product) => {
        return (
          <div key={product.id} className="productCard">
            <Link href={`/product/${product.id}`}>
              <Image
                className="productCard__img"
                src={product.thumbnail}
                alt="image of the product"
                width={300}
                height={200}
              />
              <h3 className="text-xl font-semibold product__title">
                {product.title}
              </h3>
              <p className="line-clamp-2">{product.description}</p>
              <div className="btnWrapper flex items-center gap-3">
                <button className="btn red">
                  <del>${product.price}</del>
                </button>
                <button className="btn blue">
                  $
                  {(
                    product.price -
                    (product.price / 100) * product.discountPercentage
                  ).toFixed(2)}
                </button>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
