import { getLastMessage } from "@/lib-v2/formatters";
import { ImagePromptDetailType } from "@/types/db/imagePrompt";
import { Link } from "react-router-dom";

function ImagePromptItem({
  image_uuid,
  updated_at,
  images,
  input_prompt,
  title,
}: ImagePromptDetailType) {
  const delta = getLastMessage(updated_at);

  return (
    <div className="w-full flex space-x-6 justify-between bg-accent/50 p-4 rounded-lg shadow-md">
      <div className="flex flex-col justify-between space-y-2 min-w-80">
        <div className="space-y-2">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-sm">{input_prompt}</p>
        </div>
        <p className="text-xs text-gray-500">{delta}</p>
      </div>
      {images.map((image, i) => (
        <Link
          to={`/media/${image_uuid}`}
          key={i}
          className="p-3 bg-background dark:bg-transparent rounded-lg shadow-md hover:scale-110 transition-all"
        >
          <img src={image.url} className="size-full object-cover rounded-lg" />
        </Link>
      ))}
    </div>
  );
}

export default ImagePromptItem;
