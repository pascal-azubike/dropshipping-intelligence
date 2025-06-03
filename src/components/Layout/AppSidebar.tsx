
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { Logo } from '@/components/ui/logo';
import { 
  TrendingUp, 
  Search, 
  Users, 
  BookmarkPlus, 
  Settings,
  LogOut,
  Info,
  Phone,
  HelpCircle,
  LifeBuoy,
  FileText,
  Briefcase,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const navigation = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: TrendingUp,
  },
  {
    title: 'Product Trends',
    url: '/product-trends',
    icon: Search,
  },
  {
    title: 'Suppliers',
    url: '/suppliers',
    icon: Users,
  },
  {
    title: 'Competitors',
    url: '/competitors',
    icon: BookmarkPlus,
  },
  {
    title: 'Settings',
    url: '/settings',
    icon: Settings,
  },
];

const resources = [
  {
    title: 'About Us',
    url: '/about',
    icon: Info,
  },
  {
    title: 'Contact Us',
    url: '/contact',
    icon: Phone,
  },
  {
    title: 'FAQ',
    url: '/faq',
    icon: HelpCircle,
  },
  {
    title: 'Help Center',
    url: '/help',
    icon: LifeBuoy,
  },
  {
    title: 'Blog',
    url: '/blog',
    icon: FileText,
  },
  {
    title: 'Careers',
    url: '/careers',
    icon: Briefcase,
  },
];

export const AppSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();
  const { toast } = useToast();
  const [resourcesExpanded, setResourcesExpanded] = useState(false);

  const isActive = (url: string) => location.pathname === url;

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out successfully",
      description: "You have been signed out of your account",
    });
    navigate('/');
  };

  return (
    <Sidebar>
      <SidebarHeader className="p-4 border-b border-border">
        <Logo size="md" />
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={isActive(item.url)}
                    className="w-full"
                  >
                    <button onClick={() => navigate(item.url)} className="flex items-center space-x-2">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <Collapsible open={resourcesExpanded} onOpenChange={setResourcesExpanded}>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className="w-full">
                      <div className="flex items-center space-x-2 w-full">
                        {resourcesExpanded ? (
                          <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                        ) : (
                          <ChevronRight className="h-4 w-4 transition-transform duration-200" />
                        )}
                        <span>Resources</span>
                      </div>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                </SidebarMenuItem>
                <CollapsibleContent className="overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="ml-6 space-y-1 mt-1">
                    {resources.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton 
                          asChild 
                          isActive={isActive(item.url)}
                          className="w-full"
                        >
                          <button onClick={() => navigate(item.url)} className="flex items-center space-x-2">
                            <item.icon className="h-4 w-4" />
                            <span>{item.title}</span>
                          </button>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-4 border-t border-border">
        <Button
          variant="outline"
          onClick={handleLogout}
          className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/20"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Sign Out
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};
