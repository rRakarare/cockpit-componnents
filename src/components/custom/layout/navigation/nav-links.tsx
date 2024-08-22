import { ReactElement, useState } from "react";
import {
  ChevronRight,
  Clapperboard,
  HomeIcon,
  LibraryBig,
  MessageSquare,
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface SimpleNavItem {
  title: string;
  icon: ReactElement;
  link: string;
}

interface SubNavItem {
  title: string;
  link: string;
}

interface DropdownNavItem {
  title: string;
  icon: ReactElement;
  navitems: SubNavItem[];
}

const itemList: (SimpleNavItem | DropdownNavItem)[] = [
  {
    title: "Home",
    icon: <HomeIcon className="size-5 shrink-0" />,
    link: "/",
  },
  {
    title: "Library",
    icon: <LibraryBig className="size-5 shrink-0" />,
    link: "/library",
  },
  {
    title: "Chat",
    icon: <MessageSquare className="size-5 shrink-0" />,
    navitems: [
      {
        title: "KI-Assistent",
        link: "/chat",
      },
      {
        title: "Datensilo",
        link: "/chat",
      },
      {
        title: "Projekte",
        link: "/chat",
      },
    ],
  },
  {
    title: "Media Studio",
    icon: <Clapperboard className="size-5 shrink-0" />,
    link: "/library",
  },
];

const SimpleNavItem = ({
  navItem,
  isOpen,
}: {
  navItem: SimpleNavItem;
  isOpen: boolean;
}) => {
  return (
    <Link
      to={navItem.link}
      className="flex items-center p-2 rounded-md hover:bg-accent w-full"
    >
      {navItem.icon}
      <span
        className={cn(
          "opacity-100 duration-300 ml-2 font-semibold whitespace-nowrap",
          !isOpen && "w-0 opacity-0 ml-0"
        )}
      >
        {navItem.title}
      </span>
    </Link>
  );
};

const SubNavItem = ({ navItem }: { navItem: SubNavItem }) => {
  return (
    <Link
      to={navItem.link}
      className="flex items-center p-2 rounded-md hover:bg-accent w-full"
    >
      <span className="opacity-100 duration-300 ml-2 font-semibold whitespace-nowrap">
        {navItem.title}
      </span>
    </Link>
  );
};

const DropdownNavItem = ({
  navItem,
  isOpen,
}: {
  navItem: DropdownNavItem;
  isOpen: boolean;
}) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div className="overflow-hidden">
      <div
        className="flex items-center p-2 rounded-md hover:bg-accent w-full cursor-pointer"
        onClick={() => setOpenDropdown((state) => !state)}
      >
        {navItem.icon}
        <span
          className={cn(
            "opacity-100 duration-300 ml-2 font-semibold whitespace-nowrap",
            !isOpen && "w-0 opacity-0 ml-0"
          )}
        >
          {navItem.title}
        </span>
        <ChevronRight
          className={cn(
            "size-5 ml-auto rotate-0 transition-all opacity-0",
            openDropdown && isOpen && "rotate-90",
            isOpen && "opacity-100"
          )}
        />
      </div>
      <div
        className={cn(
          "flex space-x-3 max-h-0 my-0 transition-all ease-out duration-100",
          openDropdown && isOpen && "max-h-[130px] my-4 duration-100"
        )}
      >
        <span className="bg-accent w-1 rounded-3xl"></span>
        <div className="space-y-2 w-full">
          {navItem.navitems.map((item, index) => (
            <SubNavItem key={index} navItem={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const Navitems = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <>
      {itemList.map((item, index) => {
        if ("link" in item) {
          return <SimpleNavItem key={index} navItem={item} isOpen={isOpen} />;
        } else {
          return <DropdownNavItem key={index} navItem={item} isOpen={isOpen} />;
        }
      })}
    </>
  );
};
