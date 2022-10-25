import Breadcrumb from "./Breadcrumb";
import Tag from "./Tag";

export default function Header() {
  return (
    <div className="border-b border-[#] py-[0.9rem] px-[1.6rem] flex flex-row justify-between">
      <div className="flex flex-row items-center">
        <Breadcrumb base="Projects" crumbs={["Cloud Platform"]} />
        <Tag text="FLYTE" />
      </div>
      <div className="flex flex-row items-center gap-4">
        <div className="relative">
          <label htmlFor="search" className="sr-only">
            {" "}
            Search{" "}
          </label>

          <span className="pointer-events-none absolute inset-y-0 left-0 grid w-10 place-content-center text-gray-500">
            <svg
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 14L11.0093 11.004M12.6667 7C12.6667 8.50289 12.0696 9.94423 11.0069 11.0069C9.94423 12.0696 8.50289 12.6667 7 12.6667C5.49711 12.6667 4.05577 12.0696 2.99306 11.0069C1.93036 9.94423 1.33333 8.50289 1.33333 7C1.33333 5.49711 1.93036 4.05577 2.99306 2.99306C4.05577 1.93035 5.49711 1.33333 7 1.33333C8.50289 1.33333 9.94423 1.93035 11.0069 2.99306C12.0696 4.05577 12.6667 5.49711 12.6667 7V7Z"
                stroke="#94989E"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </span>

          <input
            type="text"
            id="search"
            placeholder="Search"
            className="w-full rounded-lg bg-[#efefef] pr-3 py-2.5 pl-9 text-[#5C6066] placeholder-[#5C6066]"
          />
        </div>
        <button className="border border-[#DFE1E4] p-3 rounded-lg">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_1269)">
              <path
                d="M16 3C16 2.46957 15.7893 1.96086 15.4142 1.58579C15.0391 1.21071 14.5304 1 14 1H2C1.46957 1 0.960859 1.21071 0.585786 1.58579C0.210714 1.96086 0 2.46957 0 3L0 13C0 13.5304 0.210714 14.0391 0.585786 14.4142C0.960859 14.7893 1.46957 15 2 15H14C14.5304 15 15.0391 14.7893 15.4142 14.4142C15.7893 14.0391 16 13.5304 16 13V3ZM11 2V14H2C1.73478 14 1.48043 13.8946 1.29289 13.7071C1.10536 13.5196 1 13.2652 1 13V3C1 2.73478 1.10536 2.48043 1.29289 2.29289C1.48043 2.10536 1.73478 2 2 2H11ZM12 2H14C14.2652 2 14.5196 2.10536 14.7071 2.29289C14.8946 2.48043 15 2.73478 15 3V13C15 13.2652 14.8946 13.5196 14.7071 13.7071C14.5196 13.8946 14.2652 14 14 14H12V2Z"
                fill="#5C6066"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_1269">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  );
}
