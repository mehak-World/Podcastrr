import LeftSidebar from "@/components/LeftSidebar";
import MobileNav from "@/components/MobileNav";
import RightSidebar from "@/components/RightSidebar";
import Image from "next/image"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
          <div>
            <main className = "relative flex bg-black-3">
                <LeftSidebar />
                <section className = "flex min-h-screen flex-1 flex-col px-4 sm:px-14 my-10">
                    <div className=  "">
                        <div className = "flex items-center justify-between md:hidden">
                            <Image src = "/icons/logo.svg" width={30} height = {30} alt = "menu-icon" />
                            <MobileNav />
                        </div>
                        <div>
                            {children}
                        </div>
                    </div>
                </section>
                
                <RightSidebar />
            </main>
          </div>
  );
}
