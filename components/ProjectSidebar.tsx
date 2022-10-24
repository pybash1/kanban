import Image from "next/image";

export default function ProjectSidebar() {
  return (
    <aside className="border-r border-[#eaedf0] absolute h-screen w-72 top-0 left-24 -z-50">
      <h2 className="text-[#292938] text-xl font-bold px-3 py-[22px] border-b border-[#eaedf0]">
        Project Name
      </h2>
      <Image
        width={384}
        height={170}
        alt="project banner"
        src="https://cdn.discordapp.com/attachments/626764357505777667/1033772544467148990/unknown.png"
      />
      <div className="px-4 py-3 font-bold text-lg flex flex-row justify-between">
        <div className="flex flex-row items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.99896 15.1743C7.27229 15.1743 6.55229 14.9609 5.98562 14.5409L3.11896 12.4009C2.35896 11.8343 1.76562 10.6476 1.76562 9.70761V4.7476C1.76562 3.72094 2.51896 2.6276 3.48563 2.2676L6.81229 1.02094C7.47229 0.774271 8.51229 0.774271 9.17229 1.02094L12.499 2.2676C13.4656 2.6276 14.219 3.72094 14.219 4.7476V9.70094C14.219 10.6476 13.6256 11.8276 12.8656 12.3943L9.99896 14.5343C9.44563 14.9609 8.72563 15.1743 7.99896 15.1743ZM7.16563 1.96094L3.83896 3.2076C3.27229 3.42094 2.77229 4.14094 2.77229 4.75427V9.70761C2.77229 10.3409 3.21896 11.2276 3.71896 11.6009L6.58563 13.7409C7.35229 14.3143 8.64563 14.3143 9.41896 13.7409L12.2856 11.6009C12.7923 11.2209 13.2323 10.3409 13.2323 9.70761V4.7476C13.2323 4.14094 12.7323 3.42094 12.1656 3.20094L8.83896 1.95427C8.38563 1.79427 7.61229 1.79427 7.16563 1.96094Z"
              fill="#191925"
            />
            <path
              d="M7.71445 10.8295C7.62778 10.8295 7.53445 10.8161 7.44778 10.7828C7.15445 10.6695 6.96111 10.3961 6.96111 10.0828V9.02947H6.79445C6.29445 9.02947 6.11445 8.73614 6.05445 8.61614C6.00112 8.48281 5.90778 8.14947 6.23445 7.78281L7.86778 5.92281C8.07445 5.68947 8.40111 5.60281 8.69445 5.71614C8.98778 5.82947 9.18112 6.10281 9.18112 6.41614V7.46947H9.34778C9.84112 7.46947 10.0278 7.76281 10.0878 7.88281C10.1478 8.00281 10.2411 8.33614 9.91445 8.70947L8.28112 10.5695C8.12778 10.7361 7.92111 10.8295 7.71445 10.8295ZM7.34778 8.02281H7.46111C7.73445 8.02281 7.96111 8.24947 7.96111 8.52281V9.40947L8.78778 8.46947H8.67445C8.40112 8.46947 8.17445 8.24281 8.17445 7.96947V7.08281L7.34778 8.02281Z"
              fill="#191925"
            />
          </svg>
          &nbsp;&nbsp;
          <p>Level 1</p>
        </div>
        <div className="font-normal text-[#7F8995]">40%</div>
      </div>
      <div className=" bg-gray-200 rounded-full h-3 mx-6">
        <div
          className="bg-[url('/progress.png')] h-3 rounded-full"
          style={{ width: "40%" }}
        ></div>
      </div>
      <ul className="text-[#6c6f75] py-6 px-8">
        <li className="py-2 flex flex-row justify-between">
          Lorem
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.09003 3.04V6.155V8.96C4.09003 9.44 4.67003 9.68 5.01003 9.34L7.60003 6.75C8.01503 6.335 8.01503 5.66 7.60003 5.245L6.61503 4.26L5.01003 2.655C4.67003 2.32 4.09003 2.56 4.09003 3.04Z"
              fill="#6C6F75"
            />
          </svg>
        </li>
        <li className="py-2 flex flex-row justify-between">
          Ipsum
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.09003 3.04V6.155V8.96C4.09003 9.44 4.67003 9.68 5.01003 9.34L7.60003 6.75C8.01503 6.335 8.01503 5.66 7.60003 5.245L6.61503 4.26L5.01003 2.655C4.67003 2.32 4.09003 2.56 4.09003 3.04Z"
              fill="#6C6F75"
            />
          </svg>
        </li>
        <li className="py-2 flex flex-row justify-between">
          Dolor
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.09003 3.04V6.155V8.96C4.09003 9.44 4.67003 9.68 5.01003 9.34L7.60003 6.75C8.01503 6.335 8.01503 5.66 7.60003 5.245L6.61503 4.26L5.01003 2.655C4.67003 2.32 4.09003 2.56 4.09003 3.04Z"
              fill="#6C6F75"
            />
          </svg>
        </li>
        <li className="py-2 flex flex-row justify-between">
          Sit
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.09003 3.04V6.155V8.96C4.09003 9.44 4.67003 9.68 5.01003 9.34L7.60003 6.75C8.01503 6.335 8.01503 5.66 7.60003 5.245L6.61503 4.26L5.01003 2.655C4.67003 2.32 4.09003 2.56 4.09003 3.04Z"
              fill="#6C6F75"
            />
          </svg>
        </li>
        <li className="py-2 flex flex-row justify-between">
          Amet
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.09003 3.04V6.155V8.96C4.09003 9.44 4.67003 9.68 5.01003 9.34L7.60003 6.75C8.01503 6.335 8.01503 5.66 7.60003 5.245L6.61503 4.26L5.01003 2.655C4.67003 2.32 4.09003 2.56 4.09003 3.04Z"
              fill="#6C6F75"
            />
          </svg>
        </li>
        <li className="py-2 flex flex-row justify-between">
          Tempor
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.09003 3.04V6.155V8.96C4.09003 9.44 4.67003 9.68 5.01003 9.34L7.60003 6.75C8.01503 6.335 8.01503 5.66 7.60003 5.245L6.61503 4.26L5.01003 2.655C4.67003 2.32 4.09003 2.56 4.09003 3.04Z"
              fill="#6C6F75"
            />
          </svg>
        </li>
        <li className="py-2 flex flex-row justify-between">
          Magna
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.09003 3.04V6.155V8.96C4.09003 9.44 4.67003 9.68 5.01003 9.34L7.60003 6.75C8.01503 6.335 8.01503 5.66 7.60003 5.245L6.61503 4.26L5.01003 2.655C4.67003 2.32 4.09003 2.56 4.09003 3.04Z"
              fill="#6C6F75"
            />
          </svg>
        </li>
      </ul>
    </aside>
  );
}
