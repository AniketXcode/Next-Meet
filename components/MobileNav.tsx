"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px] bg-[#0F172B]">
      <Sheet>
        {/* ✅ Trigger button */}
        <SheetTrigger asChild>
          <Image
            src="/icons/hamburger.svg"
            width={36}
            height={36}
            alt="hamburger icon"
            className="cursor-pointer sm:hidden"
          />
        </SheetTrigger>

        {/* ✅ Sidebar */}
        <SheetContent
          side="left"
          className="border-none bg-[#0F172B] pt-3 [&>button]:hidden" 
          // hides the default close button
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/icons/logo.png"
              width={64}
              height={64}
              alt="Next Meet"
            />
            <p className="text-[26px] font-extrabold text-white">
              <span className="text-[#2c59e3]">Next</span>{" "}
              <span className="text-[#21BCFF]">Meet</span>
            </p>
          </Link>

          {/* Nav Links */}
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((item) => {
                  const isActive = pathname === item.route;

                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        href={item.route}
                        key={item.label}
                        className={cn(
                          "flex gap-4 items-center p-4 rounded-lg w-full max-w-60",
                          {
                            "bg-blue-500": isActive,
                          }
                        )}
                      >
                        <Image
                          src={item.imgURL}
                          alt={item.label}
                          width={20}
                          height={20}
                        />
                        <p className="font-semibold">{item.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
