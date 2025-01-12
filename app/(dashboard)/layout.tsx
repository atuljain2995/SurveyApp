import Logo from "@/components/Logo";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { UserButton } from "@clerk/nextjs";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen min-w-full bg-background max-h-screen">
      <nav>
        <Logo />
        <ThemeSwitcher />
        <UserButton afterSwitchSessionUrl="/sign-in" />
      </nav>
      <div className="flex w-full flex-grow">{children}</div>
    </div>
  );
}
