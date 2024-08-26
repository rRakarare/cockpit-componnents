import { ReactElement, useState } from "react";
import {
  ChevronRight,
  Clapperboard,
  HomeIcon,
  LibraryBig,
  MessageSquare,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export interface SimpleNavItemType {
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

const itemList: (SimpleNavItemType | DropdownNavItem)[] = [
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
    link: "/media",
  },
];

export const SimpleNavItem = ({
  navItem,
  isOpen,
}: {
  navItem: SimpleNavItemType;
  isOpen: boolean;
}) => {

  const {pathname} = useLocation();
  const isActive = navItem.link === pathname;

  return (
    <Link
      to={navItem.link}
      className={cn("flex items-center p-2 pl-3 rounded-md hover:bg-accent-deep w-full", isActive && "bg-accent-deep")}
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

  const {pathname} = useLocation();
  const isActive = navItem.link === pathname;

  return (
    <Link
      to={navItem.link}
      className={cn("flex items-center p-2 pl-3 rounded-md hover:bg-accent-deep", isActive && "bg-accent-deep")}
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
  const {pathname} = useLocation();

  const isActive = navItem.navitems.some((item) => item.link === pathname);

  return (
    <div className="overflow-hidden">
      <div
        className={cn("flex items-center p-2 pl-3 rounded-md hover:bg-accent-deep active:bg-accent-deep w-full cursor-pointer", isActive && "bg-accent-deep")}
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
        <div className="space-y-1 pl-2 w-full border-l-2">
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
