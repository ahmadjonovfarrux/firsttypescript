import Image from "next/image";
import { FaStar } from "react-icons/fa";
const fetchData = async (url) => {
  const req = await fetch(url);
  const data = await req.json();
  return data;
};

async function Product({ params }) {
  const { id } = await params;
  const product = await fetchData("https://dummyjson.com/product/" + id);
  console.log(product);
  const r = Math.round(product.rating);
  return (
    <div className="flex  items-center gap-5 justify-center">
      <div className="w-[400px] flex-shrink-0 aspect-square">
        <Image
          className="productCard__img"
          src={product.thumbnail}
          alt="image of the product"
          width={600}
          height={500}
        />
      </div>
      <div className="product__content">
        <h2 className="text-2xl font-semibold productCard__title">
          {product.title}
        </h2>
        <p className="productCard__text font-normal text-md">
          {product.description}
        </p>
        <p className="font-semibold">
          <span className="font-normal">Brand:</span> {product.brand}
        </p>
        <p className="font-semibold">
          <span className="font-normal">Cateogry:</span> {product.category}
        </p>
        <p>
          MinimumOrder:{" "}
          <span className="font-semibold">{product.minimumOrderQuantity}</span>
        </p>
        <div className="">
          <p className="flex items-center gap-1">
            Rating:{" "}
            {new Array(5).fill().map((_, i) => {
              return (
                <FaStar
                  className={`${
                    i + 1 <= r ? "text-yellow-400" : "text-black/30"
                  }`}
                  key={Math.random()}
                />
              );
            })}
          </p>
          <p>
            Shipping:{" "}
            <span className="font-semibold">{product.shippingInformation}</span>
          </p>
          <p>
            Return Policy:{" "}
            <span className="font-semibold">{product.returnPolicy}</span>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-red-900">
            Price of product:{" "}
            <span className="font-semibold">${product.price}</span>
          </p>
          <p className="text-blue-900">
            Price with discount:
            <span className="font-semibold">
              $
              {(
                product.price -
                (product.price / 100) * product.discountPercentage
              ).toFixed(2)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
