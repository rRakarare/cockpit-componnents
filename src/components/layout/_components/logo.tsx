import { cn } from "@/lib/utils";

function CockpitLogo({
    className

} : {
    className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 400 400"

        className={cn("fill-foreground", className)}
    >
      <g>
        <path d="M306.97 0c0 62.02-31.01 93.03-93.03 93.03 62.02 0 93.03 31.01 93.03 93.03 0-62.02 31.01-93.03 93.03-93.03-62.02 0-93.03-31.01-93.03-93.03z"></path>
        <path d="M175.37 136.97H263.03V224.63H175.37z"></path>
        <path d="M87.66 136.97L0 136.97 0 224.63 0 312.34 0 400 87.66 400 87.66 312.34 175.37 312.34 175.37 224.63 87.66 224.63 87.66 136.97z"></path>
        <path d="M175.37 312.34H263.03V400H175.37z"></path>
      </g>
    </svg>
  );
}

export default CockpitLogo;
