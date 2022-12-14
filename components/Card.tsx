import AvatarGroup from "./AvatarGroup";
import { useDraggable } from "@dnd-kit/core";

export default function Card({
  name,
  description,
  image,
  code,
  tag,
  comments = 0,
  tasks = 0,
  totalTasks = 0,
  links = 0,
  date,
  done = false,
  color,
}: {
  name: string;
  description?: string;
  image?: string;
  code: string;
  tag: string;
  comments?: number;
  tasks?: number;
  totalTasks?: number;
  links?: number;
  date: string;
  done?: boolean;
  color: string;
}) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: code,
  });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return (
    <div className="border border-[#EAEDF0] rounded-lg bg-white" style={style} ref={setNodeRef} {...listeners} {...attributes}>
      <div className="text-[#7F8995] text-sm px-4 pt-4">{code}</div>
      <div className="text-[#111118] text-xl font-bold pt-2 pb-3 px-4">
        {name}
      </div>
      <div className="px-4 text-[#7F8995]">
        {description || null}
        {image ? <img src={image} alt="image" /> : null}
      </div>
      <div className="pt-3 px-4 flex flex-row justify-between">
        <div
          className={`bg-[${color}]/10 px-2 py-1 rounded-md text-[${color}] font-bold`}
        >
          {/* <div className={`bg-[#78C552]/10 px-2 py-1 rounded-md text-[#78C552] font-bold`}> */}
          {tag}
        </div>
        <AvatarGroup
          images={[
            "https://cdn.discordapp.com/attachments/883044092030890014/1034403722547183656/unknown.png",
            "https://cdn.discordapp.com/attachments/883044092030890014/1034403705107263498/unknown.png",
            "https://cdn.discordapp.com/attachments/883044092030890014/1034399242430718052/unknown.png",
          ]}
          alts={["person 1", "person 2", "person 3"]}
        />
      </div>
      <div className="flex flex-row justify-between p-4 border-t border-[#EAEDF0] mt-4">
        <div className="flex flex-row items-center gap-2">
          {comments > 0 ? (
            <div className="flex flex-row items-center gap-2 text-[#98A5B3]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.00001 15.2067C7.54001 15.2067 7.10668 14.9733 6.80001 14.5667L5.80001 13.2333C5.78001 13.2067 5.70001 13.1733 5.66668 13.1667H5.33334C2.55334 13.1667 0.833344 12.4133 0.833344 8.66668V5.33334C0.833344 2.38668 2.38668 0.833344 5.33334 0.833344H10.6667C13.6133 0.833344 15.1667 2.38668 15.1667 5.33334V8.66668C15.1667 11.6133 13.6133 13.1667 10.6667 13.1667H10.3333C10.28 13.1667 10.2333 13.1933 10.2 13.2333L9.20001 14.5667C8.89334 14.9733 8.46001 15.2067 8.00001 15.2067ZM5.33334 1.83334C2.94668 1.83334 1.83334 2.94668 1.83334 5.33334V8.66668C1.83334 11.68 2.86668 12.1667 5.33334 12.1667H5.66668C6.00668 12.1667 6.39334 12.36 6.60001 12.6333L7.60001 13.9667C7.83334 14.2733 8.16668 14.2733 8.40001 13.9667L9.40001 12.6333C9.62001 12.34 9.96668 12.1667 10.3333 12.1667H10.6667C13.0533 12.1667 14.1667 11.0533 14.1667 8.66668V5.33334C14.1667 2.94668 13.0533 1.83334 10.6667 1.83334H5.33334Z"
                  fill="#98A5B3"
                />
                <path
                  d="M8.00001 7.99999C7.62668 7.99999 7.33334 7.69999 7.33334 7.33332C7.33334 6.96666 7.63334 6.66666 8.00001 6.66666C8.36668 6.66666 8.66668 6.96666 8.66668 7.33332C8.66668 7.69999 8.37334 7.99999 8.00001 7.99999Z"
                  fill="#98A5B3"
                />
                <path
                  d="M10.6667 7.99999C10.2933 7.99999 10 7.69999 10 7.33332C10 6.96666 10.3 6.66666 10.6667 6.66666C11.0333 6.66666 11.3333 6.96666 11.3333 7.33332C11.3333 7.69999 11.04 7.99999 10.6667 7.99999Z"
                  fill="#98A5B3"
                />
                <path
                  d="M5.33332 7.99999C4.95999 7.99999 4.66666 7.69999 4.66666 7.33332C4.66666 6.96666 4.96666 6.66666 5.33332 6.66666C5.69999 6.66666 5.99999 6.96666 5.99999 7.33332C5.99999 7.69999 5.70666 7.99999 5.33332 7.99999Z"
                  fill="#98A5B3"
                />
              </svg>
              {comments}
            </div>
          ) : null}
          {tasks > 0 ? (
            <div className="flex flex-row items-center gap-2 text-[#98A5B3]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.00001 15.1667C4.04668 15.1667 0.833344 11.9533 0.833344 8.00001C0.833344 4.04668 4.04668 0.833344 8.00001 0.833344C11.9533 0.833344 15.1667 4.04668 15.1667 8.00001C15.1667 11.9533 11.9533 15.1667 8.00001 15.1667ZM8.00001 1.83334C4.60001 1.83334 1.83334 4.60001 1.83334 8.00001C1.83334 11.4 4.60001 14.1667 8.00001 14.1667C11.4 14.1667 14.1667 11.4 14.1667 8.00001C14.1667 4.60001 11.4 1.83334 8.00001 1.83334Z"
                  fill="#98A5B3"
                />
                <path
                  d="M7.05334 10.3867C6.92 10.3867 6.79334 10.3333 6.7 10.24L4.81333 8.35334C4.62 8.16 4.62 7.84 4.81333 7.64667C5.00667 7.45334 5.32667 7.45334 5.52 7.64667L7.05334 9.18L10.48 5.75334C10.6733 5.56 10.9933 5.56 11.1867 5.75334C11.38 5.94667 11.38 6.26667 11.1867 6.46L7.40667 10.24C7.31334 10.3333 7.18667 10.3867 7.05334 10.3867Z"
                  fill="#98A5B3"
                />
              </svg>
              {tasks}/{totalTasks}
            </div>
          ) : null}
          {links > 0 ? (
            <div className="flex flex-row items-center gap-2 text-[#98A5B3]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.2733 12.3933C10.0067 12.3933 9.78667 12.1733 9.78667 11.9067C9.78667 11.64 10.0067 11.42 10.2733 11.42C12.1533 11.42 13.6867 9.88668 13.6867 8.00668C13.6867 6.12668 12.1533 4.59334 10.2733 4.59334C8.39334 4.59334 6.86001 6.12668 6.86001 8.00668C6.86001 8.27334 6.64001 8.49334 6.37334 8.49334C6.10667 8.49334 5.88667 8.27334 5.88667 8.00668C5.88667 5.58668 7.85334 3.61334 10.28 3.61334C12.7067 3.61334 14.6667 5.58001 14.6667 8.00001C14.6667 10.42 12.7 12.3933 10.2733 12.3933Z"
                  fill="#98A5B3"
                />
                <path
                  d="M5.72666 3.60666C5.99333 3.60666 6.21333 3.82666 6.21333 4.09333C6.21333 4.35999 5.99333 4.57999 5.72666 4.57999C3.84666 4.57999 2.31333 6.11333 2.31333 7.99333C2.31333 9.87333 3.84666 11.4067 5.72666 11.4067C7.60666 11.4067 9.14 9.87333 9.14 7.99333C9.14 7.72666 9.35999 7.50666 9.62666 7.50666C9.89333 7.50666 10.1133 7.72666 10.1133 7.99333C10.1133 10.4133 8.14666 12.3867 5.72 12.3867C3.29333 12.3867 1.33333 10.42 1.33333 7.99999C1.33333 5.57999 3.29999 3.60666 5.72666 3.60666Z"
                  fill="#98A5B3"
                />
              </svg>
              {links}
            </div>
          ) : null}
        </div>
        <div className="flex flex-row items-center gap-2">
          {done ? (
            <div className="flex flex-row items-center gap-2 text-[#78C552]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 1.33334C4.32667 1.33334 1.33334 4.32668 1.33334 8.00001C1.33334 11.6733 4.32667 14.6667 8 14.6667C11.6733 14.6667 14.6667 11.6733 14.6667 8.00001C14.6667 4.32668 11.6733 1.33334 8 1.33334ZM11.1867 6.46668L7.40667 10.2467C7.31334 10.34 7.18667 10.3933 7.05334 10.3933C6.92 10.3933 6.79334 10.34 6.7 10.2467L4.81334 8.36001C4.62 8.16668 4.62 7.84668 4.81334 7.65334C5.00667 7.46001 5.32667 7.46001 5.52 7.65334L7.05334 9.18668L10.48 5.76001C10.6733 5.56668 10.9933 5.56668 11.1867 5.76001C11.38 5.95334 11.38 6.26668 11.1867 6.46668Z"
                  fill="#78C552"
                />
              </svg>
              Done
            </div>
          ) : (
            <div className="flex flex-row items-center gap-2 text-[#98A5B3]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.33333 3.83334C5.05999 3.83334 4.83333 3.60668 4.83333 3.33334V1.33334C4.83333 1.06001 5.05999 0.833344 5.33333 0.833344C5.60666 0.833344 5.83333 1.06001 5.83333 1.33334V3.33334C5.83333 3.60668 5.60666 3.83334 5.33333 3.83334Z"
                  fill="#98A5B3"
                />
                <path
                  d="M10.6667 3.83334C10.3933 3.83334 10.1667 3.60668 10.1667 3.33334V1.33334C10.1667 1.06001 10.3933 0.833344 10.6667 0.833344C10.94 0.833344 11.1667 1.06001 11.1667 1.33334V3.33334C11.1667 3.60668 10.94 3.83334 10.6667 3.83334Z"
                  fill="#98A5B3"
                />
                <path
                  d="M5.66667 9.66667C5.58 9.66667 5.49333 9.64668 5.41333 9.61335C5.32667 9.58001 5.26 9.53333 5.19333 9.47333C5.07333 9.34667 5 9.18 5 9C5 8.91334 5.02 8.82667 5.05333 8.74667C5.08667 8.66667 5.13333 8.59334 5.19333 8.52668C5.26 8.46668 5.32667 8.42 5.41333 8.38666C5.65333 8.28666 5.95333 8.34001 6.14 8.52668C6.26 8.65334 6.33333 8.82667 6.33333 9C6.33333 9.04 6.32667 9.08668 6.32 9.13335C6.31333 9.17335 6.3 9.21334 6.28 9.25334C6.26667 9.29334 6.24667 9.33334 6.22 9.37334C6.2 9.40667 6.16667 9.44 6.14 9.47333C6.01333 9.59333 5.84 9.66667 5.66667 9.66667Z"
                  fill="#98A5B3"
                />
                <path
                  d="M7.99999 9.66667C7.91333 9.66667 7.82666 9.64668 7.74666 9.61335C7.65999 9.58002 7.59333 9.53333 7.52666 9.47333C7.40666 9.34667 7.33333 9.18001 7.33333 9.00001C7.33333 8.91334 7.35333 8.82667 7.38666 8.74667C7.42 8.66667 7.46666 8.59335 7.52666 8.52668C7.59333 8.46668 7.65999 8.42 7.74666 8.38666C7.98666 8.28 8.28666 8.34001 8.47333 8.52668C8.59333 8.65335 8.66666 8.82667 8.66666 9.00001C8.66666 9.04001 8.65999 9.08668 8.65333 9.13335C8.64666 9.17335 8.63333 9.21334 8.61333 9.25334C8.59999 9.29334 8.58 9.33334 8.55333 9.37334C8.53333 9.40667 8.49999 9.44 8.47333 9.47333C8.34666 9.59333 8.17333 9.66667 7.99999 9.66667Z"
                  fill="#98A5B3"
                />
                <path
                  d="M10.3333 9.66667C10.2467 9.66667 10.16 9.64668 10.08 9.61335C9.99334 9.58002 9.92667 9.53333 9.86001 9.47333C9.83334 9.44 9.80667 9.40667 9.78 9.37334C9.75334 9.33334 9.73334 9.29334 9.72001 9.25334C9.70001 9.21334 9.68667 9.17335 9.68001 9.13335C9.67334 9.08668 9.66667 9.04001 9.66667 9.00001C9.66667 8.82667 9.74001 8.65335 9.86001 8.52668C9.92667 8.46668 9.99334 8.42 10.08 8.38666C10.3267 8.28 10.62 8.34001 10.8067 8.52668C10.9267 8.65335 11 8.82667 11 9.00001C11 9.04001 10.9933 9.08668 10.9867 9.13335C10.98 9.17335 10.9667 9.21334 10.9467 9.25334C10.9333 9.29334 10.9133 9.33334 10.8867 9.37334C10.8667 9.40667 10.8333 9.44 10.8067 9.47333C10.68 9.59333 10.5067 9.66667 10.3333 9.66667Z"
                  fill="#98A5B3"
                />
                <path
                  d="M5.66667 12C5.58 12 5.49333 11.98 5.41333 11.9467C5.33333 11.9134 5.26 11.8667 5.19333 11.8067C5.07333 11.68 5 11.5067 5 11.3333C5 11.2467 5.02 11.16 5.05333 11.08C5.08667 10.9933 5.13333 10.92 5.19333 10.86C5.44 10.6134 5.89333 10.6134 6.14 10.86C6.26 10.9867 6.33333 11.16 6.33333 11.3333C6.33333 11.5067 6.26 11.68 6.14 11.8067C6.01333 11.9267 5.84 12 5.66667 12Z"
                  fill="#98A5B3"
                />
                <path
                  d="M7.99999 12C7.82666 12 7.65333 11.9267 7.52666 11.8067C7.40666 11.68 7.33333 11.5067 7.33333 11.3333C7.33333 11.2467 7.35333 11.16 7.38666 11.08C7.42 10.9933 7.46666 10.92 7.52666 10.86C7.77333 10.6134 8.22666 10.6134 8.47333 10.86C8.53333 10.92 8.57999 10.9933 8.61333 11.08C8.64666 11.16 8.66666 11.2467 8.66666 11.3333C8.66666 11.5067 8.59333 11.68 8.47333 11.8067C8.34666 11.9267 8.17333 12 7.99999 12Z"
                  fill="#98A5B3"
                />
                <path
                  d="M10.3333 12C10.16 12 9.98667 11.9267 9.86001 11.8067C9.80001 11.7467 9.75334 11.6734 9.72001 11.5867C9.68667 11.5067 9.66667 11.42 9.66667 11.3334C9.66667 11.2467 9.68667 11.16 9.72001 11.08C9.75334 10.9934 9.80001 10.92 9.86001 10.86C10.0133 10.7067 10.2467 10.6334 10.46 10.68C10.5067 10.6867 10.5467 10.7 10.5867 10.72C10.6267 10.7334 10.6667 10.7534 10.7067 10.78C10.74 10.8 10.7733 10.8334 10.8067 10.86C10.9267 10.9867 11 11.16 11 11.3334C11 11.5067 10.9267 11.68 10.8067 11.8067C10.68 11.9267 10.5067 12 10.3333 12Z"
                  fill="#98A5B3"
                />
                <path
                  d="M13.6667 6.55997H2.33333C2.05999 6.55997 1.83333 6.3333 1.83333 6.05997C1.83333 5.78663 2.05999 5.55997 2.33333 5.55997H13.6667C13.94 5.55997 14.1667 5.78663 14.1667 6.05997C14.1667 6.3333 13.94 6.55997 13.6667 6.55997Z"
                  fill="#98A5B3"
                />
                <path
                  d="M10.6667 15.1667H5.33333C2.9 15.1667 1.5 13.7667 1.5 11.3333V5.66668C1.5 3.23334 2.9 1.83334 5.33333 1.83334H10.6667C13.1 1.83334 14.5 3.23334 14.5 5.66668V11.3333C14.5 13.7667 13.1 15.1667 10.6667 15.1667ZM5.33333 2.83334C3.42667 2.83334 2.5 3.76001 2.5 5.66668V11.3333C2.5 13.24 3.42667 14.1667 5.33333 14.1667H10.6667C12.5733 14.1667 13.5 13.24 13.5 11.3333V5.66668C13.5 3.76001 12.5733 2.83334 10.6667 2.83334H5.33333Z"
                  fill="#98A5B3"
                />
              </svg>
              {date}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
