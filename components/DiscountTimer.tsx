import Image from "next/image";
import image from "../public/timer-img.jpg";
import Button from "./Button";
import Timer from "./Timer";

export default function DiscountTimer() {
  return (
    <div className="w-full overflow-hidden rounded-xl flex mb-10">
      <div className="relative w-1/2 flex group/image-product">
        <Image src={image} alt="background of an iphone" />
        <span className="block absolute bg-white w-1/2 h-full left-0 -top-full group-hover/image-product:top-0 transition-all opacity-10 duration-300"></span>
        <span className="block absolute bg-white w-1/2 h-full right-0 -bottom-full group-hover/image-product:bottom-0 transition-all opacity-10 group-hover/image-product:delay-300 duration-300"></span>
      </div>
      <div className="w-1/2 bg-green-open flex flex-col justify-center pl-24 gap-5">
        <h6 className="text-sm font-bold">ULTIMATE APPLE ACCESSORY.</h6>
        <h2 className="text-5xl ">60% Discount</h2>
        <p>
          Find the latest and greatest gadgets to enhance your electronic
          devices.
        </p>
        <p>
          <span className="font-semibold">Hurry up!</span> Deals end in:
        </p>
        <Timer />
        <Button color="black" content="Shop now" />
      </div>
    </div>
  );
}
