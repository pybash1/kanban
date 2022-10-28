import { ReactNode } from "react";
import AddCard from "./AddCard";
import Card from "./Card";
import { useDroppable } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import Sortable from "./Sortable";

interface Props {
  name: string;
  description?: string;
  image?: string;
  done?: boolean;
  tasks: number;
  comments: number;
  links: number;
  totalTasks?: number;
  code: string;
  tag: string;
  date: string;
  color: string;
}

export default function Column({
  name,
  cards,
  icon,
  border,
}: {
  name: string;
  cards: Props[];
  icon: ReactNode;
  border: string;
}) {
  const { isOver, setNodeRef } = useDroppable({
    id: name,
  });

  const style = {
    backgroundColor: isOver ? "#eeeeee" : undefined,
  };

  return (
    <Sortable id={name}>
      <div className="px-6 pt-8 pb-6" style={style} ref={setNodeRef}>
        <div
          className="flex flex-row justify-between border-b-[3px] pb-6 text-[#191925] rounded-b-sm"
          style={{ borderBottomColor: border }}
        >
          <div className="flex flex-row items-center gap-4">
            {icon}
            <h3 className="uppercase font-bold text-lg">{name}</h3>
            <div className="border border-[#EAEDF0] bg-[#F7F9FA] px-2.5 py-0.2 rounded-lg">
              {cards.length}
            </div>
          </div>
          <div className="flex fex-row items-center gap-3">
            <svg
              width="25"
              height="25"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 10.625H5C4.65833 10.625 4.375 10.3417 4.375 10C4.375 9.65833 4.65833 9.375 5 9.375H15C15.3417 9.375 15.625 9.65833 15.625 10C15.625 10.3417 15.3417 10.625 15 10.625Z"
                fill="#A9B4C0"
              />
              <path
                d="M10 15.625C9.65833 15.625 9.375 15.3417 9.375 15V5C9.375 4.65833 9.65833 4.375 10 4.375C10.3417 4.375 10.625 4.65833 10.625 5V15C10.625 15.3417 10.3417 15.625 10 15.625Z"
                fill="#A9B4C0"
              />
            </svg>
            <svg
              width="25"
              height="25"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 10C6 10.5304 5.78929 11.0391 5.41421 11.4142C5.03914 11.7893 4.53043 12 4 12C3.46957 12 2.96086 11.7893 2.58579 11.4142C2.21071 11.0391 2 10.5304 2 10C2 9.46957 2.21071 8.96086 2.58579 8.58579C2.96086 8.21071 3.46957 8 4 8C4.53043 8 5.03914 8.21071 5.41421 8.58579C5.78929 8.96086 6 9.46957 6 10ZM12 10C12 10.5304 11.7893 11.0391 11.4142 11.4142C11.0391 11.7893 10.5304 12 10 12C9.46957 12 8.96086 11.7893 8.58579 11.4142C8.21071 11.0391 8 10.5304 8 10C8 9.46957 8.21071 8.96086 8.58579 8.58579C8.96086 8.21071 9.46957 8 10 8C10.5304 8 11.0391 8.21071 11.4142 8.58579C11.7893 8.96086 12 9.46957 12 10ZM16 12C16.5304 12 17.0391 11.7893 17.4142 11.4142C17.7893 11.0391 18 10.5304 18 10C18 9.46957 17.7893 8.96086 17.4142 8.58579C17.0391 8.21071 16.5304 8 16 8C15.4696 8 14.9609 8.21071 14.5858 8.58579C14.2107 8.96086 14 9.46957 14 10C14 10.5304 14.2107 11.0391 14.5858 11.4142C14.9609 11.7893 15.4696 12 16 12Z"
                fill="#A9B4C0"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col pt-8 gap-4">
          {cards.map((card, ind) => (
            <Card
              name={card?.name}
              description={card?.description}
              image={card?.image}
              code={card?.code}
              tag={card?.tag}
              color={card?.color}
              tasks={card?.tasks}
              links={card?.links}
              comments={card?.comments}
              totalTasks={card?.totalTasks}
              date={card?.date}
              done={card?.done}
              key={ind}
            />
          ))}
          {/* <AddCard onClick={onClick} />  */}
        </div>
      </div>
    </Sortable>
  );
}
