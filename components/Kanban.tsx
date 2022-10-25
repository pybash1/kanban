import Column from "./Column";

export default function Kanban() {
  return (
    <div className="w-full grid grid-cols-3 gap-4 h-full overflow-y-auto column pb-48">
      <Column
        name="Todo"
        cards={2}
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
      <Column
        name="In Progress"
        cards={8}
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
      <Column
        name="Done"
        cards={2}
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
    </div>
  );
}
