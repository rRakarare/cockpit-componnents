import CustomBreadcrumb from "@/components-v2/custom/unsorted/breadcrumb";
import { hrefMap } from "@/config-v2/links";

interface Props {
  name: string | null | undefined;
}

function SiloBreadcrumbDetail({ name }: Props) {
  return (
    <div className="h-topbar w-full border-b flex items-center justify-between px-4 sticky top-0 bg-background z-10">
      <CustomBreadcrumb
        links={[
          { text: hrefMap.dataSilo.text, href: hrefMap.dataSilo.href },
          { text: name },
        ]}
      />
    </div>
  );
}

export default SiloBreadcrumbDetail;
