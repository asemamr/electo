import { SlArrowRight } from "react-icons/sl";

type ButtonProps = {
  color: "black" | "green";
  content: string;
  arrow?: boolean;
  icon?: any
  disabled?: boolean
};

export default function Button({ color, content, arrow , icon, disabled=false}: ButtonProps) {
  let colorOption =
    color === "black"
      ? "bg-black text-white"
      : "bg-green-open text-black text-sm font-semibold";

  let effectOption =
    color === "black" ? "bg-gradient-linear-white" : "bg-gradient-linear-black";

  return (
    <button
    disabled={disabled}
      className={`${colorOption} ${
        !arrow && "text-sm font-semibold"
      } group/button px-8 py-3 text-lg rounded-full overflow-hidden flex items-center justify-between gap-2 font-base self-start mt-4 relative button disabled:bg-gray-500 disabled:opacity-50 `}
    >
      {!disabled ? content : "Out of Stock"} {arrow && <SlArrowRight />}
      {disabled || <span
        className={`${effectOption} block absolute  w-full h-full -right-full -skew-x-[20deg] group-hover/button:transition-all group-hover/button:ease-in-out group-hover/button:right-full group-hover/button:duration-[1.5s]`}
      ></span>}
      <span>{icon}</span>
    </button>
  );
}