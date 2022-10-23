import { ReactNode } from "react";

export default function SidebarItem({
  icon,
  tooltip,
  active = false,
}: {
  icon: ReactNode;
  tooltip: string;
  active?: boolean;
}) {
  return (
    <>
      <div
        className={
          active
            ? "relative flex items-center justify-center h-12 w-12 mt-3 mb-3 mx-auto bg-[#f6f5fd] rounded-lg group border-[#533be5] border-2  "
            : "relative flex items-center justify-center h-12 w-12 mt-3 mb-3 mx-auto bg-[#f6f5fd] rounded-lg group"
        }
      >
        {icon}
        <span className="absolute w-auto p-2 m-2 min-w-max left-14 rounded-md text-[#533be5] bg-[#f6f5fd] text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">
          {tooltip}
        </span>
      </div>
      {active ? (
        <span className="absolute left-0 w-[4px] h-[40px] bg-[#533be5] rounded-[0_8px_8px_0]"></span>
      ) : null}
    </>
  );
}
