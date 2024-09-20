import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components-v2/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import { prompts } from "@/config-v2/prompt/example-data";
import { PromptType } from "@/config-v2/prompt/types";
import { getPromptIcon } from "@/config-v2/prompt/icon-map";

function PromptBanner() {
  return (
    <Carousel
      className="container bg-accent rounded-xl"
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent>
        {prompts.map((item, i) => (
          <PromptBannerItem key={i} {...item} />
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

const PromptBannerItem = ({ name, description, color, icon }: Partial<PromptType>) => {
  return (
    <CarouselItem>
      <div className="h-40 max-w-96 mx-auto my-10 rounded-2xl bg-background shadow-sm p-4 space-y-2 flex flex-col justify-between">
        <div>
        <h1 className="font-semibold">{name}</h1>
        <p className="text-muted-foreground">{description}</p>
        </div>
        <div style={{background: color}} className="w-8 h-8 bg-primary text-primary-foreground rounded-full inline-flex items-center justify-center shrink-0 self-end">
        {getPromptIcon({iconName: icon})}
      </div>
      </div>
    </CarouselItem>
  );
};

export default PromptBanner;
