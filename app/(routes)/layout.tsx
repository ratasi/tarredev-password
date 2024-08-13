import { Logo } from "@/components/Shared/Logo";
import { Sidebar } from "@/components/Shared/Sidebar";
import { SidebarMobile } from "@/components/Shared/SidebarMobile";

export default function LayoutRoutes({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="h-full">
      <div className="flex justify-between lg:hidden px-6 py-3 items-center bg-blue-800">
        <div className="py-1 text-white">
          <Logo />
        </div>
        <SidebarMobile />
      </div>
      <div className="flex h-full">
        <div
          className="max-w-lg hidden lg:flex h-full w-72 flex-col fixed
           bg-blue-800 px-4 text-white"
        >
          <Sidebar />
        </div>
        <div className="w-full lg:pl-72">
          <div className="p-6">{children}</div>
        </div>
      </div>
    </main>
  );
}
