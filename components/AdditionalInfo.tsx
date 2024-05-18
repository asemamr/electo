import ship from "@/public/ship.svg";
import check from "@/public/check.svg";
import packageIcon from "@/public/packageIcon.svg";
import Image from "next/image";
import { PaymentsLogos } from "@/CONSTS/CONSTS";
export default function AdditionalInfo() {
  return (
    <div>
      <div className="flex gap-x-4 mt-5">
        <div className="border rounded-md flex justify-center items-center flex-col py-10 px-8 gap-y-4 hover:border-blue-400 transition-all hover:shadow-md duration-500">
          <Image src={ship} width={30} height={30} alt="ship" />
          <p className="text-center text-sm">
            Estimate delivery times:{" "}
            <span className="font-bold">12-26 days </span>
            <br /> (International),<span className="font-bold">
              3-6 days
            </span>{" "}
            (United States).
          </p>
        </div>
        <div className="border rounded-md flex justify-center items-center flex-col py-10 px-8 gap-y-4 hover:border-blue-400 transition-all hover:shadow-md duration-500">
          <Image src={packageIcon} width={30} height={30} alt="package" className="w-[30px] h-[30px]"/> 
          <p className="text-center text-sm">
            Return within <span className="font-bold">30 days </span> of
            purchase. Duties <br /> & taxes are non-refundable
          </p>
        </div>
      </div>
      <div className="mt-7">
        <div className="flex gap-x-2 ">
          <div className="flex gap-x-3 items-center mr-8">
            <Image src={check} alt="check mark" width={20} height={20} />
            <h2 className="text-sm font-semibold">
              Guarantee Safe <br />
              Checkout
            </h2>
          </div>
          {PaymentsLogos.map((image, key) => (
            <Image
              src={image}
              alt="payment logo"
              key={key}
              width={50}
              height={30}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
