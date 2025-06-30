"use client";

import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function MainMenu() {
  return (
    <header className="w-full flex justify-between items-center p-4 border-b">
      <Link href="/" className="text-lg font-bold">
        My Site
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="https://github.com/cs-dev-port">Contact</Link>
      </nav>

      {/* Mobile Hamburger */}
      <Sheet>
        <SheetTrigger className="md:hidden">
          <Menu className="h-6 w-6" />
        </SheetTrigger>
        <SheetContent side="left" className="w-64">
          <nav className="flex flex-col gap-4 mt-4 mx-4 ">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="https://github.com/cs-dev-port">Contact</Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
