import React from 'react'
import { Link } from '@tanstack/react-router'
import { LayoutGrid, LogOut, Settings, ShieldCheck, User } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from '@/components/ui/tooltip'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function UserNav() {
  return (
    <DropdownMenu>
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="relative h-8 w-8 rounded-full border border-[#313131] hover:border-[#6798ff]/60 transition-colors cursor-pointer outline-none overflow-hidden"
              >
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-[#1e1e1e] text-[#ffffff] font-mono text-xs">
                    RF
                  </AvatarFallback>
                </Avatar>
              </button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent side="bottom">Profil &amp; Paramètres</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <DropdownMenuContent className="w-56 bg-[#141414] border-[#313131] text-[#ffffff]" align="end" forceMount>
        <DropdownMenuLabel className="font-normal p-2">
          <div className="flex flex-col space-y-1">
            <p className="text-xs font-bold leading-none text-[#ffffff]">Équipe Reflet</p>
            <p className="text-[11px] leading-none text-[#7c7c7c] font-mono">
              contact@reflet.dev
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-[#313131]" />
        <DropdownMenuGroup>
          <DropdownMenuItem className="text-xs hover:bg-[#1e1e1e] cursor-pointer" asChild>
            <Link to="/dashboard" className="flex items-center">
              <LayoutGrid className="w-3.5 h-3.5 mr-2.5 text-[#6798ff]" />
              <span>Vue Cockpit</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-xs hover:bg-[#1e1e1e] cursor-pointer" asChild>
            <Link to="/dashboard" className="flex items-center">
              <ShieldCheck className="w-3.5 h-3.5 mr-2.5 text-[#a7a7a7]" />
              <span>Clés &amp; Moteurs IA</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="bg-[#313131]" />
        <DropdownMenuItem className="text-xs text-red-400 hover:bg-[#1e1e1e] cursor-pointer" asChild>
          <a href="/login" className="flex items-center">
            <LogOut className="w-3.5 h-3.5 mr-2.5" />
            <span>Se déconnecter</span>
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
