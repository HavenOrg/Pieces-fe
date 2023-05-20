import {
  Component,
  createEffect,
  onCleanup,
  createSignal,
  For,
} from "solid-js";
import CategoryLayout from "~/components/CategoryLayout";
import { useLocation, useNavigate } from "@solidjs/router";
// import { getProductByCategory } from '../utils/api';
// const [products] = createResource(() => getProductByCategory(category), category);

const ShopCategory: Component = () => {
  const [category, setCategory] = createSignal("");
  const location = useLocation();
  const navigate = useNavigate()

  const products = [
    {
      id: 1,
      name: "Product 1",
      category: "category1",
      description: "Product 1 description",
    },
    {
      id: 2,
      name: "Product 2",
      category: "category1",
      description: "Product 2 description",
    },
    {
      id: 3,
      name: "Product 3",
      category: "category2",
      description: "Product 3 description",
    },
    {
      id: 4,
      name: "Product 4",
      category: "category2",
      description: "Product 4 description",
    },
  ];

  const filteredProducts = products.filter(
    (product) => product.category === category()
  );

  createEffect(() => {
    const pathArray = location.pathname.split("/");
    const categoryName = pathArray[pathArray.length - 1];
    setCategory(categoryName);
    console.log(categoryName)
  }, [location.pathname, category()]);

  const handleRefresh = () => {
    navigate(location.pathname)
  }
  // createEffect(() => {
  //   navigate(location.pathname)
  // },[location.pathname])
  // const handleCategoryChange = (newCategory: string) => {
  // };

  onCleanup(() => {
    console.log("component unmounted");
  });


  return (
    <CategoryLayout category={category()}>
      <button onClick={handleRefresh}>
      <For each={filteredProducts}>
        {(product) => (
          <div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        )}
      </For>
      </button>
    </CategoryLayout>
  );
};

export default ShopCategory;
