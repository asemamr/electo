import { ProductType } from "@/lib/types";

export default function ProductDescription({ html }: { html: string }) {
  return (
    <div className="border py-4 px-6 rounded-2xl mt-10 ">
      <h2 className="text-xl font-bold mb-4">Description</h2>
      <div dangerouslySetInnerHTML={{ __html: html as string }} />
    </div>
  );
}
