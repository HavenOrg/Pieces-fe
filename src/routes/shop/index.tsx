import { For } from "solid-js";
import FeatureProducts from "../../components/FeaturedProducts";
import A from "solid-start";

// Update for ssr
// const FeaturedProducts = lazy(() => import('./featuredproducts'));

export default function Home() {
  return (
    <div class="w-full">
      <div class="flex flex-row flex-wrap justify-center ">
        <For each={FeatureProducts()}>
          {(product) => (
            <div class="w-full sm:w-1/2 md:w-1/4 px-4 py-4">
              <div class="block relative h-48 rounded overflow-hidden">
                <A ref={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    class="object-cover object-center w-full h-full block"
                  />
                  <div class="absolute bottom-0 bg-white bg-opacity-80 w-full flex justify-between px-4 py-2">
                    <div class="font-medium text-gray-900">{product.name}</div>
                    <div class="font-medium text-gray-900">
                      ${product.price}
                    </div>
                  </div>
                </A>
              </div>
            </div>
          )}
        </For>
      </div>
    </div>
  );
}
