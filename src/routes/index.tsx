import { createSignal, createEffect } from "solid-js";

export default function Home() {
  const [closet, setCloset] = createSignal("PLACARD");
  const [pieces, setPieces] = createSignal("PIÈCES");

  const translations = {
    Armário: closet,
    Kast: closet,
    خزانة: closet,
    Armario: closet,
    Kọlọfin: closet,
    クローゼット: closet,
    "Ụlọ ime ụlọ": closet,
    벽장: closet,
  };
  const translations2 = {
    Peças: pieces,
    Stukken: pieces,
    قِطَع: pieces,
    Piezas: pieces,
    "Awọn nkan": pieces,
    ピース: pieces,
    Iberibe: pieces,
    조각: pieces,
  };

  let counter = 0;

  createEffect(() => {
    const interval = setInterval(() => {
      setCloset(
        Object.keys(translations)[counter % Object.keys(translations).length]
      );
      setPieces(
        Object.keys(translations2)[counter % Object.keys(translations2).length]
      );
      counter++;
      if (
        counter === Object.keys(translations).length &&
        counter === Object.keys(translations2).length
      ) {
        clearInterval(interval);
        setCloset("PLACARD");
        setPieces("PIÈCES");
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div class="flex flex-col justify-center items-center w-screen h-screen bg-orange-100 block">
      <div
        class="font-serif font-bold text-8xl"
        style={{ "font-family": "Abril-Fatface" }}
      >
        {closet()}
      </div>
      <div
        class="font-serif font-bold text-xs mt-2"
        style={{ "font-family": "Abril-Fatface" }}
      >
        {pieces()}
      </div>
    </div>
  );
}
