import { useState } from "react";
import Column from "./Column";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import AddCard from "./AddCard";

export default function Kanban() {
  const [todo, setTodo] = useState([
    {
      name: "UX Adjustments",
      description:
        "Make UI/UX revisions for the project management dashboard on Figma.",
      code: "FLYTE-1",
      tag: "Research",
      tasks: 0,
      totalTasks: 0,
      comments: 3,
      links: 0,
      date: "Oct 25",
      color: "#8478FE",
      done: false,
    },
    {
      name: "Moodboards",
      image:
        "https://cdn.discordapp.com/attachments/883044092030890014/1034480458525851648/unknown.png",
      code: "FLYTE-2",
      tag: "UI Design",
      tasks: 0,
      totalTasks: 0,
      comments: 2,
      links: 2,
      date: "Nov 23",
      color: "#2F6BFE",
      done: false,
    },
  ]);
  const [doing, setDoing] = useState([
    {
      name: "Dashboard Design",
      image:
        "https://cdn.discordapp.com/attachments/883044092030890014/1034396856945479721/unknown.png",
      code: "FLYTE-3",
      tag: "UI Design",
      tasks: 4,
      totalTasks: 8,
      comments: 5,
      links: 1,
      date: "Jun 20",
      color: "#2F6BFE",
      done: false,
    },
    {
      name: "Design System",
      description: "Create a consistent look and feel both on web and mobile",
      code: "FLYTE-4",
      tag: "UI Design",
      tasks: 4,
      totalTasks: 8,
      comments: 12,
      links: 0,
      date: "May 20",
      color: "#2F6BFE",
      done: false,
    },
  ]);
  const [done, setDone] = useState([
    {
      done: true,
      name: "Presentation",
      description:
        "Help business to clearly define their anuual e-commerce digital strategy by creating a high-level plan.",
      code: "FLYTE-5",
      tag: "Planning",
      tasks: 0,
      totalTasks: 0,
      comments: 11,
      links: 0,
      date: "",
      color: "#78C552",
    },
    {
      done: true,
      name: "Brainstorming",
      code: "FLYTE-6",
      tag: "Research",
      tasks: 0,
      totalTasks: 0,
      comments: 12,
      links: 0,
      date: "",
      color: "#8478FE",
    },
  ]);

  const getLastId = () => {
    let tasks = [...todo, ...doing, ...done];
    console.log("here");
    let codes: number[] = [];
    tasks.forEach((task) => {
      codes.push(parseInt(task.code.split("-")[1]));
    });

    return Math.max(...codes);
  };

  const handleDragEnd = (e: DragEndEvent) => {
    let todoCopy = [...todo];
    let doingCopy = [...doing];
    let doneCopy = [...done];
    if (e.over) {
      let cur = e.active.id;
      let curItem;
      todoCopy.forEach((todo_) => {
        if (todo_.code == cur) {
          curItem = todo_;
        }
      });
      doingCopy.forEach((doing_) => {
        if (doing_.code == cur) {
          curItem = doing_;
        }
      });
      doneCopy.forEach((done_) => {
        if (done_.code == cur) {
          curItem = done_;
        }
      });
      // @ts-ignore
      let ind = todoCopy.indexOf(curItem);
      // @ts-ignore
      let ind_ = doingCopy.indexOf(curItem);
      // @ts-ignore
      let ind__ = doneCopy.indexOf(curItem);
      if (ind !== -1) {
        todo.splice(ind, 1);
      } else if (ind_ !== -1) {
        doing.splice(ind_, 1);
      } else {
        done.splice(ind_, 1);
      }
      if (e.over.id == "Todo") {
        // @ts-ignore
        curItem.done = false;
        // @ts-ignore
        setTodo(todo.concat(curItem));
      } else if (e.over.id == "In Progress") {
        // @ts-ignore
        curItem.done = false;
        // @ts-ignore
        setDoing(doing.concat(curItem));
      } else {
        // @ts-ignore
        curItem.done = true;
        // @ts-ignore
        setDone(done.concat(curItem));
      }
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="w-full grid grid-cols-3 gap-4 h-full overflow-y-auto column pb-48">
        <div className="flex flex-col">
          <SortableContext items={todo}>
            <Column
              name="Todo"
              cards={todo}
              border="#111118"
              icon={
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="8.75"
                    cy="8.75"
                    r="8.25"
                    stroke="#A9B4C0"
                    stroke-linejoin="round"
                    stroke-dasharray="2 2"
                  />
                </svg>
              }
            />
          </SortableContext>
          <AddCard
            onClick={() => {
              setTodo(
                todo.concat([
                  {
                    name: "Lorem Ipsum",
                    description: "Lorem ipsum dolor sit amet tempor magna",
                    code: "FLYTE-" + (getLastId() + 1).toString(),
                    tag: "UI Design",
                    tasks: 69,
                    totalTasks: 420,
                    comments: 12,
                    links: 3,
                    done: false,
                    date: "Oct 26",
                    color: "#2F6BFE",
                  },
                ])
              );
            }}
          />
        </div>
        <div className="flex flex-col">
          <SortableContext items={doing}>
            <Column
              name="In Progress"
              cards={doing}
              border="#4734FE"
              icon={
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="20" height="20" fill="white" />
                  <circle
                    cx="10"
                    cy="10"
                    r="8.25"
                    stroke="#2F6BFE"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 16.25C11.6576 16.25 13.2473 15.5915 14.4194 14.4194C15.5915 13.2473 16.25 11.6576 16.25 10C16.25 8.3424 15.5915 6.75269 14.4194 5.58058C13.2473 4.40848 11.6576 3.75 10 3.75L10 10L10 16.25Z"
                    fill="#2F6BFE"
                  />
                </svg>
              }
            />
          </SortableContext>
          <AddCard
            onClick={() => {
              setDoing(
                doing.concat([
                  {
                    name: "Lorem Ipsum",
                    description: "Lorem ipsum dolor sit amet tempor magna",
                    code: "FLYTE-" + (getLastId() + 1).toString(),
                    tag: "UI Design",
                    tasks: 69,
                    totalTasks: 420,
                    comments: 12,
                    links: 3,
                    done: false,
                    date: "Oct 26",
                    color: "#2F6BFE",
                  },
                ])
              );
            }}
          />
        </div>
        <div className="flex flex-col">
          <SortableContext items={done}>
            <Column
              name="Done"
              cards={done}
              border="#78C552"
              icon={
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 1.66667C5.40833 1.66667 1.66667 5.40834 1.66667 10C1.66667 14.5917 5.40833 18.3333 10 18.3333C14.5917 18.3333 18.3333 14.5917 18.3333 10C18.3333 5.40834 14.5917 1.66667 10 1.66667ZM13.9833 8.08334L9.25833 12.8083C9.14167 12.925 8.98334 12.9917 8.81667 12.9917C8.65 12.9917 8.49167 12.925 8.375 12.8083L6.01667 10.45C5.775 10.2083 5.775 9.80834 6.01667 9.56667C6.25833 9.32501 6.65833 9.32501 6.9 9.56667L8.81667 11.4833L13.1 7.20001C13.3417 6.95834 13.7417 6.95834 13.9833 7.20001C14.225 7.44167 14.225 7.83334 13.9833 8.08334Z"
                    fill="#78C552"
                  />
                </svg>
              }
            />
          </SortableContext>
          <AddCard
            onClick={() => {
              setDone(
                done.concat([
                  {
                    name: "Lorem Ipsum",
                    description: "Lorem ipsum dolor sit amet tempor magna",
                    code: "FLYTE-" + (getLastId() + 1).toString(),
                    tag: "UI Design",
                    tasks: 69,
                    totalTasks: 420,
                    comments: 12,
                    links: 3,
                    done: true,
                    date: "",
                    color: "#2F6BFE",
                  },
                ])
              );
            }}
          />
        </div>
      </div>
    </DndContext>
  );
}
