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
  Package,
  House,
  ShoppingBag,
  MessageCircle,
  User,
  CreditCard,
  Inbox,
} from "lucide-react";
import { Link } from "react-router";
import { SidebarMenuBadge } from "../ui/sidebar";

const menuItems = {
  header: [
    { title: "คำขอ", url: "/inbox", icon: Inbox },
  ],
  content: [
    { title: "หน้าหลัก", url: "/home", icon: House },
    { title: "คำสั่งซื้อ", url: "/orders", icon: ShoppingBag },
    { title: "บริการ", url: "/services", icon: Package },
    { title: "พูดคุย", url: "/chat", icon: MessageCircle },
    { title: "ผู้ใช้", url: "/users", icon: User },
    { title: "ชำระเงิน", url: "/payment", icon: CreditCard },
  ],
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
      <SidebarFooter />
    </Sidebar>
  );
};

export default AppSidebar;
