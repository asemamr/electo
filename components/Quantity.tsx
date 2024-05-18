import { useRouter, useSearchParams } from "next/navigation";

export default function Quantity() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const quantity = Number(searchParams.get("quantity"))|| 1;
  const selectedImage = Number(searchParams.get("image"));
  function adjustQuantity(incOrDec: "Inc" | "Dec") {
    let desiredQuantity;
    if (incOrDec === "Inc") {
      if (!(quantity >= 10)) {
        desiredQuantity = quantity + 1;
      }
    } else if (incOrDec === "Dec") {
      if (!(quantity <= 1)) {
        desiredQuantity = quantity - 1;
      }
    }
    if (desiredQuantity !== undefined) {
      router.replace(`?image=${selectedImage}&quantity=${desiredQuantity}`);
    }
  }
  function adjustQuantityInput(value: number) {
    let desiredQuantity;
    if (value > 10) {
      desiredQuantity = 10;
    }
    if (value < 1) {
      desiredQuantity = 1;
    }
    if (value <= 10 && value >= 1) {
      desiredQuantity = value;
    }
    if (desiredQuantity !== undefined) {
      router.replace(`?image=${selectedImage}&quantity=${desiredQuantity}`);
    }
  }
  return (
    <div className=" h-12 w-32 flex relative">
      <input
        type="number"
        max={10}
        min={1}
        value={quantity}
        onChange={(e) => adjustQuantityInput(+e.currentTarget.value)}
        className="bg-gray-200 rounded-lg h-full w-full outline-none border-none text-center text-xl"
      />
      <button
        className="absolute text-2xl left-3 top-1/2 -translate-y-1/2"
        onClick={() => adjustQuantity("Dec")}
      >
        -
      </button>
      <button
        className="absolute text-2xl right-3 top-1/2 -translate-y-1/2"
        onClick={() => adjustQuantity("Inc")}
      >
        +
      </button>
    </div>
  );
}
