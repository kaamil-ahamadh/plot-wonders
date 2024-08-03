"use client";

import { ROUTES } from "@/constants";
import Image from "next/image";
import Link from "next/link";

import { useRouter, usePathname } from "next/navigation";

const Bottombar = () => {
  const pathname = usePathname();
  return (
    <>
      <section className="bottombar">
        <div className="bottombar_container">
          {ROUTES.map((link) => {
            const isActive =
              (pathname.includes(link.href) && link.href.length > 1) ||
              pathname === link.href;

            return (
              <Link
                key={link.id}
                href={link.href}
                className={`bottombar_link text-cyan-200 ${
                  isActive && "bg-[#281B87] text-[#FFF]"
                }`}
              >
                <Image src={link.img} alt={link.label} width={24} height={24} />

                <p className="text-[12px] font-semibold leading-4 text-white">
                  {link.label.split(/\s+/)[0]}
                </p>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Bottombar;
