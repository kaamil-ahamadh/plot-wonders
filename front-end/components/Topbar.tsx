"use client";

import Image from "next/image";
import Link from "next/link";
import AppButton from "./AppButton";
import { useSessionContext } from "./ContextProvider";
import { useEffect, useState } from "react";

type TopBarProps = {
  title: string;
};

const Topbar = ({ title }: TopBarProps) => {
  return (
    <nav className="topbar">
      <Link className="flexCenter gap-4" href="/">
        <Image src="logo.svg" alt="Logo" width={28} height={28} />
        <p className="">Plot Wonders</p>
      </Link>

      {/* {accountId && <div className="btn">{accountId}</div>} */}
    </nav>
  );
};

export default Topbar;
