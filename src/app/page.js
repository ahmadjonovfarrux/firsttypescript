import { Suspense } from "react";
import Products from "../components/Products";

async function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Home Page</h1>
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
