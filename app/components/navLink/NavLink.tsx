import Link, { LinkProps } from "next/link";
import React, { ReactNode } from "react";

export type NavLinkProps = LinkProps & {
  children: ReactNode;
  href: string;
};

export default function NavLink({ children, href }: NavLinkProps) {
  return (
    <>
      <Link href={href}>{children}</Link>
    </>
  );
}
