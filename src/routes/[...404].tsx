import { createEffect, onMount } from "solid-js";
import { useNavigate } from "solid-start";


export default function NotFound() {
  const navigate = useNavigate();

  onMount(() => {
    const interval = setInterval(() => {
      navigate("/");
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-9xl text-sky-700 font-thin uppercase my-16">
        Not Found
      </h1>
    </main>
  );
}
