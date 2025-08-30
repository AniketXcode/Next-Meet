import Image from "next/image";
import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs";

import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-[#0F172B] px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.png"
          width={64}
          height={64}
          alt="yoom logo"
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          <span className="text-[#2c59e3]">Next</span>{" "}
          <span className="text-[#21BCFF]">Meet</span>
        </p>
      </Link>
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                footer: {
                  display: "none",
                },
                userButtonPopoverCard: {
                  backgroundColor: "#1a2238", 
                  color: "#fff", 
                  border: "1px solid #252A41", 
                },
                userButtonPopoverActionButton: {
                  backgroundColor: "#252A41", 
                  color: "#fff",
                  borderRadius: "8px",
                },
                userButtonPopoverActionButton__manageAccount: {
                  backgroundColor: "#252A41",
                },
                userButtonPopoverActionButton__signOut: {
                  backgroundColor: "#252A41",
                },
              },
            }}
          />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
