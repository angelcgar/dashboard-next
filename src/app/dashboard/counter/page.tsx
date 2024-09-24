import { Metadata } from "next";

import { CartCounter } from "@/app/shopping-cart";

export const metadata: Metadata = {
  title: "Counter Page!",
  description: "Una simple descripcion de la pagina counter",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Prodcutos de carrito</span>

      <CartCounter value={20} />
    </div>
  );
}
