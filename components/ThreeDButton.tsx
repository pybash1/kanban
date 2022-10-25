import { ReactNode } from "react";

export default function ThreeDButton({ children, icon }: {children?: ReactNode, icon?: ReactNode}) {
    return (
        <button className="border-2 border-[#DFE1E4] font-normal py-1 px-3 border-b-4 rounded-lg text-[#6C6F75] active:translate-y-1 active:border-b-2 flex flex-row items-center">
          {icon}
          {children}
        </button>
    )
}