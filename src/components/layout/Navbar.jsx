"use client";

import React from "react";
import {
  Navbar, NavbarBrand, NavbarContent, NavbarItem, Button,
  NavbarMenuToggle, NavbarMenu, NavbarMenuItem,
  Avatar, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem,
} from "@heroui/react";
import { Link } from "@heroui/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useSession, signOut } from "@/lib/auth-client";

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const user = session?.user;

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "My Profile", href: "/profile" },
  ];

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      className="bg-white/80 backdrop-blur-md border-b border-gray-100"
      height="4.5rem"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-gray-900"
        />
        <NavbarBrand className="flex items-center gap-4">
          <Image
            src="/logo.png"
            className="drop-shadow-[0_0_8px_rgba(37,99,235,0.5)] hover:scale-110 transition-transform duration-300"
            alt="SkillSphere Logo"
            priority={true}
            width={40}
            height={40}
          />
          <Link href="/" className="font-bold text-xl pt-2 text-gray-900 tracking-tight">
            SkillSphere
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.href}>
            <Link
              href={item.href}
              className={`text-sm font-medium transition-colors ${pathname === item.href ? "text-blue-600" : "text-gray-500 hover:text-gray-900"
                }`}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end" className="gap-3">
        {user ? (
          <div className="flex items-center gap-2">
            <Avatar
              as="button"
              className="cursor-pointer border border-gray-200"
              size="sm"
              name={user.name}
              src={user.image ?? undefined}
            />
            <Button
              onPress={handleSignOut}
              className="rounded-full text-xs font-semibold px-4">
              Log Out
            </Button>
          </div>
        ) : (
          <>
            <NavbarItem>
              <Button
                as={Link}
                variant="light"
                href="/auth"
                className="text-sm font-medium text-gray-900 rounded-full px-6 border border-gray-200"
              >
                Sign In
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button
                as={Link}
                href="/auth"
                className="bg-gray-900 text-white font-medium px-6 h-10 rounded-full text-sm"
              >
                Sign Up
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>

      <NavbarMenu className="bg-white pt-6">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              className="w-full text-lg py-3 font-medium text-gray-900 border-b border-gray-50"
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}