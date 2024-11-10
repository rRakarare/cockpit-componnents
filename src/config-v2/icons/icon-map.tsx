import {
  AtSign,
  Briefcase,
  Calendar,
  Clock,
  Compass,
  Edit,
  Home,
  Mail,
  MailIcon,
  Map,
  MapPin,
  Phone,
  User,
  Users,
} from "lucide-react";
import { cn } from "@/lib-v2/utils";
import { IconType } from "./types/icon-types";

import { ReactElement } from "react";

export const getIcon = ({
  iconName,
  className,
}: {
  iconName: IconType | undefined;
  className?: string;
}): ReactElement => {
  switch (iconName) {
    case "mail":
      return <Mail className={cn("size-4", className)} />;
    case "at-sign":
      return <AtSign className={cn("size-4", className)} />;
    case "phone":
      return <Phone className={cn("size-4", className)} />;
    case "message":
      return <MailIcon className={cn("size-4", className)} />;
    case "user":
      return <User className={cn("size-4", className)} />;
    case "users":
      return <Users className={cn("size-4", className)} />;
    case "home":
      return <Home className={cn("size-4", className)} />;
    case "briefcase":
      return <Briefcase className={cn("size-4", className)} />;
    case "calendar":
      return <Calendar className={cn("size-4", className)} />;
    case "clock":
      return <Clock className={cn("size-4", className)} />;
    case "map-pin":
      return <MapPin className={cn("size-4", className)} />;
    case "map":
      return <Map className={cn("size-4", className)} />;
    case "compass":
      return <Compass className={cn("size-4", className)} />;
    case "edit":
      return <Edit className={cn("size-4", className)} />;
    default:
      return <></>;
  }
};
