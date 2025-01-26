import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
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
    url: "/หน้าหลัก",
    icon: House,
  },
  {
    title: "คำสั่งซื้อ",
    url: "/คำสั่งซื้อ",
    icon: ShoppingBag,
  },
  {
    title: "บริการ",
    url: "/บริการ",
    icon: Package,
  },
  {
    title: "พูดคุย",
    url: "/พูดคุย",
    icon: MessageCircle,
  },
  {
    title: "ผู้ใช้",
    url: "/ผู้ใช้",
    icon: User,
  },
  {
    title: "ชำระเงิน",
    url: "/ชำระเงิน",
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
