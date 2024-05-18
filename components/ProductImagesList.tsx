import { Images } from "@/lib/types";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import {motion as m} from "framer-motion"

export default function ProductImagesList({
  images,
  selectedImage,
}: {
  images: Images;
  selectedImage: number;
}) {
  const router = useRouter();
  const searchParams = useSearchParams()
  const quantity = searchParams.get("quantity") || 1;
  return (
    <div>
      {images.map((image, i) => (
        <div className="relative" key={image.id}>
          <m.button
            onClick={() => router.replace(`?image=${i}&quantity=${quantity}`, { scroll: false })}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            key={i}
            style={{ transformOrigin: "center" }}
            className={`origin-center   relative  `}
          >
            {selectedImage == i && (
              <m.span
                layoutId="selected"
                className="w-full h-full bg-transparent z-10 absolute left-0 top-0 border-2 border-blue-600 rounded-lg"
              ></m.span>
            )}
            <Image
              src={image.url}
              key={image.id}
              alt={image.id}
              width={90}
              height={90}
              className="relative -z-0 rounded-lg h-auto"
            />
          </m.button>
        </div>
      ))}
    </div>
  );
}
