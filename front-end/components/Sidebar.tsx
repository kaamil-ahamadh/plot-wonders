"use client";

import { ROUTES } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import AppButton from "./AppButton";

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <section className="custom-scrollbar sidebar">
      <div className="w-full flex flex-1 flex-col gap-2 px-6">
        {ROUTES.map((link) => {
          const isActive =
            (pathname.includes(link.href) && link.href.length > 1) ||
            pathname === link.href;

          return (
            <Link
              key={link.id}
              href={link.href}
              className={`sidebar_link text-cyan-200 hover:bg-tertiary ${
                isActive && "bg-tertiary text-[#FFF]"
              }`}
            >
              <Image src={link.img} alt={link.label} width={24} height={24} />

              <p className="text-[0.90rem]">{link.label}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
