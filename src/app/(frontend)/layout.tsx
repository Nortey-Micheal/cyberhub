"use client";

import Link from "next/link";
import { Search, ShoppingBag } from "lucide-react";
import LoginButton from "@/components/ui/loginButton";
import { useSelector } from "react-redux";
import { StoreState } from "@/lib/store";
import { PostBlogButton } from "@/components/blog-post-dialog";
import Logout from "@/components/logout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = useSelector((state:StoreState) => state.user)
  return (
    <>
        <header>
          <nav className="w-full flex items-center justify-between px-4 py-5 border-b border-gray-300 mb-4">
            <div className="flex items-center lg:gap-6 gap-2">
              <h1 className="text-xl lg:text-3xl font-serif font-bold hover:underline decoration-2 "><Link href={'/'}>Cyberhub</Link></h1>
              <ul className="flex items-center lg:gap-4 gap-2">
                <li className="lg:text-lg hover:underline "><Link href={'/stories'}>Stories</Link></li>
                <li className="lg:text-lg hover:underline "><Link href={'/forum'}>Forum</Link></li>
                <li className="lg:text-lg hover:underline "><Link href={'/store'}>Store</Link></li>
                <li className="lg:text-lg hover:underline "><Link href={'/contact'}>Contact</Link></li>
              </ul>
            </div>
            <ul className="flex items-center gap-6 lg:gap-14">
              <li><Search /></li>
              <li><ShoppingBag /></li>
              {
                !user?._id ? <li><LoginButton/></li>
                : <>
                    <PostBlogButton />
                    <Logout />
                </>
              }
            </ul>
          </nav>
          <>
          {children}
          </>
        </header>
    </>
  );
}
