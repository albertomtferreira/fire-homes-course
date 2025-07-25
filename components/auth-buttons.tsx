"use client"

import { useAuth } from "@/context/auth"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Avatar, AvatarFallback } from "./ui/avatar"
import Image from "next/image"
import { FaHeart, FaTools, FaUser } from "react-icons/fa"
import { FiLogOut } from "react-icons/fi"
import { useRouter } from "next/navigation"

export default function AuthButtons() {
  const auth = useAuth()
  const router = useRouter()
  return (
    <div>
      {!!auth?.currentUser &&
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              {!!auth.currentUser.photoURL && (
                <Image
                  src={auth.currentUser.photoURL}
                  alt={`${auth.currentUser.displayName} avatar`}
                  width={70}
                  height={70}
                />
              )}
              <AvatarFallback className="text-sky-950">
                {(auth.currentUser.displayName || auth.currentUser.email)?.[0]}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>
              <div>{auth.currentUser.displayName}</div>
              <div className="font-normal">{auth.currentUser.email}</div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem asChild>
              <Link href="/account">
                <FaUser />
                My Account
              </Link>
            </DropdownMenuItem>

            {!!auth.customClaims?.admin && (
              <DropdownMenuItem asChild>
                <Link href="/admin-dashboard">
                  <FaTools />
                  Admin Dashboard
                </Link>
              </DropdownMenuItem>
            )}


            {!auth.customClaims?.admin && (
              <DropdownMenuItem asChild>
                <Link href="/account/my-favourites">
                  <FaHeart />
                  My Favourites
                </Link>
              </DropdownMenuItem>
            )
            }

            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={async () => {
              await auth.logout()
              router.refresh()
            }}>
              <FiLogOut />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      }
      {!auth?.currentUser &&
        <div className="flex gap-2 items-center">
          <Link href="/login" className="uppercase tracking-widest hover:underline">
            Login
          </Link>
          <div className="h-8 w-[1px] bg-white/50 " />
          <Link href="/register" className="uppercase tracking-widest hover:underline">
            Register
          </Link>
        </div>
      }
    </div>
  )
}