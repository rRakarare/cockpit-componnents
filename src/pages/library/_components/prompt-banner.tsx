import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { prompts } from "@/config/prompt/example-data";
import { PromptType } from "@/config/prompt/types";

function PromptBanner() {
  return (
    <Carousel className="container bg-accent rounded-xl">
      <CarouselContent>
        {prompts.map((item, i) => (
          <PromptBannerItem key={i} title={item.title} type={item.type} />
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

const PromptBannerItem = ({ title }: Partial<PromptType>) => {
  return (
    <CarouselItem>
      <div className="h-40 max-w-96 mx-auto my-10 rounded-2xl bg-background shadow-sm p-4">
        <h1>{title}</h1>
      </div>
    </CarouselItem>
  );
};

export default PromptBanner;
