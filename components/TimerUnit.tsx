import { AnimatePresence, motion as m } from "framer-motion";
export default function TimerUnit({
  amount,
  type,
}: {
  amount: number;
  type: string;
}) {
  const arr = amount.toString().split("");
  const editedArr = arr.length !== 2 ? ["0", ...arr] : arr;
  let firstDigit = arr.length !== 2 ? "0" : arr[0];
  let secondDigit = arr.length !== 2 ? arr : arr[1];
  return (
    <div className=" bg-white text-lg rounded-md w-16 h-20 flex flex-col items-center justify-center">
      <div className="relative h-1/2 w-10 top-1">
        <AnimatePresence>
          {editedArr.map((item, i) => (
            <m.span
              key={i + item}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              className={`text-3xl absolute w-5 flex items-center justify-center  ${
                i === 0 ? "left-0" : "right-0"
              }`}
            >
              {item}
            </m.span>
          ))}
        </AnimatePresence>
      </div>

      <p className="text-[10px] font-bold uppercase">{type}</p>
    </div>
  );
}
