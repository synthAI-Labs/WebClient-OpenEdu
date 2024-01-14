import { Github, LifeBuoy, LogOut, Settings, User } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { getImageFromLocalStorage } from '@/scripts/check-user-auth';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const UserAvatar = () => {
  let imageAddress: string = '';
  if (process.browser) {
    imageAddress = getImageFromLocalStorage();
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          {imageAddress === '' ? <AvatarFallback>CN</AvatarFallback> : null}
          <AvatarImage
            src={`${process.env.NEXT_PUBLIC_SERVER_URL}/i/${imageAddress}`}
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href="/dashboard">
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
          </Link>
          <Link href="/dashboard?editProfile">
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuSeparator />
        <Link href="https://github.com/ai-res/webclient-openedu">
          <DropdownMenuItem>
            <Github className="mr-2 h-4 w-4" />
            <span>GitHub</span>
          </DropdownMenuItem>
        </Link>
        <Link href="/support">
          <DropdownMenuItem>
            <LifeBuoy className="mr-2 h-4 w-4" />
            <span>Support</span>
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <Link href="/logout">
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <span className=" text-red-600 font-bold"> Logout </span>
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAvatar;
