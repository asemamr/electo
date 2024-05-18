import { Children } from "react";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="mx-auto w-[1420px]">{children}</div>;
}
