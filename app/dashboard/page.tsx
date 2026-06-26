"use client";

import Link from "next/link";
import {
  Image as ImageIcon,
  Video,
  Layers,
  Music,
  Settings,
  Film,
  MessageCircle,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const sections = [
  {
    name: "Hero",
    href: "/dashboard/hero",
    icon: ImageIcon,
    description: "Manage the hero section of your homepage",
  },
  {
    name: "Videos",
    href: "/dashboard/videos",
    icon: Video,
    description: "Manage your video projects",
  },
  {
    name: "2D Animations",
    href: "/dashboard/2d-animations",
    icon: Layers,
    description: "Manage your 2D animation projects",
  },
  {
    name: "3D Animations",
    href: "/dashboard/3d-animations",
    icon: Film,
    description: "Manage your 3D animation projects",
  },
  {
    name: "Music",
    href: "/dashboard/music",
    icon: Music,
    description: "Manage your music tracks",
  },
  {
    name: "Contact",
    href: "/dashboard/contact",
    icon: MessageCircle,
    description: "View contact messages",
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
    description: "Manage website settings",
  },
];

export default function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-1">Dashboard</h1>
      <p className="text-muted-foreground mb-6">
        Welcome back. Choose a section to manage.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sections.map((section) => (
          <Link key={section.href} href={section.href}>
            <Card className="hover:border-primary/50 transition-colors h-full">
              <CardHeader>
                <section.icon className="h-6 w-6 mb-2 text-primary" />
                <CardTitle>{section.name}</CardTitle>
                <CardDescription>{section.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
