import { cn } from "@/lib-v2/utils";

function CockpitLogoBackGround({ className }: { className?: string }) {
  // const path = document.getElementById("myPath") as unknown as SVGPathElement;
  // const length = path?.getTotalLength();

  // console.log("Path length: ", length);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 766 766"
      className={cn("fill-none", className)}
    >
      <defs>
        <filter id="blurFilter" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
        </filter>
        
      </defs>
      <path
        className="stroke-foreground/30 [stroke-dasharray:2,4]  [stroke-dashoffset:0]"
        d="M586.291 34.373c0 94.891-47.445 142.336-142.336 142.336 94.891 0 142.336 47.445 142.336 142.336 0-94.891 47.445-142.336 142.336-142.336-94.891 0-142.336-47.445-142.336-142.336z"
      ></path>
      <g className="animate-blink2">
        <path
          style={{ strokeWidth: "2px" }}
          filter="url(#blurFilter)"
          className="stroke-foreground [stroke-dasharray:100,824.175] animate-move  [stroke-dashoffset:0]"
          d="M586.291 34.373c0 94.891-47.445 142.336-142.336 142.336 94.891 0 142.336 47.445 142.336 142.336 0-94.891 47.445-142.336 142.336-142.336-94.891 0-142.336-47.445-142.336-142.336z"
        ></path>
      </g>
      <path
        id="myPath"
        className="stroke-foreground/30 [stroke-dasharray:2,4]"
        d="M386.687 393.189v101.27c0 9.318 7.558 16.876 16.876 16.876h101.271c9.379 0 16.876 7.559 16.876 16.876v101.271a16.84 16.84 0 01-16.876 16.876H403.563c-9.318 0-16.876-7.558-16.876-16.876V528.211c0-9.317-7.497-16.876-16.876-16.876h-101.27c-9.318 0-16.876 7.559-16.876 16.876v101.271a16.84 16.84 0 01-16.876 16.876H133.503c-9.318 0-16.876-7.558-16.876-16.876V258.136c0-9.318 7.558-16.876 16.876-16.876h101.27a16.84 16.84 0 0116.876 16.876v101.27c0 9.318 7.559 16.876 16.876 16.876h101.271a16.84 16.84 0 0016.876-16.876v-101.27c0-9.318 7.558-16.876 16.876-16.876h101.27a16.84 16.84 0 0116.876 16.876v101.27a16.84 16.84 0 01-16.876 16.876h-101.27c-9.318 0-16.876 7.558-16.876 16.876l.015.031z"
      ></path>
      <g className="animate-blink">
        <path
          style={{ strokeWidth: "2px" }}
          id="myPath"
          filter="url(#blurFilter)"
          className="stroke-foreground [stroke-dasharray:100,2214.741] animate-move2  [stroke-dashoffset:0]"
          d="M386.687 393.189v101.27c0 9.318 7.558 16.876 16.876 16.876h101.271c9.379 0 16.876 7.559 16.876 16.876v101.271a16.84 16.84 0 01-16.876 16.876H403.563c-9.318 0-16.876-7.558-16.876-16.876V528.211c0-9.317-7.497-16.876-16.876-16.876h-101.27c-9.318 0-16.876 7.559-16.876 16.876v101.271a16.84 16.84 0 01-16.876 16.876H133.503c-9.318 0-16.876-7.558-16.876-16.876V258.136c0-9.318 7.558-16.876 16.876-16.876h101.27a16.84 16.84 0 0116.876 16.876v101.27c0 9.318 7.559 16.876 16.876 16.876h101.271a16.84 16.84 0 0016.876-16.876v-101.27c0-9.318 7.558-16.876 16.876-16.876h101.27a16.84 16.84 0 0116.876 16.876v101.27a16.84 16.84 0 01-16.876 16.876h-101.27c-9.318 0-16.876 7.558-16.876 16.876l.015.031z"
        ></path>
      </g>
    </svg>
  );
}

export default CockpitLogoBackGround;
