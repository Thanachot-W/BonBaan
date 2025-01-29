import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import {
  Package,
  House,
  ShoppingBag,
  MessageCircle,
  User,
  CreditCard,
  Inbox,
  ChevronRight,
  LogOut,
} from "lucide-react";
import { Link } from "react-router";
import { SidebarMenuBadge } from "../ui/sidebar";

const menuItems = {
  header: [{ title: "คำขอ", url: "/inbox", icon: Inbox }],
  content: [
    { title: "หน้าหลัก", url: "/home", icon: House },
    { title: "คำสั่งซื้อ", url: "/orders", icon: ShoppingBag },
    { title: "บริการ", url: "/services", icon: Package },
    { title: "พูดคุย", url: "/chat", icon: MessageCircle },
    { title: "ผู้ใช้", url: "/users", icon: User },
    { title: "ชำระเงิน", url: "/payment", icon: CreditCard },
  ],
  footer: [{ title: "ออกจากระบบ", url: "/logout", icon: LogOut }],
};

const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <div>
          <img className="h-12 px-3" src="src/assets/images/logo.svg" alt="" />
        </div>
        <SidebarMenu>
          {menuItems.header.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild className="text-white">
                <Link to={item.url}>
                  <item.icon size={32} color="white" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
              <SidebarMenuBadge className="text-white">24</SidebarMenuBadge>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.content.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon size={32} color="#5B5471" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
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
                  <User size={32} color="#5B5471" /> Username
                  <ChevronRight className="ml-auto" size={32} color="#5B5471" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="right"
                sideOffset={16}
                className="z-50 min-w-32 overflow-hidden rounded-md bg-white p-1 text-neutral-950 shadow-md
                data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 slide-in-from-left-2"
              >
                {menuItems.footer.map((item) => (
                  <DropdownMenuItem
                    asChild
                    key={item.url}
                    className="text-[--w] relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0"
                  >
                    <SidebarMenuButton asChild>
                      <Link to={item.url}>
                        <item.icon size={24} color="#5B5471" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
