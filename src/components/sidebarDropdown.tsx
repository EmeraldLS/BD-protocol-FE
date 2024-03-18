import { CreditCard, User, Home } from "lucide-react";

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
        <Button variant="outline" className=" text-lg">
          {path}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => navigate("/")}>
            <Home className="mr-2 h-4 w-4" />
            <span>Home</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate("/tasks")}>
            <User className="mr-2 h-4 w-4" />
            <span>Tasks</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate("/teams")}>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Teams</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate("/plugins")}>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Plugins</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
