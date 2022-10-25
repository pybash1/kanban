export default function Breadcrumb({
  base,
  crumbs,
}: {
  base: string;
  crumbs: string[];
}) {
  return (
    <nav aria-label="Breadcrumb">
      <ol
        role="list"
        className="flex items-center gap-1 text-lg text-[#6C6F75]"
      >
        <li>
          <a href="#" className="block transition text-[#282A2F] font-medium">
            {base}
          </a>
        </li>

        {crumbs.map((crumb) => (
          <>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </li>

            <li>
              <a
                href="#"
                className="block transition"
              >
                {crumb}
              </a>
            </li>
          </>
        ))}
      </ol>
    </nav>
  );
}
