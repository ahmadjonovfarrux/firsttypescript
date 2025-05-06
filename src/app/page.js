import { Suspense } from "react";
import Products from "../components/Products";

async function Home() {
  return (
    <div className="container">
      <Suspense
        fallback={
          <div className="flex items-center justify-center text-3xl text-red-800 font-bold">
            Loading...
          </div>
        }
      >
        <Products />
      </Suspense>
    </div>
  );
}
export default Home;
