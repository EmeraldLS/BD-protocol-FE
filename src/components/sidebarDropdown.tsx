import { CreditCard, User, Home } from "lucide-react";
import { FaChevronRight } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navigate } from "astro:transitions/client";

interface SidebarDropdownProps {
  path: string;
}

export function DropdownMenuDemo({ path }: SidebarDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className=" text-lg flex gap-2 items-center w-full"
        >
          {path} <FaChevronRight />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => navigate("/dashboard")}>
            <Home className="mr-2 h-4 w-4" />
            <span>Home</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate("/dashboard/tasks")}>
            <User className="mr-2 h-4 w-4" />
            <span>Tasks</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate("/dashboard/teams")}>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Teams</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate("/dashboard/plugins")}>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Plugins</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
