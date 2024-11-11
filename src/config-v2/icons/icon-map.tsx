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

import { ReactElement } from "react";
import { IconNameType } from "@/types/icons";

export const getIcon = ({
  iconName,
  className,
}: {
  iconName: IconNameType | undefined;
  className?: string;
}): ReactElement => {
  switch (iconName) {
    case "mail":
      return <Mail className={cn("size-4 text-white", className)} />;
    case "at-sign":
      return <AtSign className={cn("size-4 text-white", className)} />;
    case "phone":
      return <Phone className={cn("size-4 text-white", className)} />;
    case "message":
      return <MailIcon className={cn("size-4 text-white", className)} />;
    case "user":
      return <User className={cn("size-4 text-white", className)} />;
    case "users":
      return <Users className={cn("size-4 text-white", className)} />;
    case "home":
      return <Home className={cn("size-4 text-white", className)} />;
    case "briefcase":
      return <Briefcase className={cn("size-4 text-white", className)} />;
    case "calendar":
      return <Calendar className={cn("size-4 text-white", className)} />;
    case "clock":
      return <Clock className={cn("size-4 text-white", className)} />;
    case "map-pin":
      return <MapPin className={cn("size-4 text-white", className)} />;
    case "map":
      return <Map className={cn("size-4 text-white", className)} />;
    case "compass":
      return <Compass className={cn("size-4 text-white", className)} />;
    case "edit":
      return <Edit className={cn("size-4 text-white", className)} />;
    default:
      return <></>;
  }
};
