"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import DarkModeToggle from "../DarkModeToggle"




  
  export default function Navbar() {
    const { setTheme } = useTheme()

    return (
        <div className="p-4 flex justify-between">
            <div>
                My Wallet
            </div>
            <DarkModeToggle/>
        </div>
      
    )
  }