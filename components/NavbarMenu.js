import React from "react";
import Link from "next/link";

const NavbarMenu = () => {
  return (
    <div className="menus">
      <Link href="/">
        <div className="item">Home</div>
      </Link>
      <Link href="/post">
        <div className="item">Post</div>
      </Link>
      <Link href="/about">
        <div className="item">About</div>
      </Link>
    </div>
  );
};

export default NavbarMenu;
