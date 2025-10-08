import { Calendar, ChevronDown, ChevronUp, Home, Inbox, Plus, Projector, Search, Settings, User2 } from "lucide-react";
import { Sidebar, 
        SidebarContent, 
        SidebarFooter, 
        SidebarGroup, 
        SidebarGroupAction, 
        SidebarGroupContent, 
        SidebarGroupLabel, 
        SidebarHeader, 
        SidebarMenu, 
        SidebarMenuBadge, 
        SidebarMenuButton, 
        SidebarMenuItem, 
        SidebarMenuSub, 
        SidebarMenuSubButton, 
        SidebarMenuSubItem, 
        SidebarSeparator} from "./ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import { DropdownMenu, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";

const items = [
    {
        title: "Home",
        url: "/",
        icon: Home
    },
    {
        title: "Inbox",
        url: "#",
        icon: Inbox
    },
    {
        title: "Calendar",
        url: "#",
        icon: Calendar
    },
    {
        title: "Search",
        url: "#",
        icon: Search
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings
    },
];

const AppSidebar = () => {
    return (
    <Sidebar collapsible="icon">
    <SidebarHeader>
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton asChild>
                    <Link href="/">
                    <Image src="/vercel.svg" alt="Logo" width={20} height={20} className="rounded-full"/>
                        <span className="text-lg font-bold">MyApp</span>
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    </SidebarHeader>
    <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                  {
                    item.title === "Inbox" && (
                      <SidebarMenuBadge>3</SidebarMenuBadge>
                    )
                  }
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarGroupAction>
            <Plus /> <span className="sr-only">Add Project</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#">
                    <Projector/>
                    See All Projects
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#">
                    <Plus/>
                    Add Project
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* COLLAPSABLE GROUP */}
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
             <CollapsibleTrigger>
              Collapsible
              <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
            </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="#">
                      <Projector/>
                      See All Projects
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="#">
                      <Plus/>
                      Add Project
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
        {/* NESTED MENU */}
        <SidebarGroup>
          <SidebarGroupLabel>Nested Menu Items</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#">
                    <Projector/>
                    See All Projects
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link href="#">
                        <Plus/>
                        Add Project
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link href="#">
                        <Plus/>
                        Add Category
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenuItem>
              </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                    <User2 />John Doe <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;