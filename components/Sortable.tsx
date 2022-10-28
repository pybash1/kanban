import { ReactNode } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function Sortable({
  children,
  id,
}: {
  children: ReactNode;
  id: string;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return <div ref={setNodeRef} {...attributes} {...listeners} style={style}>{children}</div>;
}
