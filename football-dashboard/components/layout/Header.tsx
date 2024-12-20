"use client";

import Image from "next/image";
import { navigations } from "@/contants/navigation";
import Link from "next/link";
import Logo from "@/components/layout/logo";

const Header = () => {
  return (
    <header className="sticky top-0 bg-transparent transition-all duration-300 backdrop-blur-md z-50 shadow-md">
      <div className="max-w-[1200px] mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" aria-label="Trang chủ" data-aos="fade-left"  data-aos-duration="1200" data-aos-easing="ease-out-back">
            <Logo />
          </Link>
        </div>

        <nav className="hidden sm:block xl:w-[380px]">
          <ul className="flex items-center gap-10">
            {navigations.map((item, index) => (
              <li 
                key={index}
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay={600 + (index * 200)}
                data-aos-easing="ease-out-back"
              >
                <Link
                  href={item.path}
                  className="text-lg leading-6 font-bold aos-init aos-animate">
                  {item.description}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <Image
            src="/vietnam-svgrepo-com.svg"
            alt="Vietnamese Flag"
            width={48}
            height={48}
            data-aos="fade-left"
            data-aos-delay="900"
            data-aos-duration="1000" 
            data-aos-easing="ease-out-back"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
