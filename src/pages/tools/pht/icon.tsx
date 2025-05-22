export function PuzzleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 14 14">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}>
        <path d="M12.5.5h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1"></path>
        <path d="M7 .5v2.132a1.5 1.5 0 1 0 0 2.236v4.264a1.5 1.5 0 1 1 0 2.236V13.5"></path>
        <path d="M.5 7h2.132a1.5 1.5 0 1 0 2.236 0h4.264a1.5 1.5 0 1 1 2.236 0H13.5"></path>
      </g>
    </svg>
  );
}
