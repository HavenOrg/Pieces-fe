import { A } from "solid-start";
import { For, createSignal } from "solid-js";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = createSignal(false);

  const categories = [
    "New",
    "Women",
    "Men",
    "Jewelry",
    "Watches",
    "Art",
    "Collectibles",
  ];
  const toggleSideBar = () => {
    setSidebarOpen(!sidebarOpen());
  };

  return (
    <header class="bg-orange-100 hover:bg-white transform transition duration-700">
      <nav class="container flex items-center justify-between py-3 mx-auto">
        <div class="flex items-center">
          <button
            onClick={toggleSideBar}
            class="text-gray-500 hover:text-gray-700 focus:outline-none pr-2 -ml-7"
          >
            <svg class="h-6 w-6 -ml-4" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <a
            href="/"
            class="text-2xl font-bold text-gray-700"
            style={{ "font-family": "Abril-Fatface" }}
          >
            PLACARD
          </a>
        </div>

        {/* Sidebar */}
        <div class={`${sidebarOpen() ? "block" : "hidden"} absolute top-0 bottom-0 left-0 z-10`}>
          <Sidebar onClose={toggleSideBar} />
        </div>

        <div class="hidden md:block">
          <ul class="flex items-center space-x-6 ">
            <For
              each={categories}
              fallback={
                <div style={{ "font-family": "Abril-Fatface" }}>Loading...</div>
              }
            >
              {(category) => (
                <li class="uppercase">
                  <A
                    class="text-sm font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                    href={`/${category.toLowerCase()}`}
                    style={{ "font-family": "Abril-Fatface" }}
                  >
                    {category}
                  </A>
                </li>
              )}
            </For>
          </ul>
        </div>

        <div class="flex items-center ">
          <a
            href="/"
            class="text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
          >
            <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 19H5V8H19V19ZM19 19L12 14L5 19"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <a
            href="/"
            class="ml-5 text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
          >
            <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
              <path
                d="M17 11H7V7H17V11ZM21 13V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V13H1L10 3L19 13H17Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
