"use client";

import Image from "next/image";
import { navigations } from "@/contants/navigation";
import Link from "next/link";
import Logo from "@/components/layout/logo";

const Header = () => {
  return (
    <header className="max-w-[1200px] mx-auto p-6 flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/" aria-label="Trang chủ">
          <Logo />
        </Link>
      </div>

      <nav className="xl:w-[500px]">
        <ul className="flex items-center gap-10">
          {navigations.map((item, index) => (
            <li key={index}>
              <Link
                href={item.path}
                className="text-lg font-medium leading-6 text-gray-900 aos-init aos-animate">
                {item.description}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <Image src="/vietnam-svgrepo-com.svg" alt="Vietnamese Flag" width={48} height={48} />
      </div>
    </header>   
  );
};

export default Header;
