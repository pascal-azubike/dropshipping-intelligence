import React from 'react';
import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { useAuth } from '@/hooks/useAuth';
import { Logo } from '@/components/ui/logo';
import { SidebarTrigger } from '@/components/ui/sidebar';

export const TopNavbar = () => {
  const { user } = useAuth();

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-12 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      {/* Mobile Sidebar Toggle at extreme left */}
      <div className="md:hidden">
        <SidebarTrigger className="h-7 w-7 absolute left-2 top-1.5 z-50" />
      </div>
      <div className="flex h-full items-center px-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <Logo size="sm" />
          </div>
        </div>
        <div className="ml-auto flex items-center space-x-3">
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="relative h-7 w-7">
            <Bell className="h-4 w-4" />
            <Badge className="absolute -right-1 -top-1 h-4 w-4 p-0 flex items-center justify-center text-[10px]">3</Badge>
          </Button>
          <Avatar className="h-7 w-7">
            <AvatarImage src={user?.avatar} alt={user?.name} />
            <AvatarFallback className="text-xs">{user?.name?.charAt(0)}</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};
