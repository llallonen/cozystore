"use client";

import userpicplaceholder from "@/assets/userpicplaceholder.jpeg";
import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import dial from "@/assets/dial.svg"

interface UserMenuBtnProps {
  session: Session | null;
}
export default function UserMenuBtn({ session }: UserMenuBtnProps) {
  const user = session?.user;

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-circle btn-ghost">
        {user ? (
          <Image
            src={user?.image || userpicplaceholder}
            alt="Profile pic"
            width={40}
            height={40}
            className="w-10 rounded-full"
          />
        ) : (
            <Image
            src={dial}
            alt="Profile pic"
            width={27}
            height={27}
          />
        )}
      </label>
      <ul
        tabIndex={0}
        className="z-15 menu dropdown-content rounded-box menu-sm mt-3 w-52 bg-base-300"
      >
        <li>
          {user ? (
            <button onClick={() => signOut({ callbackUrl: "/" })}>
              Sign Out
            </button>
          ) : (
            <button onClick={() => signIn()}>Sign In</button>
          )}
        </li>
      </ul>
    </div>
  );
}
