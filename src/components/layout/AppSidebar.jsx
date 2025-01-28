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
import { Package, House, ShoppingBag, MessageCircle, User, CreditCard } from "lucide-react";
import { Link } from "react-router";

const items = [
  {
    title: "หน้าหลัก",
    url: "/home",
    icon: House,
  },
  {
    title: "คำสั่งซื้อ",
    url: "/orders",
    icon: ShoppingBag,
  },
  {
    title: "บริการ",
    url: "/services",
    icon: Package,
  },
  {
    title: "พูดคุย",
    url: "/chat",
    icon: MessageCircle,
  },
  {
    title: "ผู้ใช้",
    url: "/users",
    icon: User,
  },
  {
    title: "ชำระเงิน",
    url: "/payment",
    icon: CreditCard,
  },
];

const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon size={32} color="#5B5471"/>
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
